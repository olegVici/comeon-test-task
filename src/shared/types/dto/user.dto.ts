export interface User {
	avatar: string;
	event: string;
	name: string;
	username: string;
}

export interface LogoutUserDto {
	username: string;
}

export interface LoginUserDto extends LogoutUserDto {
	password: string;
}
