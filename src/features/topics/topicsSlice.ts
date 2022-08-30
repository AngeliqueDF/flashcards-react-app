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

