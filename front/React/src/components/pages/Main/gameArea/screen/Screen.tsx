import styles from "./screen.module.css";
import { TypingGameComponent } from "./Typing/Typing";
import { JapaneseTerm } from "./japanese/JapaneseTerm";

type Props = {
  jaTheme: string;
  roTheme: string;
  jaTerm: string;
  roTerm: string;
  insertTyping: (char?: string | undefined) => void;
  resetTyping: () => void;
  deleteTyping: (deleteWord?: boolean | undefined) => void;
  chars: string;
  charsState: any;
};

export const Screen = (props: Props) => {
  return (
    <div className={styles.screenArea}>
      <JapaneseTerm jaTheme={props.jaTheme} text={props.jaTerm} />
      <p className={styles.border}></p>
      <TypingGameComponent
        title={props.roTheme}
        roTerm={props.roTerm}
        insertTyping={props.insertTyping}
        resetTyping={props.resetTyping}
        deleteTyping={props.deleteTyping}
        chars={props.chars}
        charsState={props.charsState}
      />
    </div>
  );
};
