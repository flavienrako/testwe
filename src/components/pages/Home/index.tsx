import React from 'react';

import BookDetails from 'components/modals/BookDetails';

import BookList from './BookList';
import Home from './Home.ui';

const Index = () => (
    <>
      <Home List={{ children: <BookList /> }} />
       <BookDetails />
    </>
  );

export default Index;
