import { VFC } from "react";
import styles from "./TableFooter.module.css";
import { Table, Menu, Icon } from "semantic-ui-react";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  fetch: (page: number) => Promise<void>;
  timesFetchedArr2: number;
  setTimesFetchedArr2: React.Dispatch<React.SetStateAction<number>>;
};

export const TableFooter: VFC<Props> = (props: Props) => {
  const {
    currentPage,
    setCurrentPage,
    fetch,
    timesFetchedArr2,
    setTimesFetchedArr2,
  } = props;

  const onClickNext = () => {
    setCurrentPage(() => 2);
    if (timesFetchedArr2 === 0) {
      fetch(2);
    }
    setTimesFetchedArr2(timesFetchedArr2 + 1);
  };

  const onClickPrev = () => {
    setCurrentPage(() => 1);
  };

  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan="6">
          <Menu floated="right" pagination>
            {currentPage === 1 ? (
              <>
                <Menu.Item as="a" className={styles.pagenation}>
                  11-20
                </Menu.Item>
                <Menu.Item
                  as="a"
                  icon
                  className={styles.pagenationBtn}
                  onClick={onClickNext}
                >
                  <Icon name="chevron right" />
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item
                  as="a"
                  icon
                  className={styles.pagenationBtn}
                  onClick={onClickPrev}
                >
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a" className={styles.pagenation}>
                  01-10
                </Menu.Item>
              </>
            )}
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
