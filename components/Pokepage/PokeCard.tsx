import { Card, Container, Box } from '@mui/material';
import { pokeInterface } from '../../pages/Pokepage/interface';
import Banner from './Banner';
import PokeImage from './PokeImage';
import PokeNameAndDescription from './PokeNameAndDescription';
import styles from '../../styles/Pokedex.module.css';

interface PropsI {
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
  setLiked: (value: boolean) => void
  liked: boolean
}

// This componet displays the conponents that make up the left side of the screen
const PokeCard = ({ favorited, setFavorited, liked, setLiked }: PropsI) => {

  return (
    <Card
      elevation={4}
      className={styles['pokemon-card']}
    >
      <Container className={styles['pokemon-card-container']}>
        <Banner favorited={favorited} setFavorited={setFavorited} liked={liked} setLiked={setLiked} />
        <Box className={styles['pokemon-image-description-box']}>
          <PokeImage />
          <PokeNameAndDescription />
        </Box>
      </Container>
    </Card>
  );
};

export default PokeCard;
