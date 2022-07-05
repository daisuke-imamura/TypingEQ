import { Table } from "semantic-ui-react";
import { recordData } from "../../../../../types/UserType";
import styles from "./TableRow.module.css";

type Props = {
  idx: number;
  currentPage: number;
  data: recordData;
};

export const TableRow = (props: Props) => {
  const { idx, currentPage, data } = props;
  const { id, user_name, played_at_date, accuracy, wpm } = data;
  const date = new Date(played_at_date).toLocaleDateString();

  return (
    <Table.Row>
      {currentPage === 1 ? (
        <Table.Cell className={styles.cell}>{idx + 1}</Table.Cell>
      ) : (
        <Table.Cell className={styles.cell}>{idx + 11}</Table.Cell>
      )}

      <Table.Cell className={styles.cell}>{user_name}</Table.Cell>
      <Table.Cell className={styles.cell}>{date}</Table.Cell>
      <Table.Cell className={styles.cell}>{accuracy} %</Table.Cell>
      <Table.Cell className={styles.cell}>{wpm} WPM</Table.Cell>
    </Table.Row>
  );
};
