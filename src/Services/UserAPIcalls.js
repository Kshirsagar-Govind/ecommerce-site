
export const GetAllUsers = async () => {
    const list = await fetch(`${process.env.REACT_APP_HOST}/get-users-list`);
    return await list.json();
}


export const GetAllProducts = async () => {
    const list = await fetch(`${process.env.REACT_APP_HOST}/get-product-data`);
    return await list.json();
}

module.exports = { GetAllUsers, GetAllProducts }