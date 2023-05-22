import React from 'react';

const CountryShow = (props) => {
    // let { name } = props;
    return (
        <div>
            <h2>Country Name:{props.test}</h2>
            <h3>Population: {props.population}</h3>
            <h3>capital: {props.capital}</h3>
        </div>
    );
};

export default CountryShow;