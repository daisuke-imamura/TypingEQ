import styles from "./ResultItem.module.css";

type Props = {
  name: String;
  data: Number;
  notation: String;
  description?: string;
};

export const ResultItem = (props: Props) => {
  const { name, data, notation, description } = props;
  const currentDate = new Date();

  return (
    <div className={styles.div}>
      <div className={styles.itemWrapper}>
        <p className={styles.item}>{name}</p>
        <span className={styles.span}>{data} </span>
        {notation}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
