import * as React from 'react';

import * as types from './types';

import Dropdown from './Dropdown';

interface IDestinationSelection {
  destinations: types.IDestination[];
}

const DestinationSelection: React.FunctionComponent<IDestinationSelection> = (
  props: IDestinationSelection,
) => {
  const { destinations } = props;
  return (
    <>
      <Dropdown name="departures" destinations={destinations} defaultValue="PRG" />

      {/* TODO Add swapping */}

      <Dropdown name="arrivals" destinations={destinations} />
    </>
  );
};

export default DestinationSelection;
