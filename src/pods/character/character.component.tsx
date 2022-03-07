import * as React from 'react';
import { CharacterEntity } from './character.vm';
import * as classes from './character.component.styles';
import Button from '@material-ui/core/Button';
interface Props {
  character: CharacterEntity;
  onSave: (bestSentences: string) => void;
}

const Character: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bestSentences = e.target.elements.bestSentences.value;
    onSave(bestSentences);
  };
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
        <div>Specie:{character.species}</div>
        <div>Status:{character.status}</div>
        <div>Gender:{character.gender}</div>
        <form onSubmit={handleSubmit}>
          <p> Best Sentences: </p>
          <textarea
            id="bestSentences"
            className={classes.textArea}
            defaultValue={character.bestSentences}
          ></textarea>
          <Button type="submit" color="primary">
            Save new best Sentences
          </Button>
        </form>
      </div>
    </div>
  );
};

export { Character };
