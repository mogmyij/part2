import { useState } from "react";
import CountryInfo from "./CountryInfo";

const CountryInfoButton = ({ country }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setButtonPressed(!buttonPressed);
        }}
      >
        Show Info
      </button>
      {buttonPressed && (
        <div>
          <CountryInfo country={country} />
        </div>
      )}
    </>
  );
};

export default CountryInfoButton;
