import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import axios from 'axios';
import Skeleton from 'components/pages/Home/BookList/Skeleton';
import { Character } from 'types/characters';

import CharacterUi from './Character.ui';

type CharacterListProps = {
  characters: Character[] | string[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  const [currentChar, setCurrentChar] = useState<Character[]>([]);
  const [page, setPage] = useState(0);
  const limit = 10;
  const pageSize = characters?.length % limit;

  const fetchCharacterByRange = (c) =>
    c.map((url: string) =>
      axios
        .request<Character>({
          url,
          method: 'GET',
        })
        .then(({ data }) => data)
    );

  useEffect(() => {
    if (page > 0 && page <= pageSize) {
      Promise.all(
        fetchCharacterByRange(
          characters.slice((page - 1) * limit, page * limit)
        )
      ).then((res: any) => {
        setCurrentChar((c) => [...c, ...res]);
      });
    }
  }, [page]);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) setPage((p) => p + 1);
  }, [inView]);

  return (
    <div>
      {currentChar.map(({ name, playedBy }) => {
        const players = playedBy?.join(', ')
        return(
        <CharacterUi
          key={name}
          name={{ name }}
          playedBy={{
            playedBy: players,
            hidden: !players,
          }}
        />
      )})}
      {page <= pageSize && (
        <div ref={ref}>
          {[1, 2, 3, 4].map((i) => (
            <Skeleton height={56} key={i} width="100%" />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
