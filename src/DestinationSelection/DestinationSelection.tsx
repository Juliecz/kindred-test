import * as React from 'react';
import { connect } from 'react-redux';

import * as types from '../types';
import {
  fetchDestinations,
  selectDestinationFrom,
  selectDestinationTo
} from '../modules/actions';

import Dropdown from '../Dropdown/Dropdown';

import './style.less';


interface IDestinationSelection {
  destinations: types.IDestination[];
  selected: types.ISelectedDestination;
  selectDestinationFrom: (value: types.IDestination) => void;
  selectDestinationTo: (value: types.IDestination) => void;
}

class DestinationSelection extends React.Component<IDestinationSelection, {}> {
  selectDestinationFrom = value => {
    this.props.selectDestinationFrom(value);
  };

  selectDestinationTo = value => {
    this.props.selectDestinationTo(value);
  };

  render() {
    const { destinations, selected } = this.props;

    return (
      <div className="destination">
        <div className="destination-wrapper">
          <Dropdown
            name="departures"
            destinations={destinations}
            selected={selected.from}
            selectDestination={this.selectDestinationFrom}
          />

          <div className="destination-swapping">Swap</div>
          {/* TODO Add swapping */}

          <Dropdown
            name="arrivals"
            destinations={destinations}
            selected={selected.to}
            selectDestination={this.selectDestinationTo}
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
  selectDestinationFrom: value => dispatch(selectDestinationFrom(value)),
  selectDestinationTo: value => dispatch(selectDestinationTo(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationSelection);
