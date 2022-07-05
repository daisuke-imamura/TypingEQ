import { getRanking } from "../api/GetDataAPI";
import { recordData } from "../types/UserType";
import { useState } from "react";

export const useRanking = () => {
  const [rankingArr1, setRankingArr1] = useState<recordData[]>([]);
  const [rankingArr2, setRankingArr2] = useState<recordData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (page: number) => {
    setLoading(true);
    const res = await getRanking(page);

    // サーバーから取ってきたリザルトデータ配列をページごとに違うstate(配列)に入れる
    if (page === 1) {
      setRankingArr1(res);
      setLoading(false);
    } else {
      setRankingArr2(res);
      setLoading(false);
    }
  };

  return {
    rankingArr1,
    rankingArr2,
    fetchData,
    currentPage,
    setCurrentPage,
    loading,
  };
};
