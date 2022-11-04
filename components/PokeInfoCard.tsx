import { Box } from '@mui/material';
import Stats from "./Stats";
import Abilities from "./Abilities";
import Attacks from "./Attacks";

// This componet displays the conponents that make up the right side of the screen
const PokeInfoCard = () => {

  return (
    <Box className="pokemon-info-box">
      <Stats />
      <Abilities />
      <Attacks />
    </Box>
  );
}

export default PokeInfoCard;