import { StoreType } from 'store/root-store';
// import { User } from 'shared/types/user.type';

export const selectorGetUser = (store: StoreType): any => {
	return store.userRedux.user;
};
