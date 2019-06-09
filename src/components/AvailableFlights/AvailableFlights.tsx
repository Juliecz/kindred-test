import * as React from 'react';
import * as moment from 'moment';
import * as numeral from 'numeral';
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
              <span>{moment(day.date).format('D.MM.YYYY')}</span>
              <span>{`${numeral(day.price).format('0,0')} CZK`}</span>
              <span>{flight.seats}</span>
              <span>
                {`${flight.duration.substr(0, 2)}:${flight.duration.substr(2, 4)}`}
              </span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

export default AvailableFlights;
