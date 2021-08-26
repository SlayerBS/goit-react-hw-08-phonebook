import React from "react";
import styles from "./HomeView.module.css";
const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to<span className={styles.titleSpan}> Phonebook</span>
    </h1>
  </div>
);

export default HomeView;
