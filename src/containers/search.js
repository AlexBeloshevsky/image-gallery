import React, { useState, useContext } from "react";
import { ImageGalleryContext } from "../context/imageGalleryContext";
import { Searchbar } from "../components";

export default function SearchContainer() {
  const { resetState, updateSearchQuery } = useContext(ImageGalleryContext);
  const [searchterm, setSearchterm] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchterm(value);
  };

  const handleSearch = () => {
    updateSearchQuery(searchterm);
    setSearchterm("");
  };

  const reset = () => {
    resetState();
  };

  return (
    <Searchbar>
      <Searchbar.Input value={searchterm} onChange={handleChange} />
      <Searchbar.Submit onClick={handleSearch}>press me</Searchbar.Submit>
      <Searchbar.Submit onClick={reset}>Empty gallery</Searchbar.Submit>
    </Searchbar>
  );
}
