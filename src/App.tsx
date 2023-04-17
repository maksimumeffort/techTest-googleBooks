import { useState, useEffect } from "react";
import { BooksTable } from "./containers/BooksTable/BooksTable";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers"
    );
    return await response.json();
  };

  useEffect(() => {
    const wrapper = async () => {
      const allBooks = await getBooks();
      setBooks(allBooks.items);
    };
    wrapper();
  }, []);

  return <div className="App">{<BooksTable books={books} />}</div>;
};

export default App;
