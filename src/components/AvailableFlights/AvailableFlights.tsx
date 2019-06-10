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
      {(days && days.length) ? (
        <>
          <div className="flights-header">
            <span>Day</span>
            <span>Price</span>
            <span>Seats</span>
            <span>Duration</span>
          </div>
          <ul>
            {days.map((day, index) =>
              day.flights.map(flight => (
                <li className={`flights-item ${index === 0 ? 'first' : ''}`}>
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
        </>
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
};

export default AvailableFlights;
