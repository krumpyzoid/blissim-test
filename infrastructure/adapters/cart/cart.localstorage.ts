import { Cart, CartGateway, CartItem } from "../../gateways/cart.gateway";

export class CartLocalStorage implements CartGateway {
	getCart() {
		const stringCart = sessionStorage.getItem("cart");
		if (!stringCart) {
			return null;
		}
		const cart = JSON.parse(stringCart) as Cart;
		return cart;
	}
	addItemToCart(item: CartItem) {
		const stringCart = sessionStorage.getItem("cart");
		const cart = (JSON.stringify(stringCart) || []) as Cart;
		const newCart = [...cart, item];
		sessionStorage.setItem("cart", JSON.stringify(newCart));
	}
	removeItemFromCart(id: number) {
		const stringCart = sessionStorage.getItem("cart");
		const cart = (JSON.stringify(stringCart) || []) as Cart;
		const newCart = cart.filter((item) => item.id !== id);
		sessionStorage.setItem("cart", JSON.stringify(newCart));
	}
}
