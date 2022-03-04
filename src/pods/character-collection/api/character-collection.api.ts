import { CharacterEntity } from './character-collection.api-model';
const url = 'https://rickandmortyapi.com/api/character';
const getCharacterCollection = async (): Promise<CharacterEntity[]> => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};

export { getCharacterCollection };
