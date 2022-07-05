import React from "react";
import styles from "./Title.module.css";

// 親コンポーネントより受け取るpropsの型指定
type TitleProps = {
  text: string;
};

// textpropsを分割代入で指定して、h1タグ内でpropsを受け取る。
export const Title = (props: TitleProps) => {
  const { text } = props;
  return <h1 className={styles.title}>{text}</h1>;
};
