import { Character } from './characters';

export type Book = {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[] | Character[];
  povCharacters: string[];
};

export type BookApiResponse = {
  page: number;
  results: Book[];
  total_pages: number;
  total_results: number;
};
