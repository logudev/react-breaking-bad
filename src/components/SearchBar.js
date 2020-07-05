import React, { useState } from 'react';

const SearchBar = ({ setQuery, setIsLoading }) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setIsLoading(true);
    setText(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          value={text}
          className='form-control'
          placeholder='Search Characters'
          onChange={onChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;
