import reducer, { Topic, TopicsState } from "./topicsSlice";
import { v4 as uuidv4 } from "uuid";

describe("topicsReducer", () => {
  test("Should return initial state by default ", () => {
    expect(
      reducer(undefined, {
        type: undefined,
        payload: undefined
      })
    ).toEqual({ topics: {} });
  });

  test("Should add a topic", () => {
    const newTopic: Topic = {
      id: uuidv4(),
      name: "JavaScript",
      icon: ""
    };

    const newState = reducer(undefined, {
      type: "topics/addTopic",
      payload: newTopic
    });

    expect(newState.topics[newTopic.id]).toEqual({
      id: newTopic.id,
      name: newTopic.name,
      icon: newTopic.icon,
      quizIds: []
    });
  });

  test("Should add a quizz id to the topic it is associated with", () => {
    const currentTopic: Topic = {
      id: uuidv4(),
      name: "JavaScript",
      icon: ""
    };

    const associatedQuizzId: string = uuidv4();

    const currentState: TopicsState = {
      topics: {
        [currentTopic.id]: currentTopic
      }
    };

    const newState = reducer(currentState, {
      type: "topics/addAssociatedQuizz",
      payload: { quizId: associatedQuizzId, topicId: currentTopic.id }
    });

    const foundQuizzId = newState.topics[currentTopic.id].quizIds?.find(
      (quizId) => quizId === associatedQuizzId
    );

    expect(foundQuizzId).toBe(associatedQuizzId);
  });
});
