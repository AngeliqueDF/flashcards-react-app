import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type Topic = {
  id: string;
  name: string;
  icon: string;
  quizIds?: string[];
};

export interface TopicsState {
  topics: {
    [id: string]: Topic;
  };
}

const initialState: TopicsState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<Topic>) => {
      state.topics[action.payload.id] = {
        ...action.payload,
        quizIds: []
      };
    }
  }
});

export const topicsSelector = (state: RootState) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
