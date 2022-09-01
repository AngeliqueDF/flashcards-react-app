import { configureStore } from "@reduxjs/toolkit";
import topics from "./../features/topics/topicsSlice";
import quizzes from "./../features/quizzes/quizzesSlice";

export const store = configureStore({
	reducer: {
		topics,
		quizzes,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {topics: TopicsState}
export type AppDispatch = typeof store.dispatch;
