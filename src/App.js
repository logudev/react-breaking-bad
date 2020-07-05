import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <SearchBar setQuery={setQuery} setIsLoading={setIsLoading} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
