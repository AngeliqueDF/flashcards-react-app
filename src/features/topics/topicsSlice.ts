import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Topic = {
  id: string;
  name: string;
  icon: string;
  quizIds?: string[];
};

interface TopicsState {
  topics: {
    topics: {
      [id: string]: Topic;
    };
  };
}

const initialState: TopicsState = { topics: { topics: {} } };

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action: PayloadAction<Topic>) => {
      state.topics.topics[action.payload.id] = {
        ...action.payload,
        quizIds: []
      };
    }
  }
});

