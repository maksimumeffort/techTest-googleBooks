import { useState, useEffect } from "react";
import { BooksTable } from "./containers/BooksTable/BooksTable";
import "./App.css";

const App = () => {
  const books: Array<Object> = [];

  const getBooks = async (arr: Array<Object>) => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers"
    );
    const data = await response.json();
    return arr.push(data.items);
    // console.log(books);
  };

  getBooks(books);

  return <div className="App">{<BooksTable books={books} />}</div>;
};

export default App;
