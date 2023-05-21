import React, { useEffect, useState } from 'react';

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
        </div>
    );
};

export default Country;