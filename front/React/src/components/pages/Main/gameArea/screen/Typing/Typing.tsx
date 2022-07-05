import styles from "./Typing.module.css";

type Props = {
  title: string;
  roTerm: string;
  insertTyping: (char?: string | undefined) => void;
  resetTyping: () => void;
  deleteTyping: (deleteWord?: boolean | undefined) => void;
  chars: string;
  charsState: any;
};

export const TypingGameComponent = (props: Props) => {
  const { insertTyping, resetTyping, deleteTyping, chars, charsState, title } =
    props;

  return (
    <h1
      className={styles.roTerm}
      onKeyDown={(e) => {
        const key = e.key;

        if (e.code === "Space" || e.code === "Enter" || e.code === "CapsLock") {
          e.preventDefault();
        } else if (key === "Escape") {
          resetTyping();
        } else if (key === "Backspace") {
          deleteTyping(false);
        } else if (key.length === 1) {
          insertTyping(key);
        }
        e.preventDefault();
      }}
      tabIndex={0}
    >
      {chars.split("").map((char, index) => {
        let state = charsState[index];
        let color = state === 0 ? "black" : state === 1 ? "#50a3a2" : "#cd5360";
        return (
          <span key={char + index} style={{ color }}>
            {char}
          </span>
        );
      })}
    </h1>
  );
};
