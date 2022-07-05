import { useEffect, ReactNode } from "react";
import styles from "./StartAlert.module.css";

type Props = {
  setAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export const StartAlert = (props: Props) => {
  const { setAlertOn, children } = props;

  return (
    <div className={styles.alertWrapper}>
      <h1 className={styles.alert}>{children}</h1>:
    </div>
  );
};
