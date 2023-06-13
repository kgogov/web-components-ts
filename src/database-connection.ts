import { MtyFieldType } from "./components/mty-custom-components";
import { CustomEventDetail } from "./interfaces/CustomEventDetail.Interface";
import { Field } from "./interfaces/Field.Interface";
import { User } from "./interfaces/FormData.Interface";


export class DatabaseConnection {
	private DB_URL: string = 'http://localhost:8080';

	constructor() {
		// ...
	}

	private async dataConverter(response: Response) {
		let data = await response.json();

		if (data['date']) {
			data['date'] = data['date'].split('T')[0];
		}

		return data;
	}

	public async getFormByName(name: string): Promise<Field[]> {
		try {
			const response = await fetch(`${this.DB_URL}/forms/${name}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await this.dataConverter(response);

			data.forEach((element: Field) => {
				if (element.dependantField?.action) {
					element.dependantField.action = new Function("formField", "event", element.dependantField.action.toString()) as (formField: MtyFieldType, event: CustomEvent<CustomEventDetail>) => void;
				}
			});

			return data;
		} catch (error) {
			console.error(error);
			return [];
		}
	}

	public async getUserById(id: string): Promise<User | null> {
		try {
			const response = await fetch(`${this.DB_URL}/users/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await this.dataConverter(response);

			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}


	public async createUser(user: Partial<User>): Promise<User | null> {
		try {
			const response = await fetch(`${this.DB_URL}/users/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await this.dataConverter(response);

			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	public async updateUser(id: string, user: Partial<User>): Promise<User | null> {
		try {
			const response = await fetch(`${this.DB_URL}/users/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await this.dataConverter(response);

			return data;
		} catch (error) {
			console.error(error);
			return null;
		}
	}
}