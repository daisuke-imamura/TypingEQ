import styles from "./StartButton.module.css";

type Props = {
  startGame: () => void;
};

export const StartButton = (props: Props) => {
  const { startGame } = props;
  return (
    <div>
      <button className={styles.button} onClick={() => startGame()}>
        Game Start
      </button>
      <p className={styles.text}>or press Enter to start a game</p>
    </div>
  );
};
