import { User } from 'shared/types/dto/user.dto';

export interface IUserReducer {
	user: User | null;
}
