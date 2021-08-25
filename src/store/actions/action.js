import axios from 'axios';

export const getCategories = () => {
    return async (dispatch) => {
        const raw = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
        dispatch(loadCategory(raw.data.results));
    };
};

export const loadCategory = (payload) => {
    return {
        type: 'LOAD_CATEGORY',
        payload,
    };
};


export const getData = (category) => {
    return async (dispatch) => {
        const res = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
        dispatch(handleApiData(category, res.data.results));
        console.log(res.data);
    };
};
export const handleApiData = (payload) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload,
    };
};

export function getItems(name) {
    return {
        type: 'ChangeActive',
        payload: name
    }
}

export function changeBasketItems(product) {
    return {
        type: 'Change-Basket-Items',
        payload: product
    }
}

export function changeSelected(name) {
    return {
        type: 'ChangeActive',
        payload: name
    }
}

export function addItemsToCart(product) {
    return {
        type: 'AddItemsCart',
        payload: product
    }
};

