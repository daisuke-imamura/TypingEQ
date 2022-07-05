import styles from "./Results.module.css";
import { ResultItem } from "./Resultem/ResultItem";
import { Button } from "./Buttons/Button";

type Props = {
  accuracy: number;
  wpm: number;
  durationTime: number;
  setAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  fetchGameData: () => void;
};

export const Results = (props: Props) => {
  const { accuracy, wpm, durationTime, setAlertOn, fetchGameData } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.resultArea}>
        <ResultItem
          name={"Time"}
          data={durationTime}
          notation={"s"}
          description={"入力し始めてから終了までの秒数です。"}
        />
        <ResultItem name={"Accuracy"} data={accuracy} notation={"%"} />
        <ResultItem name={"Average WPM"} data={wpm} notation={"wpm"} />
      </div>
      <div className={styles.buttonArea}>
        <Button
          buttonName={"Another Game"}
          description={"or press Enter to restart"}
          setAlertOn={setAlertOn}
          fetchGameData={fetchGameData}
        />
        <Button
          buttonName={"Finish"}
          description={"to go back to main"}
          setAlertOn={setAlertOn}
          fetchGameData={fetchGameData}
        />
      </div>
    </div>
  );
};
