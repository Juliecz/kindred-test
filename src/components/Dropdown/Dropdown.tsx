import * as React from 'react';
import * as types from '../../helpers/types';

import useOutsideClick from '../../hooks/clickOutside';
import { useInputValueEffect, useFilteredDestination } from '../../hooks/destinationSelection';
import TextInput from '../TextInput/TextInput';

import './style.less';

interface IDropdown {
  name: string;
  destinations: types.IDestination[];
  selected: types.ISelectedDestinationData;
  selectDestination: (value: types.IDestination) => void;
}

const Dropdown: React.FunctionComponent<IDropdown> = (props: IDropdown) => {
  const { destinations, selected, selectDestination } = props;
  const [focus, setFocus] = React.useState(false);
  const [inputValue, setInputValue, onFocus, onChange] = useInputValueEffect(selected);

  const ref = React.useRef();
  useOutsideClick(ref, () => {
    if (focus) {
      setFocus(false);
      setInputValue(
        selected && selected.data
          ? `${selected.data.AirportCityName}, ${selected.data.AirportName} (${
              selected.data.AirportCode
            })`
          : selected.text,
      );
    }
  });

  useFilteredDestination(destinations, inputValue);

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
        name={name}
        value={inputValue}
        labelClassName="dropdown-wrapper__label"
        onFocus={onFocus}
        onChange={onChange}
        onClick={onClick}
      />

      {focus && (
        <ul className="dropdown-wrapper__list" ref={ref}>
          {destinations.map(destination => {
            const { DestinationID, AirportCode, AirportCityName, AirportName } = destination;

            return (
              <li
                key={DestinationID}
                id={AirportCode}
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
