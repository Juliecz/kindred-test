import fetchData from '../helpers/fetchData';

import {
  SET_DESTINATIONS,
  SET_PRICES,
  SELECT_DESTINATION_FROM,
  SELECT_DESTINATION_TO,
} from './consts';

export const setDestinations = destinations => ({
  type: SET_DESTINATIONS,
  destinations,
});

export const setPrices = prices => ({
  type: SET_PRICES,
  prices,
});

export const fetchDestinations = () => dispatch => {
  fetchData(
    'https://www.csa.cz/Umbraco/Api/DestinationCache/GetAllDestinations/?destinations_language=en',
  )
    .then(data => dispatch(setDestinations(data)))
    .catch(err => err);
};

export const fetchPrices = (dep = 'PRG', arr = 'AMS', monthSel = '05/2019') => dispatch => {
  fetchData(
    `https://www.csa.cz/Umbraco/Api/CalendarPricesCache/GetPrices/
        ?DEP=${dep}&ARR=${arr}&MONTH_SEL=${monthSel}&SECTOR_ID=0&LANG=cs&ID_LOCATION=cz`,
  )
    .then(data => dispatch(setPrices(data)))
    .catch(err => err);
};

export const selectDestinationFrom = (value) => ({
  type: SELECT_DESTINATION_FROM,
  value,
});

export const selectDestinationTo = (value) => ({
  type: SELECT_DESTINATION_TO,
  value,
});
