import { useEffect } from "react";
import { red } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import { pokeInterface } from "../pages/Pokepage/interface";

interface PropsI {
  setFavorited: (pokemon: pokeInterface[]) => void
  favorited: Array<pokeInterface>
  setLiked: (value: boolean) => void
  liked: boolean
}

const Banner = ({ favorited, setFavorited, liked, setLiked }: PropsI) => {

  const pokemon = usePokeContext();
  const { id } = usePokeContext();

  // This useEffect ensures that if a pokemon is liked, it is added to your team and if disliked, removes the pokemon from your time
  useEffect(() => {
    if (favorited.includes(pokemon) && !liked) {
      // remove current pokemon from favorites
      unfavoritePokemon();
    }
    if (liked && !favorited.includes(pokemon)) {
      // add current pokemon from favorites
      setFavorited([...favorited, pokemon])
    }
  }, [liked])

  const handleClick = () => {
    setLiked(!liked)
  }

  // remove current pokemon from favorites
  const unfavoritePokemon = async () => {
    // find index of current pokemon
    const index = favorited.indexOf(pokemon)
    // slice favorited into two parts
    const firstHalf = favorited.slice(0, index)
    const secondHalf = favorited.slice(index + 1)
    // join to parts
    const newFavs = [...firstHalf, ...secondHalf]
    // set favorites to new join favorited
    await setFavorited(newFavs)
  }

  // Tells heart how to function and display under all circumstaces
  const disableFavoriteBtn = () => {
    // if favorite is 5 or shorter and liked is true
    if (favorited.length <= 5 && liked) {
      // display full heart
      return <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} />
    } else if (favorited.length <= 5 && !liked) {
      // display empty heart
      return <FavoriteBorderIcon onClick={handleClick} />
      // if favorite is 6 or longer(should never get longer than 6)
    } else {
      // check if curent pokemon is in team and liked is true
      if (favorited.includes(pokemon) && liked) {
        // display clickable full heart
        return <FavoriteIcon sx={{ color: red[500] }} onClick={handleClick} />
        // check if curent pokemon is in team and liked is false
      } else if (favorited.includes(pokemon) && !liked) {
        // display empty heart
        return <FavoriteBorderIcon onClick={handleClick} />
        // else
      } else {
        // display heart in 'disabled' color and remove onClick
        return <FavoriteBorderIcon color="disabled" />
        //
      }
    }
  }

  return (
    <Box className="banner">
      <Typography
        sx={{ fontWeight: 'bold' }}
      >
        #{id}
      </Typography>
      {disableFavoriteBtn()}
    </Box>
  );
}

export default Banner;