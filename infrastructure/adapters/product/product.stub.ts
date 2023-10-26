import { Product, ProductGateway } from "../../gateways/product.gateway";

export class ProductGatewayStub implements ProductGateway {
	private _products: Product[] = [];
	constructor(products: Product[]) {
		this._products = products;
	}

	async getAll(): Promise<Product[]> {
		return this._products;
	}

	async getById(id: number): Promise<Product | null> {
		return this._products.find((product) => product.id === id) || null;
	}
}
