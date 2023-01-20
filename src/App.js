// src/App.js
import { useState } from "react";
import "./App.css";
import contacts from "../src/contacts.json";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));

  function wonOscar(oscar) {
    if (oscar === true) {
      return "🏆";
    }
  }

  function wonEmmy(emmy) {
    if (emmy === true) {
      return "🏆";
    }
  }

  function addRandomContact() {
    const filteredContacts = contacts.filter((c) => {
      return !contact.find((cl) => c.id === cl.id);
    });

    const randomContact =
      filteredContacts[Math.floor(Math.random() * filteredContacts.length)];

    setContact(contact.concat(randomContact));
  }

  function sortByName() {
    const sortedContacts = contact.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setContact(sortedContacts);
  }

  function sortByPopularity() {
    const sortedContacts = contact.sort((a, b) => b.popularity - a.popularity);

    setContact(sortedContacts);
  }

  function handleDeleteContact(contactId) {
    const filteredContacts = contact.filter((contact) => {
      return contact.id !== contactId;
    });

    setContact(filteredContacts);
  }

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <div>
          <button onClick={addRandomContact}>Add Random Contact</button>
          <button onClick={sortByName}>Sort by Name</button>
          <button onClick={sortByPopularity}>Sort by Popularity</button>
        </div>
        <div>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {contact.map((actor) => {
            return (
              <tr>
                <td>
                  <img src={actor.pictureUrl} alt="actors" />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>{wonOscar(actor.wonOscar)}</td>
                <td>{wonEmmy(actor.wonEmmy)}</td>
                <td>
                  <button onClick={() => handleDeleteContact(actor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
