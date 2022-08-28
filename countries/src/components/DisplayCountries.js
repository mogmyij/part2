import UList from "./UList";

const DisplayCountries = ({ countriesToShow: countryArray }) => {
  let moreThanTenCountries = countryArray.length > 10;
  let onlyOneCountry = countryArray.length === 1;

  return (
    <>
      {moreThanTenCountries && <p>Please refine your search</p>}
      {onlyOneCountry && (
        <div>
          <h1>{countryArray[0].name.common}</h1>
          <p>Region: {countryArray[0].region}</p>
          <p>Capital: {countryArray[0].capital}</p>
          <h2>Languages</h2>
          <UList array={Object.values(countryArray[0].languages)} />
          <img src={countryArray[0].flags.png} alt="country flag" />
        </div>
      )}
      {!moreThanTenCountries && !onlyOneCountry && (
        <ul>
          {countryArray.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DisplayCountries;
