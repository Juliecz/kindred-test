import * as React from 'react';
import * as moment from 'moment';

import useOutsideClick from '../../hooks/clickOutside';

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
      props.setSelectedDate(moment().year(year).month(value).format('MM/YYYY'));
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
      <label className="dropdown-wrapper__label">
        <input
          type="text"
          value={selected}
          onClick={() => setShowCalendar(true)}
        />
      </label>

      {showCalendar && (
        <div className="calendar-months" ref={ref}>
          <div className="calendar-months__year">
            <span onClick={() => setYear(year - 1)}>
              &lt;
            </span>
            <h3>{`${month} ${year}`}</h3>
            <span onClick={() => setYear(year + 1)}>
              &gt;
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
