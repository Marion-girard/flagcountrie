import React from "react";
import { useState, useEffect } from 'react'

const Select = ({ regions, onChange }) => {
    return (
      <form>
        <select onChange={onChange}>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    );
  };
  
  export default Select;