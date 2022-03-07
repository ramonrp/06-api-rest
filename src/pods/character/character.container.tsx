import * as React from 'react';
import { getCharacter } from './api';
import { mapCharacterFromApiToVM } from './character.mapper';
import { CharacterEntity } from './character.vm';
import { Character } from './character.component';
interface Props {
  characterId: string;
}

const CharacterContainer: React.FC<Props> = (props) => {
  const { characterId } = props;
  const [character, setCharacter] = React.useState<CharacterEntity>();
  React.useEffect(() => {
    getCharacter().then(mapCharacterFromApiToVM).then(setCharacter);
  }, []);

  if (!character) {
    return <div>Loading</div>;
  }
  return <Character character={character} />;
};

export { CharacterContainer };
