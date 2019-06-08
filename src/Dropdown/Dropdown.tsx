import * as React from 'react';
import * as types from '../types';

import './style.less';

interface DropdownProps {
  name: string,
  destinations: types.IDestination[],
  selected: types.ISelectedDestinationData,
  selectDestination: (value: types.IDestination) => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = (props: DropdownProps) => {
  const { destinations, selected, selectDestination } = props;
  const [focus, setFocus] = React.useState(false);

  const onClick = (): any => {
    if (focus) {
      setFocus(false);
    }
    setFocus(true);
  };

  const onBlur = (): any => {
    // setFocus(false);
  };

  const onSelect = (destination: types.IDestination): any => {
    setFocus(false);
    selectDestination(destination);
  };

  const { name } = props;
  return (
    <div id={name} className="dropdown-wrapper">
      <label className="dropdown-wrapper__label">
        <input
          type="text"
          value={
            selected && selected.data
              ? `${selected.data.AirportCityName}, ${selected.data.AirportName} (${
                  selected.data.AirportCode
                })`
              : selected.text
          }
          onClick={onClick}
          onBlur={onBlur}
        />
      </label>

      {focus && (
        <ul className="dropdown-wrapper__list">
          {destinations.map(destination => {
            const { DestinationID, AirportCode, AirportCityName, AirportName } = destination;

            return (
              <li
                key={DestinationID}
                value={DestinationID}
                onClick={() => onSelect(destination)}
              >
                {`${AirportCityName}, ${AirportName} (${AirportCode})`}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
