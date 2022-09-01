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
});

export default quizzesSlice.reducer;
