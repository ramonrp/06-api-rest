import * as React from 'react';
import { useCharacter } from './character.hooks';
import { Character } from './character.component';
import { saveSentences } from './api';
import { useHistory } from 'react-router-dom';
interface Props {
  characterId: string;
}

const CharacterContainer: React.FC<Props> = (props) => {
  const { characterId } = props;
  const { character } = useCharacter(characterId);
  const history = useHistory();
  const handleSave = async (bestSentences: string) => {
    const success = await saveSentences(characterId, bestSentences);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save sentences');
    }
  };
  if (!character) {
    return <div>Loading</div>;
  }
  return <Character character={character} onSave={handleSave} />;
};

export { CharacterContainer };
