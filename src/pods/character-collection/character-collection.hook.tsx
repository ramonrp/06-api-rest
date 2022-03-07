import * as React from 'react';
import { getCharacterCollection } from './api';
import { mapCharacterListFromApiToVM } from './character-collection.mapper';
import { CharacterEntity } from './character-collection.vm';
const useCharacters = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>();
  React.useEffect(() => {
    getCharacterCollection()
      .then(mapCharacterListFromApiToVM)
      .then(setCharacters);
  }, []);

  return { characters, setCharacters };
};

export { useCharacters };
