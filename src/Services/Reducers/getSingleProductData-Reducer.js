const getSingleProductDataReducer = (state = "", action) => {

    switch (action.type) {
        case "GET_SINGLE_PRODUCT_DATA":

            return action.payload;

        default:
            console.log("default state");
            return state;
    }

}
export default getSingleProductDataReducer;


