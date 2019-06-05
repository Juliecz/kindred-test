export interface IDestination {
  DestinationID: number;
  AirportCode: string;
  AirportCityName: string;
  AirportName: string;
  AirportCountryCode: string;
  LanguageCode: string;
  OfferCount: number;
}

export interface IDay {
  date: string;
  status: string;
  price: string;
  seats: string;
  duration: string;
  flightsCount: string;
}

export interface IPrices {
  sid: string;
  sectorId: number;
  depIata: string;
  arrIata: string;
  month: string;
  saleLocation: string;
  currency: string;
  dayList: IDay[];
}
