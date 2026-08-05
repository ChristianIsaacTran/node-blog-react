import styles from "./Login.module.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div className={styles.loginBox}>
        <form action="" className={styles.loginForm}>
          <div className={styles.formGrid}>
            <label htmlFor="">Username:</label>
            <input type="text" />
            <label htmlFor="">Password:</label>
            <input type="text" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={styles.linkGroup}>
          <Link to="AccountCreation" className={styles.createAccountLink}>
            Create an account
          </Link>
          <Link to="Guest" className={styles.guestLink}>Continue as guest</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
