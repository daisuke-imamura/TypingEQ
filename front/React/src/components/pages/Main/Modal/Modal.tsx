import styles from "./Modal.module.css";
import { Results } from "./ResultsArea/Results";

type Props = {
  accuracy: number;
  wpm: number;
  durationTime: number;
  setAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  fetchGameData: () => void;
};

export const Modal = (props: Props) => {
  const { accuracy, wpm, durationTime, setAlertOn, fetchGameData } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalContent}>
        <p className={styles.title}>Result</p>
        <Results
          accuracy={accuracy}
          wpm={wpm}
          durationTime={durationTime}
          setAlertOn={setAlertOn}
          fetchGameData={fetchGameData}
        />
      </div>
    </div>
  );
};
