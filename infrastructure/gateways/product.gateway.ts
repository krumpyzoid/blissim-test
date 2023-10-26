export interface ProductGateway {
	getAll(): Promise<Product[]>;
	getById(id: number): Promise<Product | null>;
}
export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}
