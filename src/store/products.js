
const initialState = {
    products: [
        { name: 'Apple MacBook', description: 'A thin, lightweight laptop from Apple, with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM.', category: 'Electronics', basketCount: 1, price: 1200, image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604278672000' },
        { name: 'Iphone', description: 'Product By apple, a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi.', category: 'Electronics', basketCount: 2, price: 800, image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_lp_us_04202021.jpg.og.jpg?202108061028' },
        { name: 'Burger', description: 'chicken Burger', category: 'Food', basketCount: 3, price: 5, image: 'https://www.recipetineats.com/wp-content/uploads/2017/07/Chicken-Burgers-4.jpg' },
        { name: 'Pizza', description: 'Mashroom Pizza', category: 'Food', basketCount: 4, price: 7, image: 'https://www.thursdaynightpizza.com/wp-content/uploads/2021/05/finished-without-chives_STAMP.png' },
        { name: 'Shawerma', description: 'Arabic Shawerma', category: 'Food', basketCount: 3, price: 5, image: 'https://www.safaqatkom.com/deal-image.php?id=208&mode=mainthumbImages' },
        { name: 'Pasta', description: 'Lasagna', category: 'Food', basketCount: 2, price: 6, image: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg' }
    ],
    activeProducts: []
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ChangeActive':
            const modified = state.products.filter(item => {
                return item.category === payload
            })
            return {
                products: state.products,
                activeProducts: modified
            }
        case 'Change-Basket-Items':
            const afterAddItem = state.products.map((element) => {
                if ( element.basketCount > 0 && element.name == payload.name) {
                    element.basketCount = element.basketCount - 1;
                }
                if (element.basketCount === 0) {
                    element.description = 'Out Of Stock'
                }
                return element;
            });
            return {
                products: afterAddItem,
                activeProducts: state.activeProducts
            }
        default:
            return state;
    }

}


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