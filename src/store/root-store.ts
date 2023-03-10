import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'store/entities/user/reducer';
import GameReducer from 'store/entities/games/reducer';

export const store = configureStore({
	reducer: {
		userRedux: userReducer,
		gameRedux: GameReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type StoreType = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StoreType, unknown, Action<string>>;
