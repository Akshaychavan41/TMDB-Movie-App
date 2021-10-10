import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/NavBar/Navbar";
import {
  getLatestItems,
  getMovieFilterResults,
  getMovieGenre,
  getPopularItems,
  getSearchItems,
  getTopRatedItems,
  getTrendingItems,
  getTvFilterResults,
  getTvGenre,
} from "../../services/service";
import Sidebar from "../Sidebar/Sidebar";
import "./homepage.css";
import { debounce, throttle } from "../../common/helper";

function Homepage(props) {
  const title = "Discover";
  const menuItems = [
    { id: "popular", label: "POPULAR" },
    { id: "trending", label: "TREND" },
    { id: "newest", label: "NEWEST" },
    { id: "top_rated", label: "TOP RATED" },
  ];

  const apiList = {
    popular: getPopularItems,
    top_rated: getTopRatedItems,
    trending: getTrendingItems,
    newest: getLatestItems,
    search: getSearchItems,
    tvfilter: getTvFilterResults,
    moviefilter: getMovieFilterResults,
  };

  const [selectedItem, setSelectedItem] = useState("popular");
  const [data, setData] = useState([]);
  const [genreOptions, setGenreOptions] = useState();

  const getItems = async () => {
    const {
      data: { results },
    } = await apiList[selectedItem]();
    setData(results);
  };

  useEffect(() => {
    selectedItem && getItems();
  }, [selectedItem]);

  const selectChangeHandler = (value) => {
    setSelectedItem(value);
  };

  const getSearchResults = async (value) => {
    if (value?.length) {
      setSelectedItem("");
    } else {
      setSelectedItem("popular");
    }
    const {
      data: { results },
    } = await apiList.search(value);
    setData(results);
  };

  const handleSearch = useMemo(() => debounce(getSearchResults, 300), []);

  const handleFilter = async (filterObject, type) => {
    if (type === "tv") {
      const {
        data: { results },
      } = await apiList.tvfilter(filterObject);
      setData(results);
    } else {
      const {
        data: { results },
      } = await apiList.moviefilter(filterObject);
      setData(results);
    }
  };

  const handleTypeChange = async (value) => {
    if (value === "tv") {
      const {
        data: { genres },
      } = await getTvGenre();
      console.log(data);
      setGenreOptions(genres);
    } else {
      const {
        data: { genres },
      } = await getMovieGenre();
      setGenreOptions(genres);
    }
  };

  return (
    <div className="homepage-container">
      <Navbar
        title={title}
        items={menuItems}
        selectChange={selectChangeHandler}
        selectedItem={selectedItem}
        searchCallback={handleSearch}
      />
      <Cards data={data} />
      <Sidebar
        getFilters={handleFilter}
        genreOptions={genreOptions}
        typeChange={handleTypeChange}
      />
    </div>
  );
}

export default Homepage;
