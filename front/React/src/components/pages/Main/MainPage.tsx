import styles from "./MainPage.module.css";
import "react-simple-keyboard/build/css/index.css";
import { GameArea } from "./gameArea/GameArea";
import { RecordArea } from "./recordArea/RecordArea";
import { Modal } from "./Modal/Modal";
import useTypingGame from "react-typing-game-hook";
import { useGame } from "../../../hooks/useGame";
import { useState, useEffect } from "react";
import { StartAlert } from "./StartAlert/StartAlert";
import { postGameData } from "../../../api/postGameData";
import { useRecoilValue } from "recoil";
import { userLoginState } from "../Register/Register";

export const MainPage = () => {
  // state
  const [dateString, setDateString] = useState("");
  const [startTime, setStartTime] = useState(Date.now);
  const [intervalId, setIntervalId] = useState<any>();
  const [isAlertOn, setAlertOn] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  // hooks
  const { jaTerm, roTerm, jaTheme, roTheme, fetchGame } = useGame();
  const fetchGameData = () => fetchGame();

  //-------------------------  タイピングhooks関連  ------------------------------------
  const {
    // phase : { 0:ミスタート, 1:入力中, 2:終わり }
    states: { chars, charsState, correctChar, errorChar, phase },
    // getDuration() : スタートから現在打ってる文字までにかかった秒数(ミリ秒)
    actions: { insertTyping, resetTyping, deleteTyping, getDuration },
  } = useTypingGame(roTerm, {
    skipCurrentWordOnSpace: true,
    pauseOnError: true,
    countErrors: "everytime",
  });

  useEffect(() => {
    fetchGameData();
  }, []);

  /**
   * ミリ秒数： getDuration()
   * 正解数: correctChar
   * ミスタイプ: errorChar
   */

  // accuracy計算
  let accuracy = (correctChar / (correctChar + errorChar)) * 100;
  let flooredAccuracy = Math.floor(accuracy * 10) / 10;

  // WPM計算
  const sec = parseFloat((getDuration() / 1000).toFixed(2));
  let wpm = Math.floor((correctChar / sec) * 60);

  // user_idをuserLoginStateから使用するためのvalue定義
  const userId = useRecoilValue(userLoginState);
  //-------------------------  ゲーム終了時の処理  ----------------------------------

  // 文章を全て入力し終えたらゲームを終了させモーダルを表示、タイマーを停止
  useEffect(() => {
    if (phase === 2) {
      setModalOpen(true);
      stopTimer();
      // accuracy, wpmを小数点第1位までのnumberに変換
      // もし正解率/wpmがNaNの場合は0を設定
      let convertedAccuracy = parseFloat(accuracy.toFixed(1));
      if (!convertedAccuracy) {
        convertedAccuracy = 0;
      }
      if (!wpm) {
        wpm = 0;
      }

      // accuracy, wpmをオブジェクトにしてaxiosでサーバーにpostする
      // user_idも後で付け足してね！
      // サインイン情報のuser_idを使用

      const result = {
        user_id: userId.user_id,
        accuracy_value: convertedAccuracy, // float
        wpm: wpm, // int
      };

      console.log(result);

      postGameData(result);
    }
  }, [phase]);

  //-------------------------  タイマー関連  ----------------------------------

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const startTimer = (starttime: number) => {
    removeTabListener();

    const timer = setInterval(() => {
      const duration = Date.now() - starttime;
      const date = new Date(duration);
      const dateString =
        date.getMinutes().toString().padStart(2, "0") +
        ":" +
        date.getSeconds().toString().padStart(2, "0") +
        ":" +
        Math.trunc(date.getMilliseconds() / 10)
          .toString()
          .padStart(2, "0");
      setDateString(dateString);
    }, 100);
    setIntervalId(timer);
  };

  // Tabキーでゲームを開始する
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab") {
      setAlertOn(false);
      setStartTime(Date.now());
      const starttime: number = Date.now();
      startTimer(starttime);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
  }, []);

  // Tabキーのイベントリスナーを解除(二重タイマー防止のため)
  const removeTabListener = () => {
    document.removeEventListener("keydown", handleKeyDown, false);
  };

  return (
    <div className={styles.gamePageWrapper}>
      <GameArea
        jaTheme={jaTheme}
        roTheme={roTheme}
        jaTerm={jaTerm}
        roTerm={roTerm}
        insertTyping={insertTyping}
        resetTyping={resetTyping}
        deleteTyping={deleteTyping}
        chars={chars}
        charsState={charsState}
      />
      <RecordArea
        accuracy={flooredAccuracy}
        wpm={wpm}
        dateString={dateString}
      />
      {isModalOpen && (
        <Modal
          accuracy={flooredAccuracy}
          wpm={wpm}
          durationTime={sec}
          setAlertOn={setAlertOn}
          fetchGameData={fetchGameData}
        />
      )}
      {isAlertOn && (
        <StartAlert setAlertOn={setAlertOn}>
          Press Tab Button to start
        </StartAlert>
      )}
    </div>
  );
};
