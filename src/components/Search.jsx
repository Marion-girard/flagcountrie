import React from "react";

const Search = ({inputName, onChange, onKeyDown}) =>(
    <form action="">
    <label>
        <input
            type="text"
            value={inputName}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Search for a country..."
        />
    </label>
</form>)

