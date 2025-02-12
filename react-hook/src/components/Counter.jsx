import { Component } from "react"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            backgroundColor: 'white'
        }
        this.decrement = this.decrement.bind(this) // for direct function
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
 
    render() {
        return (
            <div>
                <div>
                    <p>This is counter : {this.state.count}</p>
                </div>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement} disabled={this.state.count === 0}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter