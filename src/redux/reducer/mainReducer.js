const { useReducer } = require("react");
const initialState = {

}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

    case typeName:
        return { ...state, ...action.payload };

    default:
        return state;
    }
}

export default mainReducer;
