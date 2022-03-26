import React from 'react';

import { Drawer } from '@mui/material';
import useBook from 'actions/book';

import BookDetailsUi from './BookDetails.ui';
import CharacterList from './CharacterList';

const BookDetails = () => {
  const { book, unselectBook } = useBook();
  const { name, characters } = book || {};
  const authors = book?.authors ? book.authors.join(', ') : '';

  return (
    <Drawer anchor="right" onClose={unselectBook} open={!!book}>
      <BookDetailsUi
        authors={{ authors }}
        characters={{ children: <CharacterList characters={characters} /> }}
        name={{ name }}
      />
    </Drawer>
  );
};

export default BookDetails;
