import React from 'react';


const ListItem = ({ country }) =>( 
    <div>
   
    <li key={country}>
        <ul>
        
            <li><img src={country.flags.png} alt="Country flag" /></li>
            <li>Name : {country.name.common}</li>
            <li>Population : {country.population}</li>
            <li>Region : {country.region}</li>
            <li>Capital : {country.capital}</li>
        </ul>
    </li>
    </div>
    )
    export default ListItem;