import { useState } from "react";
import axios from "axios";

const Url = `http://localhost:5000`;

export const useGame = () => {
  const [jaTerm, setJaTerm] = useState("");
  const [roTerm, setRoTerm] = useState("");
  const [jaTheme, setJaTheme] = useState("");
  const [roTheme, setRoTheme] = useState("");
  const [isAlertLoading, setAlsertLoading] = useState(false);

  const fetchGame = () => {
    setAlsertLoading(true);
    axios
      .get(`${Url}/terminologie2`)
      .then((res) => {
        // サーバーから取ってきた問題をstate(配列)に入れる
        setRoTerm(res.data["description_ro"]);
        setJaTerm(res.data["description_ja"]);
        setJaTheme(res.data["theme_jp"]);
        setRoTheme(res.data["theme_ro"]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAlsertLoading(false);
      });
  };
  return {
    jaTerm,
    roTerm,
    jaTheme,
    roTheme,
    fetchGame,
    isAlertLoading,
    setAlsertLoading,
  };
};
