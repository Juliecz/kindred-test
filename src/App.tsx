import * as React from 'react';
import { connect } from 'react-redux';

import * as types from './types';
import { fetchDestinations, fetchPrices } from './modules/actions';

import DestinationSelection from './DestinationSelection/DestinationSelection';

interface IApp {
  destinations: types.IDestination[],
  prises: types.IPrices,
  selected: types.ISelectedDestination,
  fetchDestinations: () => () => void,
  fetchPrices: () => () => void,
}

class App extends React.Component<IApp, {}> {
  componentDidMount(): void {
    this.props.fetchDestinations();
    this.props.fetchPrices();
  }

  render() {
    const { destinations } = this.props;
    return (
      <>
        {!!destinations.length && (
          <DestinationSelection />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  destinations: state.destinations,
  prices: state.prices,
});

const mapDispatchToProps = dispatch => ({
  fetchDestinations: () => dispatch(fetchDestinations()),
  fetchPrices: (dep, arr, monthSel) => dispatch(fetchPrices(dep, arr, monthSel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
