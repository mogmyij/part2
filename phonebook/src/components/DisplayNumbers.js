const DisplayNumbers = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) =>( 
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default DisplayNumbers;
