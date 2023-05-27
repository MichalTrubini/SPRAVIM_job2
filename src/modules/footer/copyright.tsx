import styles from "./copyright.module.css";
import React from "react";

const Copyright: React.FC<{ className: string | null}> = (props) => {
  return <p className={`${styles.copyright} ${props.className}`}>© 2023 Skinekt - Power of elektronics in textile</p>;
};

export default Copyright;
