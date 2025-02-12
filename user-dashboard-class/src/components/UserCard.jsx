import React, { Component } from "react";

class UserCard extends Component {
    render() {
        const {name, age, email, location, avatar} = this.props

        return (
            <div className="user-card">
                <img src={avatar} alt={name} className="avatar" />
                <h2>{name}</h2>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Location:</strong> {location}</p>
            </div>
        );
    }
}

export default UserCard