import { topicsSelector, TopicsState } from "../topicsSlice";

import { Link } from "react-router-dom";
import ROUTES from "../../../app/routes";

const TopicsList = ({ topics }: TopicsState) => (
  <>
    {Object.values(topics).map((topic) => (
      <li className="topic" key={topic.id}>
        <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
          <div className="topic-container">
            <img src={topic.icon} alt="" />
            <div className="text-content">
              <h2>{topic.name}</h2>
              {topic.quizIds === undefined ? (
                <></>
              ) : (
                <p>{topic.quizIds.length} Quizzes</p>
              )}
            </div>
          </div>
        </Link>
      </li>
    ))}
  </>
);

export default TopicsList;
