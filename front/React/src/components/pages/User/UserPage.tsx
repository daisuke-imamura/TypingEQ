import { Header } from "./Header/Header";
import { SubTitle } from "./SubTitle/SubTitle";
import { GameRecord } from "./GameRecord/GameRecord";
import { SideBar } from "../SideBar/SideBar";
import styles from "./UserPage.module.css";

import { useEffect, useState } from "react";
import { getUserRecord } from "../../../api/GetDataAPI";
import { recordData } from "../../../types/UserType";
import { useRecoilValue } from "recoil";
import { userLoginState } from "../Register/Register";

export const UserPage = () => {
  const [recordArr, setRecordArr] = useState<recordData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ログイン情報を使う
  const data = useRecoilValue(userLoginState);
  console.log(data);

  // サーバーにユーザーデータ配列を取りに行く関数
  const fetch = async () => {
    // ここで取得したいユーザーのidを関数へ渡す。useReciolValueのidを指定
    console.log(data.user_id);
    setLoading(true);
    const res = await getUserRecord(data.user_id);
    console.log(res);

    // サーバーから取ってきたユーザーデータ配列をページごとに違うstate(配列)に入れる
    setRecordArr(res);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div id="outer-container" className={styles.wrapper}>
      <div>
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <div className={styles.container}>
            <Header />

            {!loading ? (
              <>
                <SubTitle>User name : {data.user_name}</SubTitle>
                <GameRecord recordArr={recordArr} />
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
