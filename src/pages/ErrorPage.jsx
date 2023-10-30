import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Oops!</h1>
      <p className={styles.message}>
        Something went wrong. This page does not exist.
      </p>
      <Link to="/">
        <button className={styles.button}>Go Home</button>
      </Link>
    </div>
  );
}
