import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
