import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterFromApiToVM = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntity => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  url: character.url,
});

const mapCharacterListFromApiToVM = (
  characterList: apiModel.CharacterEntity[]
): viewModel.CharacterEntity[] => {
  return characterList.map(mapCharacterFromApiToVM);
};

export { mapCharacterListFromApiToVM };
