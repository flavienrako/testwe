import { atom, selector } from 'recoil';
import { Book } from 'types';

export const paginationState = atom<number>({
  key: 'pagination-state',
  default: 2,
});

export const booksListState = selector<Book[]>({
  key: 'movies-list',
  get: async ({ get }) => {
    const pagination = get(paginationState);
    // get book list

    return []
  },
});

export const selectedBookState = atom<Book>({
  key: 'selected-book',
  default: null,
});
