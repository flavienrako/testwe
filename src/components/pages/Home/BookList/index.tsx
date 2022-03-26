import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useBooks from 'actions/books';
import dayjs from 'dayjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { paginationState, selectedBookState } from 'store';

import BookCard from './BookCard.ui';
import Skeleton from './Skeleton';

const BookList = () => {
  const { books, fetchMore } = useBooks();
  const { finit } = useRecoilValue(paginationState);
  const setSelected = useSetRecoilState(selectedBookState);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView && !finit) fetchMore();
  }, [inView]);

  return (
    <>
      {Object.values(books)
        .flat()
        .map((book) => {
          const { released, isbn, name, publisher } = book;
          const date = dayjs(released).format('DD MMMM YYYY');

          return (
            <BookCard
              card={{ onClick: () => setSelected(book) }}
              date={{ date, publisher }}
              key={isbn}
              name={{ name }}
            />
          );
        })}
      {!finit && (
        <>
          <Skeleton ref={ref} />
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} />
          ))}
        </>
      )}
    </>
  );
};

export default BookList;
