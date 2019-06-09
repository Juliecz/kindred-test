const filterAvailableFlights = flights => {
  if (flights && flights.calendarPriceList && flights.calendarPriceList.dayList) {
    return flights.calendarPriceList.dayList.filter(item => item.status === 'AVAILABLE');
  }

  return [];
};

export default filterAvailableFlights;
