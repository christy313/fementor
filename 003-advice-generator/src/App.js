import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error(`Oops! Something went wrong with ${res.status}`);
      }
      const data = await res.json();
      setQuote(data.slip);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const { id, advice } = quote;

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!error && (
        <main className="main">
          <h1 className="advice-id">ADVICE #{id}</h1>
          <q className="content">{advice}</q>
          <img
            className="divider"
            src="./pattern-divider-mobile.svg"
            alt="divider"
          />
          <Button fetchQuote={fetchQuote} />
        </main>
      )}
    </div>
  );
};

export default App;
