import * as React from "react";

export const useInputValueEffect = (selected) => {
  const setValue = () => (
    selected && selected.data
      ? `${selected.data.AirportCityName}, ${selected.data.AirportName} (${
        selected.data.AirportCode
        })`
      : selected.text
  );
  const [inputValue, setInputValue] = React.useState(setValue());

  React.useEffect(() => {
    setInputValue(setValue());
  }, [selected]);

  const onFocus = (): void => {
    setInputValue('');
  };

  const onChange = (event): void => {
    setInputValue(event.target.value);
  };

  return [inputValue, setInputValue, onFocus, onChange];
};

export const useFilteredDestination = (destinations, inputValue) => {
  React.useEffect(() => {
    const destination = destinations.find(dest => {
      const value = inputValue.toLowerCase();
      return (
        dest.AirportCityName.substring(0, inputValue.length).toLowerCase() === value ||
        dest.AirportName.substring(0, inputValue.length).toLowerCase() === value ||
        dest.AirportCode.substring(0, inputValue.length).toLowerCase() === value
      );
    });

    if (destination) {
      const elem = document.getElementById(destination.AirportCode);
      if (elem) {
        elem.scrollIntoView();
      }
    }
  }, [inputValue]);
};
