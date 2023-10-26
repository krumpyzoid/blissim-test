export interface CartGateway {
	getCart(): Cart | null;
	addItemToCart(item: CartItem): void;
	removeItemFromCart(id: number): void;
}

export type CartItem = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
};
export type Cart = CartItem[];
