export const getAllProduct = () => {

    return async dispatch => {

        const res = await fetch(
            `http://localhost:5500/gameshop/get-product-data`
        );
        const allProductsData = await res.json();
        dispatch({ type: "GET_ALL_PRODUCT_DATA", payload: allProductsData });
    };
};

