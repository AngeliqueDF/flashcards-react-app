import reducer, { Topic } from "./topicsSlice";
import { v4 as uuidv4 } from "uuid";

describe("topicsReducer", () => {
  test("Should return initial state by default ", () => {
    expect(
      reducer(undefined, { type: undefined, payload: undefined })
    ).toEqual({ topics: { topics: {} } });
  });

  test("Should add a topic", () => {
    const newTopic: Topic = {
      id: `${uuidv4}`,
      name: "JavaScript",
      icon: ""
    };

    const newState = reducer(undefined, {
      type: "topics/addTopic",
      payload: newTopic
    });

    expect(newState.topics.topics[newTopic.id]).toEqual({
      id: newTopic.id,
      name: newTopic.name,
      icon: newTopic.icon,
      quizIds: []
    });
  });
});
