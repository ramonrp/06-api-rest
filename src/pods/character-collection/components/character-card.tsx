import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntity } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntity;
  onDetail: (id: string) => void;
}
const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          {/* <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography> */}
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onDetail(character.id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { CharacterCard };
