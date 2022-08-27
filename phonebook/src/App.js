import axios from "axios";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import DisplayNumbers from "./components/DisplayNumbers";
import AddNumber from "./components/AddNumber";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  var personCounter = 0;
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setPersonsToShow(persons);
      personCounter = persons.length;
    });
  }, []);

  return (
    <div>
      <h2>Search Person</h2>
      <Search setPersonsToShow={setPersonsToShow} persons={persons} />
      <h2>Phonebook</h2>
      <AddNumber
        persons={persons}
        setPersons={setPersons}
        setPersonsToShow={setPersonsToShow}
        personCounter={personCounter}
      />
      <h2>Numbers</h2>
      <DisplayNumbers personsToShow={personsToShow} />
    </div>
  );
};

export default App;
