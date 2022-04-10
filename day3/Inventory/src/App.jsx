import { useState } from "react";
import "./App.css";

export const App = () => {
  // const [inv, setInv] = useState({
  //   books: 10,
  //   notebooks: 13,
  //   pens: 40,
  // });

  const [books, setBooks] = useState(10);
  const [notebooks, setNotebooks] = useState(13);
  const [pens, setPens] = useState(40);

  // Create add and remove functions here that changes the
  const [total, setTotal] = useState(books + notebooks + pens);

  // state.
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "3px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "20px",
        }}
      >
        <div className="items">
          <span>Books: </span>
          <button
            className="circlularButton"
            onClick={() => {
              setBooks(books + 1);
              setTotal(total + 1);
            }}
          >
            +
          </button>
          <button
            className="circlularButton"
            onClick={() => {
              if (books <= 0) {
                return;
              }
              setBooks(books - 1);
              setTotal(total - 1);
            }}
          >
            -
          </button>
          <span>{books}</span>
        </div>
        <div className="items">
          <span>Notebooks: </span>
          <button
            className="circlularButton"
            onClick={() => {
              setNotebooks(notebooks + 1);
              setTotal(total + 1);
            }}
          >
            +
          </button>
          <button
            className="circlularButton"
            onClick={() => {
              if (notebooks <= 0) {
                return;
              }
              setNotebooks(notebooks - 1);
              setTotal(total - 1);
            }}
          >
            -
          </button>
          <span>{notebooks}</span>
        </div>
        <div className="items">
          <span>Pen: </span>
          <button
            className="circlularButton"
            onClick={() => {
              setPens(pens + 1);
              setTotal(total + 1);
            }}
          >
            +
          </button>
          <button
            className="circlularButton"
            onClick={() => {
              if (pens <= 0) {
                return;
              }
              setPens(pens - 1);
              setTotal(total - 1);
            }}
          >
            -
          </button>
          <span>{pens}</span>
        </div>
        {/* calculate total and show it */}
        total: {total}
      </div>
      <br />
    </>
  );
};

export default App;