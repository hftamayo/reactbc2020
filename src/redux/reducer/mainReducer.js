const initialState = {
    theme: 'dark',
    lang: 'en-US',
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'main/setTheme':
        return { ...state, theme: action.payload };

    default:
        return state;
    }
}

export default mainReducer;
