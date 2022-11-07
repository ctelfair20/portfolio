import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../../pages/Pokepage/PokeContext';
import StatsRating from './StatsRating';
import styles from '../../styles/Pokedex.module.css';

const Stats = () => {

  const { stats } = usePokeContext();

  // iterate over pokemon stats and display them
  // DON'T WRAP MAPPING FUNCTIONS! THINGS GET CONFUSING! -- ASK ROB
  const statsMap = stats?.map((stat, i) => {
    const StatWithCapsFirstLetter = stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1);
    const baseStat = stat['base_stat'];
    const id = 'st' + i

    return (
      <Box className={styles['stat-box']} key={id}>
        <span className={styles.stat}>
          {StatWithCapsFirstLetter}:
        </span>
        <StatsRating baseStat={baseStat} />
      </Box>
    )
  });

  return (
    <Paper
      elevation={3}
      className={styles['pokemon-stats-paper']}
    >
      <Box className={styles.title}>
        Stats:
      </Box>
      <Box className={styles['pokemon-stats']}>
        {statsMap}
      </Box>
    </Paper>
  );
}

export default Stats;
