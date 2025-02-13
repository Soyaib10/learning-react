import { useReducer } from "react";

function CounterFromReducer() {
    const [state, dispatch] = useReducer(counterReducer, {count: 0})
    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    )
}

function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        case "RESET":
            return {count: 0}
        default:
            return state
    }
}

export default CounterFromReducer