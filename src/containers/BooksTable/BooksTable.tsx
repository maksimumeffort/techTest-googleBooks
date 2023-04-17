import { BookCard } from "../../components/BookCard/BookCard";

export const BooksTable = ({ books }: any) => {
  console.log(books);
  return (
    <>
      {books &&
        books.map((book: any, index: number) => {
          return <BookCard data={book} key={index} />;
        })}
    </>
  );
};
