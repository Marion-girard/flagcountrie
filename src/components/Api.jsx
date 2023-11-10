import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Select from "./Select"; // Assurez-vous d'importer le composant Select

export default function Api() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [uniqueRegions, setUniqueRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Select regions={uniqueRegions} onChange={handleChange} />

        {items
          .filter((item) => selectedRegion === "" || item.region === selectedRegion)
          .map((item) => (
            <ListItem key={item.cca3} country={item} />
          ))}
      </>
    );
  }
}


