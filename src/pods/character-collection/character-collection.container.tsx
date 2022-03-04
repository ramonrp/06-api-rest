import * as React from 'react';
import { CharacterCollection } from './character-collection.component';
import { CharacterEntity } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { linkRoutes } from 'core/router';
import { useHistory } from 'react-router-dom';
import { mapCharacterListFromApiToVM } from './character-collection.mapper';
const CharacterCollectionContainer: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>();
  React.useEffect(() => {
    getCharacterCollection()
      .then(mapCharacterListFromApiToVM)
      .then(setCharacters);
  });
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
