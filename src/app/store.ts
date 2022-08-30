import { configureStore } from "@reduxjs/toolkit";
import topics from "./../features/topics/topicsSlice";

export const store = configureStore({
	reducer: {
		topics,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {topics: TopicsState}
export type AppDispatch = typeof store.dispatch;
