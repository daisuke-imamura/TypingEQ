import React from "react";
import { Table } from "semantic-ui-react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableRow } from "./TableRow/TableRow";
import styles from "./Table.module.css";
import { recordData } from "../../../../../types/UserType";

type Props = {
  recordArr: recordData[];
};

export const GameRecordTable = (props: Props) => {
  const { recordArr } = props;
  return (
    <div className={styles.tableContainer}>
      <Table singleLine>
        <TableHeader />
        <Table.Body>
          {recordArr.map((row, idx) => {
            return <TableRow key={idx} idx={idx} data={row} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
