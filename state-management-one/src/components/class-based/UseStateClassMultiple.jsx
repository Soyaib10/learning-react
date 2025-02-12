import React, { Component, use } from "react";

class UseStateClassMultiple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Rrid",
            age: 25
        }
    }

    updateAge = () => {
        this.setState(prevState => ({
            age: prevState.age + 1
        }))
    }

    render() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <h3>Age: {this.state.age}</h3>
        <button onClick={this.updateAge}>Increase Age</button>
      </div>
    );
  }
}

export default UseStateClassMultiple

