const initialState = {
    userData: {
        email: "",
        name: "",
    },
};

const rootReducer = (state = initialState, action) => {
    let temp = { ...state };
    switch (action.type) {
        case "SET_USER_DATA":
            temp.userData = action.payload;
            return temp;
        case "CLEAR_USER_DATA":
            temp.userData = {
                email: "",
                name: "",
            };
            return temp;
        default:
            return state;
    }
};

export default rootReducer;
