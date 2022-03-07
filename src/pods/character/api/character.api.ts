import { CharacterEntity } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface CharacterResponse {
  character: CharacterEntity;
}

const getCharacter = async (characterId: string): Promise<CharacterEntity> => {
  const characterQuery = gql`
    query ($characterId: ID!) {
      character(id: $characterId) {
        id
        name
        species
        status
        gender
        image
      }
    }
  `;
  const { character } = await graphQLClient.request<CharacterResponse>(
    characterQuery,
    { characterId }
  );
  return character;
};

export { getCharacter };
