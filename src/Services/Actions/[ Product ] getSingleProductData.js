export const getSingleProduct = product_id => {

    return async dispatch => {
        const res = await fetch(
            `http://localhost:5500/gameshop/get-product-data/${product_id}`
        );
        const productData = await res.json();


        dispatch({ type: "GET_SINGLE_PRODUCT_DATA", payload: productData });
    };
};

