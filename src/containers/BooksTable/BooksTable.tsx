import { BookCard } from "../../components/BookCard/BookCard";

export const BooksTable = ({ books }: any) => {
  console.log(books);
  return (
    <>
      <h1>{books[0].length}</h1>
      {books[0].map((book: any, index: number) => {
        return <BookCard data={book} key={index} />;
      })}
    </>
  );
};
