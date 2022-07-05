import { useNavigate } from "react-router-dom";
import { VFC, memo } from "react";
import { Button } from "./buttons/Button";
import { slide as Menu } from "react-burger-menu";
import styles from "./SideBar.module.css";
import "./SideBar.css";
import {
  BiHomeAlt,
  BiUser,
  BiMedal,
  BiLogInCircle,
  BiLogOutCircle,
} from "react-icons/bi";

type SidemenuProps = {
  pageWrapId: string;
  outerContainerId: string;
};

export const SideBar: VFC<SidemenuProps> = memo(
  ({ pageWrapId, outerContainerId }: SidemenuProps) => {
    const navigation = useNavigate();

    return (
      <Menu>
        <p className={styles.memuTitle}>Menu</p>
        <Button linkTo={"/gamestart"} icon={<BiHomeAlt />}>
          Game
        </Button>
        <Button linkTo={"/userpage"} icon={<BiUser />}>
          User
        </Button>
        <Button linkTo={"/result"} icon={<BiMedal />}>
          Result
        </Button>
        <Button linkTo={"/"} icon={<BiLogInCircle />}>
          Log in
        </Button>
        <button
          className={`${styles.menuItem} ${styles.logout}`}
          onClick={() => navigation("/")}
        >
          <BiLogOutCircle />
          Log out
        </button>
      </Menu>
    );
  }
);
