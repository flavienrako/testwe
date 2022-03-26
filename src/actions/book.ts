import { useCallback, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { getCharachers } from 'services/book';
import { selectedBookState } from 'store';
import { Book } from 'types';

const useBook = () => {
  const [book, setBook] = useRecoilState(selectedBookState);
  const unselectBook = useCallback(() => {
    setBook(undefined);
  }, []);

  useEffect(() => {
    /*     getBook({
      method: 'GET',
      url: 'books',
    }).then((res: Book) => {
        const booksList = {};
        booksList[pagination.page] = res;
        setBooks((m) => ({ ...m, ...booksList }));
      } else {
        setPage(({ finit, ...rest }) => ({ finit: true, ...rest }));
      }
    }); */
  }, []);

  return { book, unselectBook };
};

export default useBook;
