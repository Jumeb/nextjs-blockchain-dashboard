import React from "react";

import styles from "./styles.module.css";
import { Arrow } from "@/lib/assets/icons";

interface TopButton {
  show: boolean;
}

const TopButton: React.FC<TopButton> = ({ show }) => {
  return (
    <div
    onClick={() => window.scroll(0, 0)}
      className={[
        styles.topButton,
        show ? styles.showTop : styles.hideTop, "dark:bg-cinder dark:shadow-transparent"
      ].join(" ")}
    >
      <Arrow 
      className={[styles.topIcon, "dark:fill-white -rotate-90"].join(" ")} />
    </div>
  );
};

export default TopButton;
