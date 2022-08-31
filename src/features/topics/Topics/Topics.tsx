import { useAppSelector } from "../../../app/hooks";
import { topicsSelector } from "../topicsSlice";
import NewTopicForm from "../../../components/NewTopicForm";
import TopicsList from "./TopicsList";
import { Link } from "react-router-dom";
import ROUTES from "../../../app/routes";

export default function Topics() {
  const topics = useAppSelector((state) => topicsSelector(state));

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).length ? <TopicsList topics={topics} /> : <></>}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
