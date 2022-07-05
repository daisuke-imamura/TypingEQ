import { memo } from "react";

import styles from "./ErrorPage.module.css";

export const ServerError = memo(() => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>500</h1>
      <p>Oops! You weren't supposed to see this.</p>
      <p>
        Return to <a href="/">Home</a> and remember: you haven't seen anything.
      </p>
    </div>
  );
});
