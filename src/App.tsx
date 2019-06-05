import * as React from 'react';
import { connect } from 'react-redux';

import * as types from './types';
import { fetchDestinations, fetchPrices } from './modules/actions';

import DestinationSelection from './DestinationSelection';

interface IApp {
  destinations: types.IDestination[];
  prises: types.IPrices;
  fetchDestinations: () => any;
  fetchPrices: () => any;
}

class App extends React.Component<IApp, {}> {
  // constructor(props: AppProps) {
  //   super(props);
  //
  // }

  componentDidMount(): void {
    this.props.fetchDestinations();
    this.props.fetchPrices();
  }

  render() {
    const { destinations } = this.props;
    return (
      <>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is:</p>

        {!!destinations.length && <DestinationSelection destinations={destinations} />}
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
