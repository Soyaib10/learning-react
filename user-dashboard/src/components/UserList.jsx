import React from "react";
import users from "../data/userData";
import UserCard from "./UserCard";

// making card list
function UserList() {
  return (
    <div>
      <h1>User Profiles</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            email={user.email}
            location={user.location}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList