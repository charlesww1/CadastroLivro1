import React from 'react';
import BodyAdd from './BodyAdd';

const BookAdd = ({ history, books, setBooks }) => {
  const OnAdd = (book) => {
    setBooks([book, ...books]);
    history.push('/list');
  };

  return (
      <BodyAdd OnSubmit={OnAdd} />
  );
};

export default BookAdd;