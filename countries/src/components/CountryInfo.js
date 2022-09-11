import UList from "./UList";

const CountryInfo = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <h2>Languages</h2>
      <UList array={Object.values(country.languages)} />
      <img src={country.flags.png} alt="country flag" />
    </div>
  );
};

export default CountryInfo