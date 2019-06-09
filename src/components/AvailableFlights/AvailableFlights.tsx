import * as React from 'react';
import * as types from '../../helpers/types';

import './style.less';

interface IAvailableFlights {
  days: types.IDay[];
}

const AvailableFlights: React.FunctionComponent<IAvailableFlights> = (props: IAvailableFlights) => {
  const { days } = props;
  return (
    <div className="wrapper flights">
      <ul>
        <li>
          <span>Day</span>
          <span>Price</span>
          <span>Seats</span>
          <span>Duration</span>
        </li>
        {days.map(day =>
          day.flights.map(flight => (
            <li>
              <span>{day.date}</span>
              <span>{day.price}</span>
              <span>{flight.seats}</span>
              <span>{flight.duration}</span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

export default AvailableFlights;
