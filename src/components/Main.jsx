import React, { useState } from "react";
//import ListItem from "./ListItem";
import Api from "./Api"


export default function Main() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <main>
            <form action="">
                <label>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Search for a country..."
                    />
                </label>
            </form>
          
            <div className="card">
                <Api/>
                
            </div>
        </main>
    );
}