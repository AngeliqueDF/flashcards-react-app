import reducer, { Topic } from "./topicsSlice";
import { v4 as uuidv4 } from "uuid";

describe("topicsReducer", () => {
  test("Should return initial state by default ", () => {
    expect(
      reducer(undefined, { type: undefined, payload: undefined })
    ).toEqual({ topics: { topics: {} } });
  });

});
