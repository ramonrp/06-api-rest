import { CharacterEntity } from './character-collection.api-model';
import { CHARACTERS } from './character-collection.mock-data';
const characterCollection = [...CHARACTERS];
const getCharacterCollection = async (): Promise<CharacterEntity[]> => {
  return characterCollection;
};

export { getCharacterCollection };
