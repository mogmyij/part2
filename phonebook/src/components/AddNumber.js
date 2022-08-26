import { useState } from "react";

const AddNumber = ({ persons, setPersons, setPersonsToShow }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert("the person: " + newName + " has already been created");
      setNewName("");
      setNewNumber("");
      return;
    }
    let personObject = { name: newName, number: newNumber };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
    setPersonsToShow(persons.concat(personObject));
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
