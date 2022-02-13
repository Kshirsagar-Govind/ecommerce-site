const getAllProductDataReducer = (state = "", action) => {

    switch (action.type) {
        case "GET_ALL_PRODUCT_DATA":
            // console.log(action.payload, "action.payload");
            return action.payload;


        default:
            // console.log("default state");
            return state;
    }

}
export default getAllProductDataReducer;


