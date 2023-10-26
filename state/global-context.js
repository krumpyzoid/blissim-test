import { createContext, Component } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_interstitial: false,
            cart: [],
            wishlist: [],
            pushObject: this.pushObject.bind(this),
            getCart: this.getCart.bind(this),
            addProductToCart: this.addProductToCart.bind(this),
            removeProductToCart: this.removeProductToCart.bind(this),
            getWishList: this.getWishList.bind(this),
            addProductToWishList: this.addProductToWishList.bind(this),
            removeProductToWishList: this.removeProductToWishList.bind(this),
        }
    }

    pushObject(key, value, callback) {
        this.setState({ [key]: value }, callback);
    }

    getCart() {
        const sessionStorageCart = JSON.parse(sessionStorage.getItem('cart')); // null if not exist
        this.setState({ cart: sessionStorageCart || [] });

    }

    addProductToCart(product, callback) {
        const newCart = [...this.state.cart, product]
        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToCart(id, callback) {
        const newCart = [...this.state.cart]
            .filter(p => p.id !== id);

        this.setState({ cart: newCart }, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));
            if (typeof callback !== 'undefined') callback();
        });
    }

    getWishList() {
        const sessionStorageWishList = JSON.parse(sessionStorage.getItem('wishlist')); // null if not exist
        this.setState({ wishlist: sessionStorageWishList || [] });
    }

    addProductToWishList(product, callback) {
        const newWishList = [...this.state.wishlist, product]
        this.setState({ wishlist: newWishList }, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newWishList));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToWishList(id, callback) {
        const newWishList = [...this.state.wishlist]
            .filter(p => p.id !== id);

        this.setState({ wishlist: newWishList }, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newWishList));
            if (typeof callback !== 'undefined') callback();
        });
    }

    componentDidMount() {
        this.getCart()
    }

    render() {
        const { children } = this.props;

        return (
            <GlobalContext.Provider value={{ ...this.state }}>
                {children}
            </GlobalContext.Provider>
        );
    }
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
