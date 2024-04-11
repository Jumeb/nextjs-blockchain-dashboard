import React from "react";

import styles from "./styles.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.spinner} data-testid='loading' />
  );
};

export default Loading;