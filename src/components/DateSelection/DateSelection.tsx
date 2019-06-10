import * as React from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { setSelectedDate, fetchFlights } from '../../modules/actions';
import * as types from '../../helpers/types';

import Calendar from '../Calendar/Calendar';

import './style.less';

interface ICalendar {
  selected: string;
  from: types.ISelectedDestinationData;
  to: types.ISelectedDestinationData;
  setSelectedDate: (value: string) => void;
  fetchFlights: (dep: string, arr: string, monthSel: string) => () => void;
}

class DateSelection extends React.Component<ICalendar, {}> {
  componentDidMount(): void {
    const { from, to, fetchFlights } = this.props;
    const today = moment().format('MM/YYYY');
    this.setSelectedDate(today);
    fetchFlights(from.data.AirportCode, to.data.AirportCode, today);
  }

  componentDidUpdate(prevProps: ICalendar): void {
    const { selected, from, to, fetchFlights } = this.props;
    if (
      prevProps.selected !== selected ||
      prevProps.from.data !== from.data ||
      prevProps.to.data !== to.data
    ) {
      fetchFlights(from.data.AirportCode, to.data.AirportCode, selected);
    }
  }

  setSelectedDate = (value: string): void => {
    this.props.setSelectedDate(value);
  };

  render() {
    const { selected } = this.props;

    return (
      <div className="wrapper date">
        <h3>Select month and year</h3>
        <Calendar selected={selected} setSelectedDate={this.setSelectedDate} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected.date,
  from: state.selected.from,
  to: state.selected.to,
});

const mapDispatchToProps = dispatch => ({
  setSelectedDate: value => dispatch(setSelectedDate(value)),
  fetchFlights: (dep, arr, monthSel) => dispatch(fetchFlights(dep, arr, monthSel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateSelection);
