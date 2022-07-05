import styles from "./Button.module.css";
import "../SideBar.css";
import { useNavigate } from "react-router-dom";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon: JSX.Element;
  linkTo: string;
};

export const Button: FC<Props> = memo((props) => {
  const { children, icon, linkTo } = props;
  const navigation = useNavigate();

  return (
    <button className={styles.menuItem} onClick={() => navigation(linkTo)}>
      {icon}
      {children}
    </button>
  );
});
