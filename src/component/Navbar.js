import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.list}>
          <Link to="/">Home</Link>
          <Link to="/create-contact">CreateContact</Link>
          

        </li>
      </ul>
    </div>
  );
}
