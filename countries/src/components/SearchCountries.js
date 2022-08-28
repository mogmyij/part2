import { useState } from "react";

const SearchCountries = ({ countries, setCountriesToShow }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchCountry = (event) => {
    let searchedValue = event.target.value.toUpperCase();
    let searchResult = countries.filter((country) => {
      return country.name.common.toUpperCase().includes(searchedValue);
    });
    setCountriesToShow(searchResult);
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <p>Search countries:</p>
      <input value={searchInput} onChange={searchCountry} />
    </div>
  );
};

export default SearchCountries;