import React from "react";
import styles from "./Wrapper.module.scss";
const Wrapper = (props) => {
  return <div className={styles.background}>{props.children}</div>;
};
export default Wrapper;
