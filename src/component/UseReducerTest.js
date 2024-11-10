import { useReducer } from "react";
function reducerCount(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            throw new Error()
    }
}

const buttonStyle = {
    padding:'10',
    margin:'5px',
    fontSize:'20px'
}

export default function UseReducerTest() {
    const[count, dispatch] = useReducer(reducerCount, 0)
    const handleIncrement = ()=> dispatch({type:"increment"})
    const handleDecrement = ()=> dispatch({type:"decrement"})
    return (
        <div>
            <button style={buttonStyle} onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button style={buttonStyle} onClick={handleIncrement}>+</button>
        </div>
    ) 
}