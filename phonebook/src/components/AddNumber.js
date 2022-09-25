import { useState } from "react";
import phoneBook from "../services/phoneBook";

const AddNumber = ({
  persons,
  setPersons,
  personsToShow,
  setPersonsToShow,
}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    let personObject = { name: newName, number: newNumber };
    let duplicatePerson = persons.find((person) => {
      return person.name === personObject.name;
    });

    if (duplicatePerson !== undefined) {
      if (
        !window.confirm(
          `${duplicatePerson.name} already exists, replace their number instead?`
        )
      ) {
        setNewName("");
        setNewNumber("");
        return;
      }
      phoneBook.editNumber(duplicatePerson.id, personObject).then((data) => {
        var newPersonsArray = persons.map((person) => {
          if (person.id === duplicatePerson.id) {
            return { ...person, number: data.number };
          }
          return person;
        });
        var newPersonsToShowArray = personsToShow.map((person) => {
          if (person.id === duplicatePerson.id) {
            return { ...person, number: data.number };
          }
          return person;
        });
        setPersons(newPersonsArray);
        setPersonsToShow(newPersonsToShowArray);
      });
      setNewName("");
      setNewNumber("");
      return;
    }

    phoneBook.addPerson(personObject).then((data) => {
      setPersons(persons.concat(data));
      setPersonsToShow(personsToShow.concat(data));
    });
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        <br />
        number:
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddNumber;
