

import React from 'react';

import ListItem from './ListItem';
import {Routes, Route, useParams} from 'react-router-dom';

function CountryProfile() {
  // Récupérer le paramètre du nom du pays depuis l'URL
  let { countryName } = useParams();

  // Effectuer une requête à l'API pour obtenir les informations du pays
  // Assurez-vous d'utiliser un état pour stocker les données du pays et de gérer l'état de chargement et les erreurs si nécessaire.

  // Exemple d'utilisation de l'API Fetch
  const [countryData, setCountryData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        setCountryData(data[0]); // Supposons que l'API renvoie un tableau et que nous prenions le premier élément
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  // Rendu conditionnel en fonction de l'état de chargement ou des données du pays
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!countryData) {
    return <div>Country not found</div>;
  }

  // ... le reste du rendu en utilisant les données du pays (countryData)

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
      <li>Currencies: {countryData.currencies.name}</li>
      
     
    </ul>
      
    </div>
  );
}


export default CountryProfile;