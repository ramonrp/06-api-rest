import * as React from 'react';
import { CharacterEntity } from './character.vm';

interface Props {
  character: CharacterEntity;
}

const Character: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <div>
      {
        <div>
          <div>
            <img src={character.image} alt={character.name}></img>
          </div>
          <div>{character.name}</div>
          <div>{character.species}</div>
          <div>{character.status}</div>
        </div>
      }
    </div>
  );
};

export { Character };
