import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type Quizz = {
  id: string;
  name: string;
  topicId: string;
  cardIds?: string[];
};

type QuizzesState = {
  quizzes: {
    [id: string]: Quizz;
  };
};

const initialState: QuizzesState = { quizzes: {} };

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action: PayloadAction<Quizz>) => {
      state.quizzes[action.payload.id] = {
        ...action.payload,
        cardIds: []
      };
    }
  }
});

export const quizzesSelectors = (state: RootState) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;
