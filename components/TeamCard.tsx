import { Box } from "@mui/material";
import { pokeInterface } from '../pages/Pokepage/interface';
import { useUpdatePokeContext, usePokedexContext } from '../pages/Pokepage/PokeContext';

// This component displays the mini art or official art for the current pokemon as a team memeber IF the user favorited the pokemon
interface PropsI {
  pokemon: pokeInterface
}

const TeamCard = ({ pokemon }: PropsI) => {

  const pokemonInfoSetter = useUpdatePokeContext();
  const pokedex = usePokedexContext();

  const pokemonName = pokemon.name
  const miniArt = pokemon.sprites?.front_default;
  const officialArt = pokemon.sprites?.other['official-artwork']['front_default'];

  const handleClick = () => {
    const index = pokedex.indexOf(pokemon);
    pokemonInfoSetter(pokedex[index])
  }

  return (
    <Box
      className="team-member"
    >
      {
        <img
          className="mini-art"
          onClick={handleClick}
          src={miniArt ? miniArt : officialArt}
          alt={pokemonName}
        />
      }
    </Box>
  );
}

export default TeamCard;