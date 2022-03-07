import { CharacterEntity } from './character-collection.api-model';
const url = '/api/characters';
const getCharacterCollection = async (): Promise<CharacterEntity[]> => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export { getCharacterCollection };
