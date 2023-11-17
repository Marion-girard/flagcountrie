import React from 'react';
import {useNavigate} from "react-router-dom";


const ListItem = ({ country }) =>{
   
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${country.name.common}`);
      }
   return(
    <li key={country}>
        <div 
        id="div2" 
        onClick={handleClick}>
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
   }
    export default ListItem;