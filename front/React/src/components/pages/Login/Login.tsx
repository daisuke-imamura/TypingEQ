import { Title } from "./Title/Title";
import styles from "./Login.module.css";
import { Input, Button } from "semantic-ui-react";
import { RegisterButton } from "./RegisterButton/RegisterButton";
import { memo, VFC, useState, ChangeEvent } from "react";
import axios from "axios";
// atom読み込み
import { userLoginState } from "../Register/Register";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
// バックエンドからのレスポンスの型定義
type User = {
  id: number;
  user_id: number;
  user_name: string;
  // joined_date: Date;
  access_token: string;
};

export const Login: VFC = memo(() => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // atomの更新関数を変数へ入れる
  const setLogin = useSetRecoilState(userLoginState);

  // ユーザーネームを保存する関数
  const onChangeUserNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // パスワードを保存する関数
  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // URLに本番には/user/login /user/registerを必ず入れること。
  const postLoginUser = async () => {
    try {
      const result = await axios.post<User>(
        "http://localhost:5000/user/login",
        {
          user_name: userName,
          password: password,
        }
      );
      return result.data;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const onClickLogin = () => {
    // userNameとpasswordが空だったら発火しない
    if (userName !== "" && password !== "") {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      postLoginUser()
        .then((result) => {
          // atomの更新関数でデータを保存
          setLogin(result);
          console.log(result);
          localStorage.setItem("token", result.access_token);
          navigate("/gamestart");
        })
        .catch((err) => {
          setErrorMessage(
            "ログインできませんでした。入力内容をお確かめください。"
          );
        })
        .finally(() => setIsLoading(false));
    } else {
      setErrorMessage("入力内容をお確かめください。");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title text="LOG IN" />
        <Input
          className={styles.form}
          type="text"
          focus
          fluid
          placeholder="UserName"
          onChange={onChangeUserNameInput}
        />
        <Input
          className={styles.form}
          type="password"
          focus
          fluid
          placeholder="Password"
          onChange={onChangePasswordInput}
        />
        <Button
          onClick={onClickLogin}
          className={styles.loginbutton}
          size="small"
        >
          Log in
        </Button>
        <RegisterButton />
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
});
