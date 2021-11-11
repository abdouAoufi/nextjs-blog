import React from "react";
import cn from "classnames";
import styles from "./alert.module.css";

function Alert({ type, children }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

export default Alert;
