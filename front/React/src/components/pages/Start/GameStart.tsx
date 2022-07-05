import React, { useEffect, VFC } from "react";
import styles from "./GameStart.module.css";
import { StartButton } from "./StartButton/StartButton";
import { SideBar } from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";

export const GameStart: VFC = () => {
  const navigation = useNavigate();

  const handleKeyDown = (e: KeyboardEvent) => {
    // Enterキーが押されたらゲームを開始する
    if (e.key === "Enter") {
      startGame();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
  }, []);

  const startGame = () => {
    navigation("/main");
  };

  return (
    <div id="outer-container" className={styles.wrapper}>
      <div>
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <div className={styles.container}>
            <StartButton startGame={startGame} />
          </div>
        </div>
      </div>
    </div>
  );
};
