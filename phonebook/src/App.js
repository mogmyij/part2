import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999222333" },
    { name: "testing", number: "09097" },
    { name: "bobby", number: "230423948" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [personsToShow, setPersonsToShow] = useState(persons);

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
  };

  const searchPerson = (event) => {
    let matchedPersons = persons.filter((person) => {
      const personUpperCase = person.name.toUpperCase();
      const searchQueryUpperCase = event.target.value.toUpperCase();
      return personUpperCase.includes(searchQueryUpperCase);
    });
    setPersonsToShow(matchedPersons);
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Search Person</h2>
      <input value={searchQuery} onChange={searchPerson} />
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
