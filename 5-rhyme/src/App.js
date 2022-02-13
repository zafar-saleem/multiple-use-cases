import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [rhymes, setRhymes] = useState();
  const [sl, setSl] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      const url = `https://api.datamuse.com/words?sl=${sl}`;

      try {
        const response = await fetch(url);
        const json = await response.json();
        setRhymes(json);
      } catch (error) {
        setError(error);
      }
    }
    if (sl) {
      load();
    }
  }, [sl]);

  const searchRhyme = (event) => {
    event.preventDefault();
    setSl(event.target.search.value);
  };

  return (
    <div className="App">
      <form onSubmit={searchRhyme}>
        <label>
          <span>Enter Word</span>
          <div>
            <input type="text" name="search" />
          </div>
        </label>
        <button>Search Rhyme</button>
      </form>
      {error && (<p>{error}</p>)}
      <ul>
        {rhymes?.map((rhyme, index) => (
          <li key={index}>{rhyme.word}</li>
        ))}
      </ul>
    </div>
  );
}
