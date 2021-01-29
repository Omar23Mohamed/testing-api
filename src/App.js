import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import Search from './components/Search';
import './App.css';

const App = () => {

  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(result.data);
      setCharacters(result.data);
      setIsLoading(false);
    }
    fetchCharacters();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;