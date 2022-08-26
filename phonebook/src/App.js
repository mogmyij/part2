import { useState } from "react";
import Search from "./components/Search";
import DisplayNumbers from "./components/DisplayNumbers";
import AddNumber from "./components/AddNumber";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "999222333" },
    { name: "testing", number: "09097" },
    { name: "bobby", number: "230423948" },
  ]);
  const [personsToShow, setPersonsToShow] = useState(persons);

  return (
    <div>
      <h2>Search Person</h2>
      <Search setPersonsToShow={setPersonsToShow} persons={persons} />
      <h2>Phonebook</h2>
      <AddNumber
        persons={persons}
        setPersons={setPersons}
        setPersonsToShow={setPersonsToShow}
      />
      <h2>Numbers</h2>
      <DisplayNumbers personsToShow={personsToShow} />
    </div>
  );
};

export default App;
