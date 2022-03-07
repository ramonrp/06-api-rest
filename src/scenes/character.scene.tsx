import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterContainer } from 'pods/character';
import { useParams } from 'react-router-dom';

interface characterParams {
  characterId: string;
}
export const CharacterScene = () => {
  const { characterId } = useParams<characterParams>();
  return (
    <AppLayout>
      <CharacterContainer characterId={characterId} />
    </AppLayout>
  );
};
