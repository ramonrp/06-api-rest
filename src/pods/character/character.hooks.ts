import * as React from 'react';
import { getCharacter } from './api';
import { mapCharacterFromApiToVM } from './character.mapper';
import { CharacterEntity } from './character.vm';

const useCharacter = (characterId: string) => {
  const [character, setCharacter] = React.useState<CharacterEntity>();
  React.useEffect(() => {
    getCharacter(characterId).then(mapCharacterFromApiToVM).then(setCharacter);
  }, []);

  return { character, setCharacter };
};

export { useCharacter };
