import React, { Component } from 'react';

class SetStateChange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    handlerChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Input Name' onChange={this.handlerChange} />
                <p>Your name: {this.state.name}</p>
            </div>
        )
    }
}

export default SetStateChange;
