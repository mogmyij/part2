import UList from "./UList";
import DisplayWeather from "./DisplayWeather";

const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <h2>Languages</h2>
      <UList
        array={Object.values(country.languages)}
        keyArray={Object.values(country.languages)}
      />
      <img src={country.flags.png} alt="country flag" />
      <DisplayWeather latLong={country.latlng} countryName={country.name.common}/>
    </div>
  );
};

export default CountryInfo;
