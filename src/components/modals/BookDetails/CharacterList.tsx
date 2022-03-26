import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Skeleton from 'components/pages/Home/BookList/Skeleton';
import { Character } from 'types/characters';

import CharacterUi from './Character.ui';

type CharacterListProps = {
  characters: Character[] | string[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  const [currentChar, setCurrentChar] = useState<Character[] | any>([]);
  const [page, setPage] = useState(0);
  const limit = 10;
  const pageSize = characters?.length % limit;

  useEffect(() => {
    if (page > 0 && page <= pageSize) {
      // fetch character in page

      console.log('page: ', page);
      console.log(characters);
      console.log();
      setCurrentChar((c) => [
        ...c,
        ...characters.slice((page - 1) * limit, page * limit),
      ]);
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
      {currentChar.map((url) => (
        <CharacterUi key={url} name={{ name: "" }} playedBy={{ playedBy: url }} />
      ))}
      <div ref={ref}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton height={56} key={i} width="100%" />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
