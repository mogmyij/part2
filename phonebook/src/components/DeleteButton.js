import phoneBook from "../services/phoneBook";

const DeleteButton = ({
  persons,
  setPersons,
  personsToShow,
  setPersonsToShow,
  personId,
}) => {
  const deletePerson = () => {
    if (window.confirm("Are you sure you want to delete this contact")) {
      phoneBook.deletePerson(personId).then(() => {});
      let newPersonsToShow = [...personsToShow];
      let newPersons = [...persons];
      newPersons = newPersons.filter((person) => person.id !== personId);
      newPersonsToShow = newPersonsToShow.filter(
        (person) => person.id !== personId
      );
      setPersons(newPersons);
      setPersonsToShow(newPersonsToShow);
    }
  };

  return <button onClick={deletePerson}>Delete person</button>;
};

export default DeleteButton;
