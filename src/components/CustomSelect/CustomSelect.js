import React, { useEffect, useState } from "react";
import "./select.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({ options = [], label, changeHandler, currentValue }) => {
  const [currValue, setCurrValue] = useState(currentValue);

  useEffect(() => {
    setCurrValue(currentValue);
  }, [currentValue]);

  const handleSelect = (event) => {
    setCurrValue(event.target.value);
    changeHandler(event);
  };

  return (
    <div className="select-container">
      <InputLabel className="label">{label}</InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={currValue}
          onChange={handleSelect}
        >
          {options &&
            options.map((item) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
