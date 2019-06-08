import {
  SET_DESTINATIONS,
  SET_PRICES,
  SELECT_DEPARTURE,
  SELECT_ARRIVAL,
  SWAP_DEPARTURE_ARRIVAL,
  SET_SELECTED_DATE,
} from './consts';

const defaultState = {
  destinations: [],
  prices: null,
  selected: {
    date: null,
    from: {
      data: {
        DestinationID: 5677723,
        AirportCode: "PRG",
        AirportCityName: "Prague",
        AirportName: "Ruzyne",
        AirportCountryCode: "CZ",
        LanguageCode: "en",
        OfferCount: 0
      },
      text: 'From',
    },
    to: {
      data: null,
      text: 'To',
    }
  },
};

const App = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DESTINATIONS: {
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
    case SELECT_DEPARTURE: {
      return {
        ...state,
        selected: {
          ...state.selected,
          from: {
            ...state.selected.from,
            data: action.value,
          }
        }
      }
    }
    case SELECT_ARRIVAL: {
      return {
        ...state,
        selected: {
          ...state.selected,
          to: {
            ...state.selected.to,
            data: action.value,
          }
        }
      }
    }
    case SWAP_DEPARTURE_ARRIVAL: {
      return {
        ...state,
        selected: {
          ...state.selected,
          from: {
            ...state.selected.from,
            data: state.selected.to.data,
          },
          to: {
            ...state.selected.to,
            data: state.selected.from.data,
          }
        }
      }
    }
    case SET_SELECTED_DATE:
      return {
        ...state,
        selected: {
          ...state.selected,
          date: action.value,
        }
      };
    default:
      return state;
  }
};

export default App;
