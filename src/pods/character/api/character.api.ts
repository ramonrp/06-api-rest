import { CharacterEntity } from './character.api-model';
const url = 'api/characters';

const getCharacter = async (characterId: string): Promise<CharacterEntity> => {
  return fetch(`${url}/${characterId}`)
    .then((response) => response.json())
    .then((data) => data);
};

export { getCharacter };
