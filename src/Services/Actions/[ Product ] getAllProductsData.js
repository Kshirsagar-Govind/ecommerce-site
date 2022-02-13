export const getAllProduct = () => {

    return async dispatch => {

        const res = await fetch(
            `${process.env.REACT_APP_HOST}/get-product-data`
        );
        const allProductsData = await res.json();
        dispatch({ type: "GET_ALL_PRODUCT_DATA", payload: allProductsData });
    };
};

