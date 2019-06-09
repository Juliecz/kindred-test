import * as React from 'react';
import { connect } from 'react-redux';

import * as types from '../../helpers/types';
import {
  fetchDestinations,
  selectDeparture,
  selectArrival,
  swapDepartureArrival,
} from '../../modules/actions';

import Dropdown from '../Dropdown/Dropdown';

import './style.less';

interface IDestinationSelection {
  destinations: types.IDestination[];
  selected: types.ISelectedDestination;
  selectDeparture: (value: types.IDestination) => void;
  selectArrival: (value: types.IDestination) => void;
  swapDepartureArrival: () => void;
}

class DestinationSelection extends React.Component<IDestinationSelection, {}> {
  selectDeparture = value => {
    this.props.selectDeparture(value);
  };

  selectArrival = value => {
    this.props.selectArrival(value);
  };

  swapDepartureArrival = () => {
    this.props.swapDepartureArrival();
  };

  render() {
    const { destinations, selected } = this.props;

    return (
      <div className="wrapper destination">
        <div className="destination-wrapper">
          <Dropdown
            name="departures"
            destinations={destinations}
            selected={selected.from}
            selectDestination={this.selectDeparture}
          />

          <div className="destination-swapping">
            {selected.from.data && selected.to.data && (
              <span onClick={this.swapDepartureArrival}>
                Swap
                {/* TODO Add swapping */}
              </span>
            )}
          </div>
          <Dropdown
            name="arrivals"
            destinations={destinations}
            selected={selected.to}
            selectDestination={this.selectArrival}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  destinations: state.destinations,
  selected: state.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchDestinations: () => dispatch(fetchDestinations()),
  selectDeparture: value => dispatch(selectDeparture(value)),
  selectArrival: value => dispatch(selectArrival(value)),
  swapDepartureArrival: () => dispatch(swapDepartureArrival()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationSelection);
