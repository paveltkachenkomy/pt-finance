import { db } from "../libs/db";
import {IUser} from "../interfaces";
import {Logger} from "../utils";

export class User implements IUser {
	public id: number;
	public first_name: string;
	public last_name: string | null;
	public username: string | null;

	constructor(id: number, first_name: string, last_name: string | null = null, username: string | null = null) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
	}

	public async save () {
		try {
			db.user.upsert({
				where: {
					id: this.id
				},
				update: this,
				create: this
			});
		}
		catch (err) {
			Logger.warn(JSON.stringify(err));
			throw err;
		}
	}
}