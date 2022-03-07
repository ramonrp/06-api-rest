import { CharacterEntity } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface CharacterCollectionResponse {
  characters: { results: CharacterEntity[] };
}
const getCharacterCollection = async (): Promise<CharacterEntity[]> => {
  const CharacterCollectionQuery = gql`
    query {
      characters(page: 1) {
        results {
          name
          image
          id
          species
        }
      }
    }
  `;

  const {
    characters: { results },
  } = await graphQLClient.request<CharacterCollectionResponse>(
    CharacterCollectionQuery
  );
  return results;
};

export { getCharacterCollection };
