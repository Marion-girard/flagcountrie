import React from "react";

const Search = ({value, onChange, onKeyDown}) =>(
    <form action="">
    <label>
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="Search for a country..."
        />
    </label>
</form>
)
export default Search