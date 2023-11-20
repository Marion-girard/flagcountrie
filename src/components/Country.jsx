

import React from 'react';

import ListItem from './ListItem';
import {Routes, Route, useParams} from 'react-router-dom';

function CountryProfile() {
  
  let { common } = useParams();

  


  const [countryData, setCountryData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${common}`);
        const data = await response.json();
        setCountryData(data[0]); 
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [common]);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!countryData) {
    return <div>Country not found</div>;
  }

  
  return (
    <div>
      <h2>{countryData.name.common}</h2>
      
      

    <ul>
    <li><img src={countryData.flags.png} alt="Country flag" /></li>
      <li>Name: {countryData.name.common}</li>
      <li>Population: {countryData.population}</li>
      <li>Region: {countryData.region}</li>
      <li>Capital: {countryData.capital}</li>
      <li>Sub Region: {countryData.subregion}</li>
      <li>Top Level Domain: {countryData.tld}</li>
      <li>language: {Object.values(countryData.languages).join(', ')}</li>
      <li>Currencie: {Object.values(countryData.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</li>
     
    </ul>
      
    </div>
  );
}


export default CountryProfile;