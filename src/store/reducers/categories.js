
const initialState = {
    categories: [],
    activeCategory: {},
}

export default function reducer(state = initialState, action) {

    const { payload, type } = action;

    switch (type) {
        case 'ChangeActive':
            let modified = {};

            state.categories.forEach(item => {
                if (item.name === payload) {
                    modified = item;
                }
            });
            return {
                categories: state.categories,
                activeCategory: modified
            };
        case 'LOAD_CATEGORY':
            return { ...state, categories: payload };
        default:
            return state;
    }
}


