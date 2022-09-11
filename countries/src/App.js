import axios from "axios";
import { useState, useEffect } from "react";
import DisplayCountries from "./components/DisplayCountries";
import SearchCountries from "./components/SearchCountries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  //get and set country data from online
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <SearchCountries
        countries={countries}
        setCountriesToShow={setCountriesToShow}
      />
      <DisplayCountries countriesToShow={countriesToShow} />
    </div>
  );
}

export default App;
