import './App.css'
import { Component } from 'react'
import UserList from './components/UserList'

class App extends Component {
    render() { // render() returns jsx
        return (
            <div className="App">
                <UserList />
            </div>
        )
    }
}

export default App
