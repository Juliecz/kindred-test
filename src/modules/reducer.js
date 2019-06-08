import {
  SET_DESTINATIONS,
  SET_PRICES,
  SELECT_DESTINATION_FROM,
  SELECT_DESTINATION_TO,
} from './consts';

const defaultState = {
  destinations: [],
  prices: null,
  selected: {
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
    case SELECT_DESTINATION_FROM: {
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
    case SELECT_DESTINATION_TO: {
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
    default:
      return state;
  }
};

export default App;
