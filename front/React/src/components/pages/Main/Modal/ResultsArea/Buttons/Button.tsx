import styles from "./Button.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  buttonName: String;
  description: String;
  setAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  fetchGameData: () => void;
};

export const Button = (props: Props) => {
  const { buttonName, description, setAlertOn, fetchGameData } = props;
  const navigation = useNavigate();

  //
  const pressKeyDown = (e: KeyboardEvent) => {
    // Enterキーが押されたらゲームを開始する
    if (e.key === "Enter") {
      // startGame();
      fetchGameData();
      console.log("pressed");
      onClickKeyDown();
    }
  };

  // Another gameボタンが押された時の処理
  const onClickKeyDown = () => {
    // setAlertOn(true);
    fetchGameData();
    window.location.reload();
  };

  // finishボタンを押した時の処理
  const finishGame = () => {
    navigation("/userpage");
  };

  // 一度だけEvent listenerを設定
  useEffect(() => {
    document.addEventListener("keydown", pressKeyDown, false);
  }, []);

  return (
    <>
      {buttonName === "Another Game" ? (
        <button className={styles.button} onClick={onClickKeyDown}>
          {buttonName}
        </button>
      ) : (
        <button className={styles.button} onClick={finishGame}>
          {buttonName}
        </button>
      )}

      <p className={styles.explanation}>{description}</p>
    </>
  );
};
