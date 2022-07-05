import styles from "./SubTitle.module.css";
import { FC } from "react";

export const SubTitle: FC = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};
