import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.main}>
      <input className={styles.input} type="text" />
      <button className={styles.button}>Search</button>
    </div>
  );
}
