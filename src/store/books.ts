import { atom } from 'recoil';
import { Book } from 'types';

export const paginationState = atom<{ page: number; finit: boolean }>({
  key: 'pagination-state',
  default: { page: 1, finit: false },
});

export const booksListState = atom<Book[]>({
  key: 'books-list',
  default: [],
});

export const selectedBookState = atom<Book>({
  key: 'selected-book',
  default: null,
});
