const initialValue = {
    number: 0
}

export default function reducer(state = initialValue, action) {
    if (action.type === 'PLUS_VALUE') {
        return { ...state, number: state.number + 1 }
    } else if (action.type === 'MINUS_VALUE') {
        return { ...state, number: Math.max(0, state.number - 1) }
    } else if (action.type === 'PLUS_TEN_VALUE') {
        return { ...state, number: state.number + 10 }
    } else if (action.type === 'MINUS_TEN_VALUE') {
        return { ...state, number: Math.max(0, state.number - 10) }
    } else if (action.type === 'RESET_VALUE') {
        return { ...state, number: 0 }
    }

    return state
}
