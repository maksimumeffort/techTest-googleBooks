import styles from "../BookCard/BookCard.module.scss";

export const BookCard = ({ book }: any) => {
  const bookData = book.volumeInfo;

  return (
    <div className={styles.BookCard}>
      <h3>{bookData.title}</h3>
    </div>
  );
};
