import * as React from 'react';
import { CharacterEntity } from './character.vm';
import * as classes from './character.component.styles';
interface Props {
  character: CharacterEntity;
}

const Character: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          src={character.image}
          alt={character.name}
          className={classes.img}
        ></img>
      </div>
      <div className={classes.info}>
        <div>Name:{character.name}</div>
        <div>Character:{character.species}</div>
        <div>Status:{character.status}</div>
        <div>Gender:{character.gender}</div>
      </div>
    </div>
  );
};

export { Character };
