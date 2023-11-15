import React from 'react';


const ListItem = ({ country }) =>( 
    
   
    <li key={country}>
        <div 
        id="div2" 
        onClick={() => { 
            
            console.log(country.name.common);
            
        }}>
        <ul>
        
            <li><img src={country.flags.png} alt="Country flag" /></li>
            <li>Name : {country.name.common}</li>
            <li>Population : {country.population}</li>
            <li>Region : {country.region}</li>
            <li>Capital : {country.capital}</li>
        </ul>
        </div>
    </li>
    
    )
    export default ListItem;