import * as React from 'react';
import * as types from '../../helpers/types';

import useOutsideClick from '../../hooks/clickOutside';
import TextInput from '../TextInput/TextInput';

import './style.less';

interface IDropdown {
  name: string,
  destinations: types.IDestination[],
  selected: types.ISelectedDestinationData,
  selectDestination: (value: types.IDestination) => void;
}

const Dropdown: React.FunctionComponent<IDropdown> = (props: IDropdown) => {
  const { destinations, selected, selectDestination } = props;
  const [focus, setFocus] = React.useState(false);

  const ref = React.useRef();

  useOutsideClick(ref, () => {
    if (focus) {
      setFocus(false);
    }
  });

  const onClick = (): any => {
    setFocus(true);
  };

  const onSelect = (destination: types.IDestination): any => {
    setFocus(false);
    selectDestination(destination);
  };

  const { name } = props;
  return (
    <div id={name} className="dropdown-wrapper">
      <TextInput
        value={
          selected && selected.data
            ? `${selected.data.AirportCityName}, ${selected.data.AirportName} (${
              selected.data.AirportCode
              })`
            : selected.text
        }
        labelClassName="dropdown-wrapper__label"
        onClick={onClick}
      />

      {focus && (
        <ul className="dropdown-wrapper__list" ref={ref}>
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
