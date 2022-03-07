import * as React from 'react';
import { useCharacter } from './character.hooks';
import { Character } from './character.component';
interface Props {
  characterId: string;
}

const CharacterContainer: React.FC<Props> = (props) => {
  const { characterId } = props;
  const { character } = useCharacter(characterId);
  if (!character) {
    return <div>Loading</div>;
  }
  return <Character character={character} />;
};

export { CharacterContainer };
