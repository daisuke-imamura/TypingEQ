import { Table } from "semantic-ui-react";
import styles from "./TableHeader.module.css";
import { memo } from "react";

export const TableHeader = memo(() => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell className={styles.tableHeader}>履歴</Table.HeaderCell>
        <Table.HeaderCell className={styles.tableHeader}>
          プレイ日
        </Table.HeaderCell>
        <Table.HeaderCell className={styles.tableHeader}>
          正解率
        </Table.HeaderCell>
        <Table.HeaderCell className={styles.tableHeader}>
          1分あたりの文字数
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
});
