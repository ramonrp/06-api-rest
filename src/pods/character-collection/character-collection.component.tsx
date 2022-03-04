import * as React from 'react';
import { CharacterEntity } from './character-collection.vm';
import { CharacterCard } from './components/character-card';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntity[];
  onDetail: (id: string) => void;
}

const CharacterCollection: React.FunctionComponent<Props> = (props) => {
  const { characterCollection, onDetail } = props;
  console.log(characterCollection);
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection?.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              onDetail={onDetail}
            />
          );
        })}
      </ul>
    </div>
  );
};

export { CharacterCollection };
