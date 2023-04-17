import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers"
    );
    const data = await response.json();
    setBooks(data.itmes);
  };

  return (
    <div className="App">
      <p>{typeof books}</p>
    </div>
  );
};

export default App;
