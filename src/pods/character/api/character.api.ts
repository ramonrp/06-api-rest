import { CharacterEntity } from './character.api-model';
const url = 'api/characters';

const getCharacter = async (characterId: string): Promise<CharacterEntity> => {
  return fetch(`${url}/${characterId}`)
    .then((response) => response.json())
    .then((data) => data);
};

const saveSentences = async (
  characterId: string,
  bestSentences: string[]
): Promise<boolean> => {
  return fetch(`${url}/${characterId}`, {
    method: 'PATCH',
    body: JSON.stringify({ bestSentences }),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  });
};

export { getCharacter, saveSentences };
