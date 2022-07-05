import { ChangeEvent, memo, useState, VFC } from "react";
import styles from "./Register.module.css";
import { Input, Button } from "semantic-ui-react";
import { Title } from "../Login/Title/Title";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { atom, AtomEffect, useSetRecoilState } from "recoil";
// グローバルステートの永続化　リロードされてもデータが消えないように。
import { recoilPersist } from "recoil-persist";
// サインアップとは、会員登録のこと。このページでは会員登録のロジックを書く。

// バックエンドからのレスポンスの型定義
type User = {
  id: number;
  user_id: number;
  user_name: string;
  // joined_date: Date;
  access_token: string;
  // effects_UNSTABLE: AtomEffect<any>[];
};

// recoil-persistを使用する。
const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

// atomの初期値
export const userLoginState = atom<User>({
  key: "userLoginState",
  default: {
    id: 0,
    user_id: 0,
    user_name: "",
    access_token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const Register: VFC = memo(() => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // atomの更新関数を変数へ入れる
  const setLogin = useSetRecoilState(userLoginState);

  // ローディングフラグ 今回は必要ない？？？
  const [isLoading, setIsLoading] = useState(false);

  // ユーザーネームを保存する関数
  const onChangeUserNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // パスワードを保存する関数
  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // 確認用パスワードの値を保存する関数
  const onChangeConfirmPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const postRegisterUser = async () => {
    try {
      const result = await axios.post<User>(
        "http://localhost:5000/user/register",
        {
          user_name: userName,
          joined_date: new Date(),
          password: password,
        }
      );
      return result.data;
    } catch (err: any) {
      throw new Error(err);
    }
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

  const onClickSignUp = () => {
    if (password === confirmPassword) {
      if (isLoading) {
        return;
      }
      setIsLoading(true);
      postRegisterUser()
        .then((result) => {
          postLoginUser()
            .then((result) => {
              // atomの更新関数をここで読んで、Recoilでデータを保存
              setLogin(result);
              console.log(result);
              localStorage.setItem("token", result.access_token);
              navigate("/gamestart");
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    } else {
      setErrorMessage("パスワードが一致しません。");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title text="SIGN UP" />
        {/* username欄 */}
        <Input
          className={styles.form}
          type="text"
          focus
          fluid
          placeholder="UserName"
          onChange={onChangeUserNameInput}
        />
        {/* password欄 */}
        <Input
          className={styles.form}
          type="password"
          focus
          fluid
          placeholder="Password"
          onChange={onChangePasswordInput}
          value={password}
        />
        {/* 確認用password欄 */}
        <Input
          className={styles.form}
          type="password"
          focus
          fluid
          placeholder="Confirm Password"
          onChange={onChangeConfirmPasswordInput}
          value={confirmPassword}
        />
        <Button
          className={styles.signupbutton}
          size="small"
          onClick={onClickSignUp}
        >
          Sign up
        </Button>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
});
