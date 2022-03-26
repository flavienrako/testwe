import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useBooks from 'actions/books';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import { paginationState } from 'store';

import BookCard from './BookCard.ui';
import Skeleton from './Skeleton';

const BookList = () => {
  const { books, fetchMore } = useBooks();
  const { finit } = useRecoilValue(paginationState);
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
        .map(({ released, isbn, name, publisher }, index) => {
          const date = dayjs(released).format('DD MMMM YYYY');

          return (
            <BookCard
              action
              date={{ date, publisher }}
              img={{
                href: `book/${index + 1}`,
              }}
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
