import axios from 'core/api/axios.instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Types
import { USER_LOGIN, USER_LOGOUT } from 'store/actions-types';
import { LoginUserDto, LogoutUserDto, User } from 'shared/types/dto/user.dto';

// Constance
import { API } from 'core/api/server.api';

type ResponseLoginType = { data: { player: User } };
type ResponseLogoutType = { data: { status: boolean } };

export const login = createAsyncThunk(USER_LOGIN, async (user: LoginUserDto): Promise<User | boolean> => {
	try {
		const { data }: ResponseLoginType = await axios.post(API.LOGIN, user);

		return { ...data.player, username: user.username };
	} catch (error) {
		toast('Username or Password invalid.');
		return false;
	}
});

export const logout = createAsyncThunk(USER_LOGOUT, async (user: LogoutUserDto): Promise<boolean> => {
	try {
		const { data }: ResponseLogoutType = await axios.post(API.LOGOUT, user);

		return data.status;
	} catch (error) {
		toast('Something went wrong');
		return false;
	}
});
