import { Header } from "./Header/Header";
import { SubTitle } from "./SubTitle/SubTitle";
import { RankingTable } from "./ResultTable/ResultTable";
import { SideBar } from "../SideBar/SideBar";
import styles from "./ResultPage.module.css";

import { useEffect, useState } from "react";
import { useRanking } from "../../../hooks/useRanking";

export const ResultPage = () => {
  // hooks
  const {
    rankingArr1,
    rankingArr2,
    fetchData,
    currentPage,
    setCurrentPage,
    loading,
  } = useRanking();

  const [timesFetchedArr2, setTimesFetchedArr2] = useState<number>(0);

  // サーバーにリザルトデータ配列を取りに行く関数
  const fetch = (page: number) => fetchData(page);

  // 1回目のローディングは1-10位のデータを何もしなくても取ってくる
  useEffect(() => {
    fetch(1);
  }, []);

  /**
   * ページ１、ページ２のテーブルを変数に入れる
   */
  const page1 =
    currentPage === 1 && !loading ? (
      <RankingTable
        rankingArr={rankingArr1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetch={fetch}
        timesFetchedArr2={timesFetchedArr2}
        setTimesFetchedArr2={setTimesFetchedArr2}
      />
    ) : (
      <h1>Loading...</h1>
    );

  const page2 =
    currentPage === 2 && !loading ? (
      <RankingTable
        rankingArr={rankingArr2}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetch={fetch}
        timesFetchedArr2={timesFetchedArr2}
        setTimesFetchedArr2={setTimesFetchedArr2}
      />
    ) : (
      <h1>Loading...</h1>
    );

  return (
    <div id="outer-container" className={styles.wrapper}>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <div className={styles.container}>
          <Header />
          <SubTitle currentPage={currentPage} />
          {currentPage === 1 ? page1 : page2}
        </div>
      </div>
    </div>
  );
};
