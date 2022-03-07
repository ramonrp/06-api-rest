import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

const mapCharacterFromApiToVM = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntity => ({
  id: String(character.id),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  image: character.image,
  url: character.url,
});

export { mapCharacterFromApiToVM };
