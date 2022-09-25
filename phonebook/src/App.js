import { useState, useEffect } from "react";
import Search from "./components/Search";
import DisplayNumbers from "./components/DisplayNumbers";
import AddNumber from "./components/AddNumber";
import phoneBook from "./services/phoneBook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  useEffect(() => {
    phoneBook.getPhoneNumbers().then((data) => {
      setPersons(data);
      setPersonsToShow(data);
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
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
      />
      <h2>Numbers</h2>
      <DisplayNumbers 
        persons={persons}
        setPersons={setPersons}
        personsToShow={personsToShow}
        setPersonsToShow={setPersonsToShow}
      />
    </div>
  );
};

export default App;
