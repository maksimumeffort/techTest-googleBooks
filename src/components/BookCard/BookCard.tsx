import styles from "../BookCard/BookCard.module.scss";

export const BookCard = ({ book }: any) => {
  const bookData = book.volumeInfo;

  return (
    <div className={styles.BookCard}>
      <h2>{bookData.title}</h2>
      <h3>{bookData.authors}</h3>
      {/* extras section */}
      <img src={bookData.imageLinks.smallThumbnail} alt="" />
      <p>{bookData.subtitle}</p>
      <p>{bookData.description}</p>
    </div>
  );
};
