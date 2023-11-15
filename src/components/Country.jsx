

import React from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';

const Country = ({ item }) => {
  console.log('Items:', item); 
  const { countryName } = useParams();

  return (<li key={country}>
    <div>
    <ul>
    
        <li><img src={country.flags.png} alt="Country flag" /></li>
        <li>Name : {country.name.common}</li>
        <li>Population : {country.population}</li>
        <li>Region : {country.region}</li>
        <li>Capital : {country.capital}</li>
        <li>Sub Region : {country.subregion}</li>
        <li>Top Level Domain : {country.tld}</li>
        <li>Currencie : {country.currencies}</li>
        <li>Languages : {country.languages}</li>
    </ul>
    </div>
</li>)
};


export default Country;