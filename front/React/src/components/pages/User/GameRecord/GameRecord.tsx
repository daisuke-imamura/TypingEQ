import styles from "./GameRecord.module.css";
import { GameRecordTable } from "./Table/Table";
import { recordData } from "../../../../types/UserType";

type Props = {
  recordArr: recordData[];
};

export const GameRecord = (props: Props) => {
  const { recordArr } = props;
  return (
    <div className={styles.container}>
      <p className={styles.title}>Games History</p>
      <GameRecordTable recordArr={recordArr} />
    </div>
  );
};
