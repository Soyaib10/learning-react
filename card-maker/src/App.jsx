import React from "react";
import Card from "./components/card";
import contacts from "./components/Contacts"
import Avatar from "./components/Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://cdn4.theroar.com.au/wp-content/avatars/user-57631202301220510.medium.png" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
