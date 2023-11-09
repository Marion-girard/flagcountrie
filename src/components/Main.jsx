import React, { useState } from "react";


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
                <img src="" alt="Country flag" />
                <ul>
                    <li>Population :</li>
                    <li>Region :</li>
                    <li>Capital :</li>
                </ul>
                bouh caca
                
            </div>
        </main>
    );
}