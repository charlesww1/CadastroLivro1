import React from 'react';
import _ from 'lodash';
import Card from './Card';

const ListBook = ({ books, setBooks }) => {

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
        <div className="lista-livro">
          {!_.isEmpty(books) ? (
            books.map((book) => (
              <Card key={book.id} {...book} deleteBook={deleteBook} />
            ))
          ) : (
            <h2 className="message"></h2>
          )}
        </div>
  );
};

export default ListBook;