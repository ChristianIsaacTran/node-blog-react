import { useEffect } from "react";
import Login from "./form_components/login/Login";
import styles from "./Homepage.module.css";
import HeroHeader from "../heroHeader/HeroHeader";
import HeroFooter from "../heroFooter/HeroFooter";

const Homepage = () => {
  // do something external, like fetch requests to sync with react app
  useEffect(() => {}, []);

  return (
    <>
      <HeroHeader />
      <main className={styles.main}>
        <div className={styles.heroBox}>
          <h1 className={styles.heroMsg}>Welcome to Mock Blog</h1>
          <Login />
        </div>
      </main>
      <HeroFooter />
    </>
  );
};

export default Homepage;
