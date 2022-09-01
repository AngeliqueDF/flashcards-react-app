import reducer, { Quizz } from "./quizzesSlice";
import { v4 as uuidv4 } from "uuid";

describe("topicsReducer", () => {
  test("Should return initial state by default ", () => {
    expect(
      reducer(undefined, {
        type: undefined,
        payload: undefined
      })
    ).toEqual({ quizzes: {} });
  });

  test("Should add a quizz", () => {
    const newQuizz: Quizz = {
      id: uuidv4(),
      name: "JavaScript",
      topicId: uuidv4()
    };

    const newState = reducer(undefined, {
      type: "quizzes/addQuiz",
      payload: newQuizz
    });

    expect(newState.quizzes[newQuizz.id]).toEqual({
      id: newQuizz.id,
      name: newQuizz.name,
      topicId: newQuizz.topicId,
      cardIds: []
    });
  });
});
