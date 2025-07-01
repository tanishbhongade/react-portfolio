import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navigationbar}>
      <Link className={styles.navigationlinks} to="/home">
        Home
      </Link>
      <Link className={styles.navigationlinks} to="/projects">
        Projects
      </Link>
      <Link className={styles.navigationlinks} to="/aboutme">
        About
      </Link>
    </div>
  );
}

export default Navbar;
