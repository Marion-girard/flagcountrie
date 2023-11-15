

import React from 'react';
import { useParams } from 'react-router-dom';
import ListItem from './ListItem';

const Country = ({ item }) => {
  console.log('Items:', item); 
  const { countryName } = useParams();

  return <div>Bouh</div>
};

export default Country;