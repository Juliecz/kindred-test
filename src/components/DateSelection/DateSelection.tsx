import * as React from 'react';
import { connect } from 'react-redux';

import {
  setSelectedDate,
} from '../../modules/actions';

import Calendar from '../Calendar/Calendar';

import './style.less';

interface ICalendar {
  selected: string;
  setSelectedDate: (value: string) => void; //todo ???
}

class DateSelection extends React.Component<ICalendar, {}> {
  setSelectedDate = (value) => {
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
  selected: state.selected.date
});

const mapDispatchToProps = dispatch => ({
  setSelectedDate: (value) => dispatch(setSelectedDate(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateSelection);
