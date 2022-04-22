const i_state = {
    name: '',
    id: ''
}

const setUserData = (state = i_state, action) => {

    switch (action.type) {
        case "SET_USER_LOGIN":
            return action.payload;

        default:
            return state;
    }

}
export default setUserData;


