import styles from "./Navbar.module.css";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <div>
        <Link to="AccountCreation">Create an account</Link>
        <Link to="Login">Login</Link>
      </div>
    </>
  );
}

export default Navbar;
