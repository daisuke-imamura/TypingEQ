import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styles from "./RegisterButton.module.css";

export const RegisterButton = () => {
  const navigation = useNavigate();

  return (
    <div className={styles.register}>
      <p>Not as member yet?</p>
      <Button
        basic
        size="mini"
        floated="right"
        color="youtube"
        onClick={() => navigation("/register")}
      >
        Register
      </Button>
    </div>
  );
};
