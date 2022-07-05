import { Screen } from "./screen/Screen";
import styles from "./GameArea.module.css";
import "react-simple-keyboard/build/css/index.css";
import Keyboard from "react-simple-keyboard";

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

const physicalKeyboardHighlight = true;
const preventMouseDownDefault = true;
const newLineOnEnter = false;

export const GameArea = (props: Props) => {
  return (
    <div className={styles.gameArea}>
      <Screen
        jaTheme={props.jaTheme}
        roTheme={props.roTheme}
        jaTerm={props.jaTerm}
        roTerm={props.roTerm}
        insertTyping={props.insertTyping}
        resetTyping={props.resetTyping}
        deleteTyping={props.deleteTyping}
        chars={props.chars}
        charsState={props.charsState}
      />
      <Keyboard
        physicalKeyboardHighlight={physicalKeyboardHighlight}
        preventMouseDownDefault={preventMouseDownDefault}
        newLineOnEnter={newLineOnEnter}
      />
    </div>
  );
};
