import React from 'react';
import { LuCircleDollarSign } from "react-icons/lu";

const Dropdown = ({ options, selectedOption, onSelect }) => (
  <select
    className="dropdown-select"
    value={selectedOption}
    onChange={(e) => onSelect(e.target.value)}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        <LuCircleDollarSign className="dropdown-icon" /> {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
