import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function CounterPage() {

    const initial = useSelector(state => state.number)

    const dispatch = useDispatch()

    const plusValue = () => {
        dispatch({
            type: 'PLUS_VALUE'
        })
    }

    const minusValue = () => {
        dispatch({
            type: 'MINUS_VALUE'
        })
    }

    const plusTenValue = () => {
        dispatch({
            type: 'PLUS_TEN_VALUE'
        })
    }

    const minusTenValue = () => {
        dispatch({
            type: 'MINUS_TEN_VALUE'
        })
    }

    const resetValue = () => {
        dispatch({
            type: 'RESET_VALUE'
        })
    }

    return (
        <div>
            <h1>{initial}</h1>
            <button onClick={plusValue}>+</button>
            <button onClick={minusValue}>-</button>
            <button onClick={plusTenValue}>+10</button>
            <button onClick={minusTenValue}>-10</button>
            <button onClick={resetValue}>reset</button>
        </div>
    );
}

export default CounterPage;