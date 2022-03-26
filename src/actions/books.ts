import { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { getBooks } from 'services/book';
import { booksListState, paginationState } from 'store';

const useBooks = () => {
  const [pagination, setPage] = useRecoilState(paginationState);
  const [books, setBooks] = useRecoilState(booksListState);

  useEffect(() => {
    getBooks({
      method: 'GET',
      url: 'books',
      params: { page: pagination.page },
    }).then((res: []) => {
      if (res.length) {
        const booksList = {};
        booksList[pagination.page] = res;
        setBooks((m) => ({ ...m, ...booksList }));
      }else {
        setPage(({ finit, ...rest }) => ({ finit: true, ...rest }));
      }
    });
  }, [pagination.page]);

  const fetchMore = () => {
    if (!pagination.finit) {
      setPage(({ page, ...rest }) => ({ page: page + 1, ...rest }));
    }
  };
  return { books, fetchMore };
};

export default useBooks;
