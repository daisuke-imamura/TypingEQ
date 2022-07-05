import styles from "./SubTitle.module.css";

type Props = {
  currentPage: number;
};

export const SubTitle = (props: Props) => {
  const { currentPage } = props;
  const rankingRange = currentPage === 1 ? "1-10" : "11-20";

  return <p className={styles.ranking}>ランキング {rankingRange}位</p>;
};
