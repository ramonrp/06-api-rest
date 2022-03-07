import { CharacterEntity } from './character.api-model';
import { CHARACTER } from './character.mock-data';
const getCharacter = async (): Promise<CharacterEntity> => {
  return CHARACTER;
};

export { getCharacter };
