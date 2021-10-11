import React, { useEffect, useState } from "react";
import { OPTIONS } from "../../common/constants";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./sidebar.css";
import { InputLabel, TextField } from "@mui/material";
function Sidebar({ getFilters, typeChange, genreOptions }) {
  const [startYear, setStartYear] = useState(null);
  const [filters, setFilters] = useState({ genre: "", year: "" });
  const [type, setType] = useState();
  const [selectedGenre, setSelectedGenre] = useState();

  useEffect(() => {
    getFilters(filters, type);
  }, [filters]);

  const handleTypeChange = (value) => {
    setType(value.target.value);
    typeChange(value.target.value);
    setSelectedGenre(undefined);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value.target.value);
    setFilters((old) => {
      return { ...old, genre: value.target.value };
    });
  };
  const handleYearChange = (value) => {
    setStartYear(value);
    setFilters((old) => {
      return { ...old, year: new Date(value).getFullYear() };
    });
  };

  return (
    <div className="sidebar-container">
      <h2>Discover Options</h2>
      <CustomSelect
        changeHandler={handleTypeChange}
        options={OPTIONS.type}
        currentValue={type}
        label="Type"
      />
      <CustomSelect
        changeHandler={handleGenreChange}
        options={genreOptions}
        currentValue={selectedGenre}
        disabled={!type}
        label="Genre"
      />
      <div className="year-container">
        <InputLabel className="label">Year</InputLabel>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            views={["year"]}
            value={startYear}
            onChange={handleYearChange}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default Sidebar;
