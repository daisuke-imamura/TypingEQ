import styles from "../recordItems.module.css";

export const Accuracy = ({ accuracy }: { accuracy: number }) => {
  return (
    <div className={styles.recordItem}>
      <p>Accuracy</p>
      <h1>
        {accuracy ? accuracy : 0}
        <span> %</span>
      </h1>
    </div>
  );
};
