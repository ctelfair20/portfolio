import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import styles from '../styles/Home.module.css';

const Abilities = () => {

  const { abilities } = usePokeContext();

  const abilitesMap = abilities?.map((ability, i) => {
    const id = 'ab' + i
    const abilityWithCapsFirstLetter = ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1);
    return <Box key={id}>{abilityWithCapsFirstLetter}</Box>
  });

  return (
    <Paper
      elevation={3}
      className={styles['pokemon-abilities-paper']}
    >
      <Box className={styles.title}>
        Abilities:
      </Box>
      <Box className={styles["pokemon-abilities"]}>
        {abilitesMap}
      </Box>
    </Paper>
  );
};

export default Abilities;