import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Select from "./Select"; 
import Search from "./Search";
import Country from "./Country";

export default function Api() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [uniqueRegions, setUniqueRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [inputName, setInputName] =useState ("")


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          const region = result.map((item) => item.region);
          const newRegion = new Set(region);
          setUniqueRegions(Array.from(newRegion));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    
  };

  const handleTodoTitleChange = (value) => {
    setInputName(value)
  };

  const handleChangeName =(event) =>{
    //setInputName(event.target.value)
  }
  const handleKeyDown = (key) => {
    
    if (key !== "Enter" || inputName === " ") return 
    
    console.log('test');
    setInputName(inputName)
  
  };


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Search 
          value={inputName} 
          handleTodoTitleChange={handleTodoTitleChange}  
          handleKeyDownFromTodo ={handleKeyDown}
        />
        <Select regions={uniqueRegions} onChange={handleChange} />
        <div className="pays">
        {items
            .filter((item) => (selectedRegion === "" || item.region === selectedRegion)  && (inputName === "" || item.name.common.toLowerCase().includes(inputName.toLowerCase())))
            .map((item) => (
                <ListItem key={item.cca3} country={item} />
                
          ))}

        {items
        .map((item) => (
          <Country key={item.name.common}   />
        ))}
        </div>
      </>
    );
  }
}


