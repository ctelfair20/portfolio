
import { Rating } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { red } from '@mui/material/colors';

interface PropsI {
  baseStat: number;
}

const StatsRating = ({ baseStat }: PropsI) => {

  // const maxStatConverter = () => {
  // reference: https://pokemondb.net/pokebase/6506/there-formula-for-working-pokemons-highest-possible-stats#:~:text=Your%20stat%20will%20be%20twice,%2C%20(not%20for%20HP).
  // FORMULA FOR HP:
  // BaseStat × 2 + 204

  // FORMULA FOR OTHER STATS:
  // ( BaseStat × 2 + 99 ) × 1.1

  //   // returns max value of stat
  //   if (stat === 'hp') {
  //     return baseStat * 2 + 204;
  //   } else {
  //     return (baseStat * 2 + 99) * 1.1;
  //   }
  // }

  return (
    <Rating
      readOnly
      value={baseStat / 51}
      name="max-stat"
      // defaultValue={baseStat/51}
      getLabelText={(value: number) => `${value} Effort Value${value !== 1 ? 's' : ''}`}
      icon={<CatchingPokemonIcon sx={{ color: red[500] }} fontSize="small" />}
      emptyIcon={<CatchingPokemonIcon fontSize="small" />}
    />
  );
}

export default StatsRating;