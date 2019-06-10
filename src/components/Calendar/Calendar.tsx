import * as React from 'react';
import * as moment from 'moment';

import useOutsideClick from '../../hooks/clickOutside';
import TextInput from '../TextInput/TextInput';

import './style.less';

interface IMonthlyCalendar {
  selected: string;
  setSelectedDate: (value: string) => void;
}

const Calendar: React.FunctionComponent<IMonthlyCalendar> = (props: IMonthlyCalendar) => {
  const [year, setYear] = React.useState(Number(moment().format('YYYY')));
  const [showCalendar, setShowCalendar] = React.useState(false);

  const useSetMonth = () => {
    const [month, setMonth] = React.useState(moment().format('MMMM'));

    const onClickMonth = (value: string) => {
      setMonth(value);
      setShowCalendar(false);
      props.setSelectedDate(
        moment()
          .year(year)
          .month(value)
          .format('MM/YYYY'),
      );
    };

    React.useEffect(() => {
      if (!props.selected) {
        onClickMonth(moment().format('MMMM'));
      }
    });

    return [month, onClickMonth];
  };
  const [month, onClickMonth] = useSetMonth();

  const ref = React.useRef();

  useOutsideClick(ref, () => {
    if (showCalendar) {
      setShowCalendar(false);
    }
  });

  const { selected } = props;
  return (
    <div className="calendar">
      <TextInput
        value={selected}
        onClick={() => setShowCalendar(true)}
        labelClassName="dropdown-wrapper__label"
      />

      {showCalendar && (
        <div className="calendar-months" ref={ref}>
          <div className="calendar-months__year">

            <span className="arrow">
              {year > moment().year() &&
                <img
                  src="/src/assets/arrow-left.png"
                  alt="Left arrow"
                  onClick={() => setYear(year - 1)}
                />
              }
            </span>
            <h3>{`${month} ${year}`}</h3>
            <span className="arrow">
              <img
                src="/src/assets/arrow-right.png"
                alt="Right arrow"
                onClick={() => setYear(year + 1)}
              />
            </span>
          </div>
          <div className="calendar-months__wrapper">
            {moment.months().map(item => (
              <div
                key={`months-item${item}`}
                className="calendar-months__item"
                onClick={() => onClickMonth(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
