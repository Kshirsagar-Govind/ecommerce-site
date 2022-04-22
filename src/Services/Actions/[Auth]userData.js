export const UserValid = (data) => {
    return async dispatch => {

        dispatch({ type: "SET_USER_LOGIN", payload: data });
    }

}