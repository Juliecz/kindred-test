import * as React from 'react';
import * as moment from 'moment';
import * as numeral from 'numeral';
import Loader from 'react-loader-spinner';

import * as types from '../../helpers/types';

import './style.less';

interface IAvailableFlights {
  days: types.IDay[];
  flightsLoading: types.FlightsLoading;
}

const AvailableFlights: React.FunctionComponent<IAvailableFlights> = (props: IAvailableFlights) => {
  const { days, flightsLoading } = props;

  if (flightsLoading === 'loading') {
    return (
      <div className="loader">
        <Loader type="Plane" color="#1f2128" height="100" width="100" />
      </div>
    );
  }

  if (flightsLoading === 'error') {
    return (
      <div className="flights-error">
        Please try again
      </div>
    );
  }

  return (
    <div className="wrapper flights">
      {days && days.length ? (
        <>
          <div className="flights-header">
            <span>Day</span>
            <span>Price</span>
            <span>Seats</span>
            <span>Duration</span>
          </div>
          <ul>
            {days.map((day: types.IDay, index: number) =>
              day.flights.map((flight: types.IFlight) => (
                <li className={`flights-item ${index === 0 ? 'first' : ''}`}>
                  <span className="flights-item__date">{moment(day.date).format('D.MM.YYYY')}</span>
                  <span className="flights-item__price">
                    {`${numeral(day.price).format('0,0')}`}
                    <span>&nbsp;CZK</span>
                  </span>
                  <span className="flights-item__seats">{flight.seats || '-'}</span>
                  <span className="flights-item__duration">
                    {`${flight.duration.substr(0, 2)}h ${flight.duration.substr(2, 4)}min`}
                  </span>
                </li>
              )),
            )}
          </ul>
        </>
      ) : (
        <div className="flights-notfound">Available flights are not found</div>
      )}
    </div>
  );
};

export default AvailableFlights;
