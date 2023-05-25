import React from 'react';
import "./CountryShow.css";

const CountryShow = (props) => {
    console.log(props);
    // let { name } = props;
    const {independent} = props.country;
    return (
        <div className='country-style'>
            <img src={props.flag}></img>
            <h2>Country Name:{props.test}</h2>
            <p>Population: {props.population}</p>
            <p>capital: {props.capital}</p>
            <p>Area: {props.storeCountryData.area}</p>
            <p>Independent: {}</p>
        </div>
    );
};

export default CountryShow;