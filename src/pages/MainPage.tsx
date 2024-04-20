import { Link, Outlet } from "react-router-dom";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
      <nav className={styles.container}>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/section1">연습1</Link>
          </li>
          <li>
            <Link to="/section2">연습2</Link>
          </li>
          <li>
            <Link to="/section3">연습3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default MainPage;
