import * as React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { CharacterEntity } from './character.vm';
import * as classes from './character.component.styles';
interface Props {
  character: CharacterEntity;
  onSave: (bestSentences: string[]) => void;
}

const Character: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;
  const [sentence, setSentence] = React.useState('');
  const [bestSentences, setBestSentences] = React.useState(() =>
    character.bestSentences.map((sentence) => ({
      id: String(Math.random()),
      sentence,
    }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const sentencesString = bestSentences.map((item) => item.sentence);
    onSave(sentencesString);
  };

  const handleDelete = (id: string) => {
    const newBestSentences = bestSentences.filter(
      (sentence) => sentence.id !== id
    );
    setBestSentences(newBestSentences);
  };

  const handleAdd = () => {
    if (sentence) {
      const newBestSentences = [
        ...bestSentences,
        { id: String(Math.random()), sentence },
      ];
      setBestSentences(newBestSentences);
      setSentence('');
    }
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
        <div>Best Sentences:</div>
        <ul className={classes.sentenceList}>
          {bestSentences.map((item) => (
            <li className={classes.sentenceItem} key={item.id}>
              <p>{item.sentence}</p>
              <div>
                <IconButton
                  onClick={() => handleDelete(item.id)}
                  type="button"
                  color="primary"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <textarea
            id="bestSentences"
            className={classes.textArea}
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          ></textarea>
          <Button onClick={handleAdd} type="button" color="primary">
            Add new sentence
          </Button>
          <Button type="submit" color="primary">
            Save new best Sentences
          </Button>
        </form>
      </div>
    </div>
  );
};

export { Character };
