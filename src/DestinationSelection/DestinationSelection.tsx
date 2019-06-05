import * as React from 'react';
import * as types from '../types';

import Dropdown from '../Dropdown';
import './style.less';

interface IDestinationSelection {
  destinations: types.IDestination[];
}

const DestinationSelection: React.FunctionComponent<IDestinationSelection> = (
  props: IDestinationSelection,
) => {
  const { destinations } = props;
  return (
    <div className="destination-wrapper">
      <Dropdown name="departures" destinations={destinations} defaultValue="PRG" />

      {/* TODO Add swapping */}

      <Dropdown name="arrivals" destinations={destinations} />
    </div>
  );
};

export default DestinationSelection;
