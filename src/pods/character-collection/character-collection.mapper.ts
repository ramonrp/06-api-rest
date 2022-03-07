import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterFromApiToVM = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntity => ({
  id: String(character.id),
  name: character.name,
  species: character.species,
  image: character.image,
});

const mapCharacterListFromApiToVM = (
  characterList: apiModel.CharacterEntity[]
): viewModel.CharacterEntity[] => {
  return characterList.map(mapCharacterFromApiToVM);
};

export { mapCharacterListFromApiToVM };
