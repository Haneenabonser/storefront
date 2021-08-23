
const initialState = {
    categories: [
        { name: 'Electronics', description: 'Here you can find a lot of Electronic products' },
        { name: 'Food', description: 'Here you can find a lot of food choices' }
    ],
    selectedCategory: {},
}

export default function reducer(state = initialState, action) {

    const { payload, type } = action;

    switch (type) {
        case 'ChangeSelected':
            let newCategory = {};

            state.categories.forEach(item => {
                if (item.name === payload) {
                    newCategory = item;
                }
            });
            return {
                categories: state.categories,
                selectedCategory: newCategory
            };
        default:
            return state;
    }
}


export function changeSelected(name) {
    return {
        type: 'ChangeSelected',
        payload: name
    }
}