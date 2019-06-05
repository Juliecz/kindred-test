import {
  SET_DESTINATIONS,
  SET_PRICES
} from './consts';

const defaultState = {
  destinations: [],
  prices: null,
};

const App = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DESTINATIONS: {
      console.log(action);
      return {
        ...state,
        destinations: action.destinations
      };
    }
    case SET_PRICES: {
      return {
        ...state,
        prices: action.prices
      }
    }
    default:
      return state;
  }
};

export default App;
