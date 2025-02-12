import { useEffect } from "react";
import { useState } from "react";

function UseEffectApi() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Users list</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UseEffectApi