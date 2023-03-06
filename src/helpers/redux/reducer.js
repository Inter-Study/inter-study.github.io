// reducer 触发函数
const reducer = (state, action) => {
    if (!state) {
        return {
            bluethDevice: null,
            focusDuration: 0,
        };
    }

    switch (action.type) {
        case "SET_BLUETH_DEVICE":
            return {
                ...state,
                bluethDevice: action.payload,
            };
        case "SET_FOCUS_DURATION":
            return {
                ...state,
                focusDuration: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
