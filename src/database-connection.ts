import { Field } from "./interfaces/Field.Interface";

export class DatabaseConnection {
	private DB_URL: string = 'http://localhost:8080';

	constructor() {
		// ...
	}

	public async getFormByName(name: string): Promise<Field[]> {
		try {
			const response = await fetch(`${this.DB_URL}/forms/${name}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	}
}