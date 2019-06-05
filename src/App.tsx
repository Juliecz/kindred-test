import * as React from 'react';
import Dropdown from './Dropdown';



interface AppProps {
  color: string;
}

const App: React.FC = () => {
  const [color, setColor] = React.useState('green');
  const [destinations, setDestinations] = React.useState([]);
  const [prices, setPrices] = React.useState({});

  React.useEffect(() => {
      if (!destinations.length) {
          fetchData('https://www.csa.cz/Umbraco/Api/DestinationCache/GetAllDestinations/?destinations_language=en')
              .then(data => setDestinations(data))
              .catch(err => err);
      }

      if (!Object.entries(prices).length) {
          fetchData('https://www.csa.cz/Umbraco/Api/CalendarPricesCache/GetPrices/?DEP=PRG&ARR=AMS&MONTH_SEL=05/2019&SECTOR_ID=0&LANG=cs&ID_LOCATION=cz')
              .then(data => setPrices(data))
              .catch(err => err);
      }

  }, [destinations, prices]);

  return (
    <>
      <h1>Welcome to React with Typescript</h1>
      <p>
        The color of this page is:
        {color}
      </p>
      <button onClick={() => setColor('red')}>Button</button>

      <Dropdown
          name="departures"
          defaultValue="PRG"
          destinations={destinations}
      />

        <Dropdown
            name="arrivals"
            destinations={destinations}
        />
    </>
  );
};

export default App;


async function fetchData(url) {
    const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${url}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        },
    );

    return await response.json();
}
