import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.css";

export const NotFound = memo(() => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p>Oops! You weren't supposed to see this.</p>
      <p>
        Return to <a href="/">Home</a> and remember: YOU DIDN'T SEE ANYTHING.
      </p>
    </div>
  );
});
