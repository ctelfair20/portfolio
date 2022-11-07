import { Box } from '@mui/material';
import Stats from "./Stats";
import Abilities from "./Abilities";
import Attacks from "./Attacks";
import styles from '../../styles/Pokedex.module.css';

// This componet displays the conponents that make up the right side of the screen
const PokeInfoCard = () => {

  return (
    <Box className={styles['pokemon-info-box']}>
      <Stats />
      <Abilities />
      <Attacks />
    </Box>
  );
}

export default PokeInfoCard;