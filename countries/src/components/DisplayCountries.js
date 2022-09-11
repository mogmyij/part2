import UList from "./UList";
import CountryInfo from "./CountryInfo";
import CountryInfoButton from "./CountryInfoButton";

const DisplayCountries = ({ countriesToShow: countryArray }) => {
  //if there are more than 10 countries to display, do not display them
  let moreThanTenCountries = countryArray.length > 10;
  let onlyOneCountry = countryArray.length === 1;

  return (
    <>
      {moreThanTenCountries && <p>Please refine your search</p>}
      {onlyOneCountry && (
        <div>
          <CountryInfo country={countryArray[0]} />
        </div>
      )}
      {/*case where there is less than 10 but more than 1 country  */}
      {!moreThanTenCountries && !onlyOneCountry && (
        <div>
          <UList
            array={countryArray.map((country) => (
              <>
                {country.name.common}
                <CountryInfoButton country={country} />
              </>
            ))}
            keyArray={countryArray.map((country)=>country.name.common)}
          />
        </div>
      )}
    </>
  );
};

export default DisplayCountries;
