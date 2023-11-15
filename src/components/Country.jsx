

import React from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';

const Country = ({ item }) => {
  console.log('Items:', item); 
  const { countryName } = useParams();

  // Recherche du pays dans la liste 'items' en fonction du nom commun
  const country = item.find((item) => item.name.common.toLowerCase() === countryName.toLowerCase());

  if (!country) {
    return <ListItem/>;
  }

  // Affichage des détails du pays
  return (
    <div>
      <li key={country}>
      <ul>
        <li><img src={country.flags.png} alt="Country flag" /></li>
        <li>Name: {country.name.common}</li>
        <li>Population: {country.population}</li>
        <li>Region: {country.region}</li>
        <li>Capital: {country.capital}</li>
        {/* Ajoutez d'autres détails que vous souhaitez afficher */}
      </ul>
      </li>
    </div>
  );
};

export default Country;