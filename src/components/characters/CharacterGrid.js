import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  const CharacterGridView = () => (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
  return isLoading ? <Spinner /> : <CharacterGridView />;
};

export default CharacterGrid;
