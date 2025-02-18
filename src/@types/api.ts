export interface ApiResponse<U = null> {
	status: string;
	message: string;
	data: U | null;
	error: ApiError | null;
	token?: string;
}

export interface ApiError {
	code: number;
	details: string[];
}

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	delete: boolean;
	roleId: string | null;
	createdAt: Date;
	updatedAt: Date;
}

export interface UpdateUser extends User {}

export interface AllUsers {
	id: string;
	name: string;
	email: string;
	password: string;
	delete: boolean;
	roleId: string | null;
	createdAt: Date;
	updatedAt: Date;
}
[];

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials {
	name: string;
	email: string;
	password: string;
}
