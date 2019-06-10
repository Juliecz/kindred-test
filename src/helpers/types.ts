export interface IDestination {
  DestinationID: number;
  AirportCode: string;
  AirportCityName: string;
  AirportName: string;
  AirportCountryCode: string;
  LanguageCode: string;
  OfferCount: number;
}

export interface IFlight {
  flightNumber: string;
  seats: string;
  rbd: string;
  depIata: string;
  arrIata: string;
  departureDateTime: string;
  arrivalDateTime: string;
  duration: string;
  mileage: string;
  aircraftRef: string;
}

export interface IDay {
  date: string;
  status: string;
  price: string;
  seats: string;
  duration: string;
  flightsCount: string;
  rbd?: string;
  flights?: IFlight[];
}

export interface IFlights {
  calendarPriceList: {
    sid: string;
    sectorId: number;
    depIata: string;
    arrIata: string;
    month: string;
    saleLocation: string;
    currency: string;
    dayList: IDay[];
  };
}

export interface ISelectedDestinationData {
  data: IDestination;
  text: string;
}

export interface ISelectedDestination {
  date: string;
  from: ISelectedDestinationData;
  to: ISelectedDestinationData;
}

export type FlightsLoading = 'unset' | 'loading' | 'success' | 'error';
