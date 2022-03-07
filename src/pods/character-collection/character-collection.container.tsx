import * as React from 'react';
import { CharacterCollection } from './character-collection.component';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';
import { useCharacters } from './character-collection.hook';
const CharacterCollectionContainer: React.FC = () => {
  const { characters } = useCharacters();
  const history = useHistory();
  const handleDetail = (id: string) => {
    history.push(linkRoutes.characterDetail(id));
  };
  return (
    <CharacterCollection
      characterCollection={characters}
      onDetail={handleDetail}
    />
  );
};

export { CharacterCollectionContainer };
