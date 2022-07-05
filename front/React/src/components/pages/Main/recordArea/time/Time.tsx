import styles from "../recordItems.module.css";

type Props = {
  dateString: string;
};

export const Time = (props: Props) => {
  const { dateString } = props;
  return (
    <div className={styles.recordItem}>
      <p>Time</p>
      {dateString ? <h1>{dateString}</h1> : <h1>00:00:00</h1>}
    </div>
  );
};
