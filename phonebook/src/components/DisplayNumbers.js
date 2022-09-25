import DeleteButton from "./DeleteButton";

const DisplayNumbers = ({
  persons,
  setPersons,
  personsToShow,
  setPersonsToShow,
}) => {
  personsToShow = personsToShow.map((person) => {
    return (
      <>
        <p>
          {person.name} {person.number}
        </p>
        <DeleteButton
          persons={persons}
          setPersons={setPersons}
          personsToShow={personsToShow}
          setPersonsToShow={setPersonsToShow}
          personId={person.id}
        />
      </>
    );
  });

  return (
    <ul>
      {personsToShow.map((person, index) => (
        <li key={index}>{person}</li>
      ))}
    </ul>
  );
};

export default DisplayNumbers;
