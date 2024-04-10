import React from "react";

import styles from "./styles.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner} />
  );
};

export default Loading;