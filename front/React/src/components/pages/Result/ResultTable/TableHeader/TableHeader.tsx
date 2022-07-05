import styles from "./TableHeader.module.css";
import { Table } from "semantic-ui-react";
import { memo } from "react";

export const TableHeader = memo(() => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={2} className={styles.tableHeader}>
          順位
        </Table.HeaderCell>
        <Table.HeaderCell className={styles.tableHeader}>名前</Table.HeaderCell>
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
