import * as React from 'react';
import { getCharacter } from './api';
import { mapCharacterFromApiToVM } from './character.mapper';
import { CharacterEntity } from './character.vm';

const CharacterContainer: React.FC = () => {
  const [character, setCharacter] = React.useState<CharacterEntity>();
  React.useEffect(() => {
    getCharacter().then(mapCharacterFromApiToVM).then(setCharacter);
  }, []);
  return <h1>{character?.name}</h1>;
};

export { CharacterContainer };
