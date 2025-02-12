import React, { Component } from "react";
import users from "../data/UserData"; 
import UserCard from "./UserCard"; 

class UserList extends Component {
    render() {
        return (
            <div className="user-list">
                <h1>User Profiles</h1>
                <div className="user-list">
                    {users.map((user) => {
                        return ( 
                            <UserCard
                                key={user.id} 
                                name={user.name}
                                age={user.age}
                                email={user.email}
                                location={user.location}
                                avatar={user.avatar}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default UserList;
