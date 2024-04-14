import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.NotFoundPage}>
      <h1>Page not found 404</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
