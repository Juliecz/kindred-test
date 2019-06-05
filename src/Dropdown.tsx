import * as React from 'react';

interface DestinationProps {
    DestinationID: number,
    AirportCode: string,
    AirportCityName: string,
    AirportName: string,
    AirportCountryCode: string,
    LanguageCode: string,
    OfferCount: number
}

interface DropdownProps {
    name: string,
    defaultValue?: string,
    destinations: DestinationProps[]
}

const Dropdown: React.FunctionComponent<DropdownProps> = (props:DropdownProps) => {
    const [selected, setSelected] = React.useState(null);
    // () => {
    //     console.log(props.destinations);
    //     return props.destinations.find(destination => destination.DestinationID === props.defaultValue)
    // }

    React.useEffect(() => {
        if (!selected && props.destinations) {
            const selectedObject = props.destinations.find(
                destination =>
                    destination.AirportCode === props.defaultValue
            );

            setSelected(selectedObject);
        }
    });
    console.log('selected', selected);

    return (
        <>
            <div name={name} id={name}>
                <input type="text" value={selected ? selected.AirportName : 'Kam'} />
            </div>
            <ul>
                {props.destinations.map(destination => {
                    const {
                        DestinationID,
                        AirportCode,
                        AirportCityName,
                        AirportName
                    } = destination;

                    if (AirportCode === 'PRG') {
                        return (<li
                            key={DestinationID}
                            value={DestinationID}
                        >
                            {AirportCityName}, {AirportName} ({AirportCode})
                        </li>);
                    }

                    return (<li
                        key={DestinationID}
                        value={DestinationID}
                    >
                        {AirportCityName}, {AirportName} ({AirportCode})
                    </li>);
                })}
            </ul>
        </>
    )
};

export default Dropdown;
