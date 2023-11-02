import React from "react";
import styles from "./HomePage.module.css";
import SearchBar from "../Ui/SearchBar";
import Card from "../Ui/Card";

export default function Homepage() {
  return (
    <>
      {/* TOP DIV  */}
      <div className={styles.main_top_div}>
        <h2>Extra Learning Resources </h2>
        <div className={styles.search_bar}>
          <SearchBar />
        </div>
      </div>
      {/* BOTTOM DIV WITH 3 CARDS */}

      <div className={styles.grid_div}>
        {/* CARD FROM MUI , DATA PASS ON WITH PROPS FOR EVENTUAL DYNAMIC RENDER ex.(MAP) */}
        <Card
          title="React"
          image="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
          text="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
        />
        <Card
          title="Javascript"
          image="https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png"
          text="JavaScript is a scripting or programming language that allows you to implement complex features on web pages."
        />
        <Card
          title="CSS"
          image="data:image/png;base64,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"
          text="CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
        />
      </div>
    </>
  );
}
