import * as types from './types';

const filterAvailableFlights = (flights: types.IFlights): types.IDay[] => {
  if (flights && flights.calendarPriceList && flights.calendarPriceList.dayList) {
    return flights.calendarPriceList.dayList.filter(item => item.status === 'AVAILABLE');
  }

  return [];
};

export default filterAvailableFlights;
