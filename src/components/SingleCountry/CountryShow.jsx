import React from 'react';
import "./CountryShow.css";

const CountryShow = (props) => {
    // let { name } = props;
    return (
        <div className='country-style'>
            <img src={props.flag}></img>
            <h2>Country Name:{props.test}</h2>
            <p>Population: {props.population}</p>
            <p>capital: {props.capital}</p>
            <p>currencies: {props.money}</p>
        </div>
    );
};

export default CountryShow;