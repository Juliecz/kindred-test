import * as React from 'react';
import * as types from './types';

interface DropdownProps {
  name: string;
  defaultValue?: string;
  destinations: types.IDestination[];
}

const Dropdown: React.FunctionComponent<DropdownProps> = (props: DropdownProps) => {
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    if (!selected && props.destinations) {
      const selectedObject = props.destinations.find(
        destination => destination.AirportCode === props.defaultValue,
      );

      setSelected(selectedObject);
    }
  });

  const { destinations } = props;
  return (
    <>
      <div name={name} id={name}>
        <input type="text" value={selected ? selected.AirportName : 'Kam'} />
      </div>
      <ul>
        {destinations.map(destination => {
          const { DestinationID, AirportCode, AirportCityName, AirportName } = destination;

          if (AirportCode === 'PRG') {
            return (
              <li key={DestinationID} value={DestinationID}>
                {`${AirportCityName}, ${AirportName} (${AirportCode})`}
              </li>
            );
          }

          return (
            <li key={DestinationID} value={DestinationID}>
              {`${AirportCityName}, ${AirportName} (${AirportCode})`}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
