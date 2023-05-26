import React, { useEffect, useState } from 'react';
import CountryShow from '../SingleCountry/CountryShow';

const Country = () => {
    // step:1 use state
    const [countryData, setCountryData] = useState([]);

    // step:2 use Effect
    useEffect( ()=>{
        
        // step:3 fetch Data
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountryData(data));
    },[])
 

    return (
        <div>
            <h2>Total Number Of Countries We Get From API: {countryData.length}</h2>
            {
                // countryData.map( country => console.log(country))
                
                // eslint-disable-next-line react/jsx-key
                countryData.map( (country) => <CountryShow 
                
                storeCountryData = {country} //pass all api data in at a time

                test={country.name.common} 
                population={country.population}
                capital={country.capital}
                flag={country.flags.png}
                ></CountryShow>)
            }
        </div>
    );
};

export default Country;