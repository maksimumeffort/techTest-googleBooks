import { BookCard } from "../../components/BookCard/BookCard";
import styles from "../BooksTable/BooksTable.module.scss";

export const BooksTable = ({ books }: any) => {
  console.log(books);
  return (
    <div className={styles.BooksTable}>
      {books &&
        books.map((book: any, index: number) => {
          return <BookCard book={book} key={index} />;
        })}
    </div>
  );
};
