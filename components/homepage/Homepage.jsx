import { useEffect } from "react";
import Login from "../login/Login";
import styles from "./Homepage.module.css";

const Homepage = () => {
  // do something external, like fetch requests to sync with react app
  useEffect(() => {}, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.heroBox}>
          <h1 className={styles.heroMsg}>Welcome to Mock Blog</h1>
          <Login />
        </div>
      </main>
    </>
  );
};

export default Homepage;
