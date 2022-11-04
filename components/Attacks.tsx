import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const Actions = () => {

  const { moves } = usePokeContext();

  const attacksMap = moves?.map((move, i) => {
    const id = 'atk' + i;
    const atkWithCapsFirstLetter = move.move.name[0].toUpperCase() + move.move.name.slice(1);
    console.log();

    return <Box key={id}>{atkWithCapsFirstLetter}</Box>
  })

  return (
    <Paper
      elevation={3}
      className="pokemon-attacks-paper"
    >
      <Box className="title">
        Attacks: {attacksMap?.length !== 0 ? '' : "Unknown"}
      </Box>
      <Box className="pokemon-attacks">
        {attacksMap}
      </Box>
    </Paper>
  );
};

export default Actions;