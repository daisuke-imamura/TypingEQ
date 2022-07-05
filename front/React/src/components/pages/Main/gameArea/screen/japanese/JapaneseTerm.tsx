import styles from "../screen.module.css";

type Props = {
  jaTheme: string;
  text: string;
};

export const JapaneseTerm = (props: Props) => {
  const { text, jaTheme } = props;
  return (
    <div>
      <p className={styles.typeTitle}>
        <span>{jaTheme}</span>
        <span>{text}</span>
      </p>
    </div>
  );
};
