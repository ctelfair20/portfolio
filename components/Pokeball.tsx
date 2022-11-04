import { useEffect, useState } from 'react';
import axios from 'axios';
import { pokeInterface } from '../pages/Pokepage/interface';
import { useUpdatePokeContext, usePokeContext, usePokedexContext, useUpdatePokedexContext } from '../pages/Pokepage/PokeContext';
import { Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PropsI {
  setLiked: (value: boolean) => void
  liked: boolean
  favorited: Array<pokeInterface>
}

const Pokeball = (({ setLiked, liked, favorited }: PropsI) => {

  const pokemonInfoSetter = useUpdatePokeContext();
  const pokemon = usePokeContext();
  const pokedex = usePokedexContext();
  const pokedexSetter = useUpdatePokedexContext();
  const [forwardArrow, setForwardArrow] = useState(false);
  const [backArrow, setBackArrow] = useState(false);
  const [numberDex, setNumberDex] = useState(Array<number>);

  // How do I get rid of this error on the dependency array??
  // This useEffect fetchs the first pokemon and adds it to the pokedex on page load
  useEffect(() => {
    // why is this firing twice?? -- my app is wrapped in react.strictMode https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
    const updatePokedexOnPageLoad = async () => {
      await fetchPokeInfo();
    }
    updatePokedexOnPageLoad();
  }, []);

  // When your want to see your stateful data in the console, use two useEffects! DO NOT: set and call the same data in one useEffect - This is mixing sync and async calls

  // This useEffect ensures that if a pokemon is in your team, then its favorite button in filled
  useEffect(() => {
    // if current pokemon is in our team
    if (favorited.includes(pokemon)) {
      // set liked to be true
      setLiked(true)
    } else {
      // set liked to false
      setLiked(false)
    }
    // if pokedex is of length 1 OR less, render EITHER arrows
    if (pokedex.length <= 1) {
      setBackArrow(false)
      setForwardArrow(false)
      // if pokemon is the last in the pokedex, render ONLY the back arrow
    } else if (pokemon === pokedex[pokedex.length - 1]) {
      setBackArrow(true)
      setForwardArrow(false)
      // if pokemon is the first in the pokedex, render ONLY the forward arrow
    } else if (pokemon === pokedex[0]) {
      setBackArrow(false)
      setForwardArrow(true)
      // if pokemon is either of the three above, render BOTH arrows
    } else {
      setBackArrow(true)
      setForwardArrow(true)
    }
  }, [pokemon]);

  // When the pokeball is clicked, we fetch another pokemon, add it to the pokedex and unfavorite the new pokemon if it is
  const handleOnClick = async () => {
    // fetch random pokemon from pokeapi
    await fetchPokeInfo();
    // if liked is true for this new pokemon, set liked to false
    if (liked) {
      setLiked(false)
    }
  };

  const handleFowardArrowClick = () => {
    // should go foward by one pokemon
    // find the index of current pokemon in pokedex
    const currentPIndex = pokedex.indexOf(pokemon)
    // access the pokemon after the current pokemon
    const next = pokedex[currentPIndex + 1]
    // if next is exist
    if (next) {
      // set pokemon to be next
      pokemonInfoSetter(next)
    }
  };

  const handleBackArrowClick = () => {
    // should go back by one pokemon
    // find the index of current pokemon in pokedex
    const currentPIndex = pokedex.indexOf(pokemon)
    // access the pokemon before the current pokemon
    const previ = pokedex[currentPIndex - 1]
    // if previ is exist
    if (previ) {
      // set pokemon to be previ
      pokemonInfoSetter(previ)
    }
  };

  const fetchPokeInfo = async () => {
    // fetch pokemon data
    const { data } = await axios.get<pokeInterface>(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    // access fetched pokemon's number
    const { id } = data;
    if (id !== undefined) {
      // check if this pokemon has been fetched before
      if (numberDex.includes(id)) {
        //refetch
        fetchPokeInfo();
      } else {
        setNumberDex([...numberDex, id]);
        pokemonInfoSetter(data);
        pokedexSetter([...pokedex, data]);
      }
    }
  };

  const randomNumber = (): number => {
    return Math.floor(Math.random() * 905) + 1;
  };

  return (
    <>
      <Box className='arrow-box'>
        <Box className='back-arrow-box'>
          {backArrow ? <ArrowBackIosNewIcon onClick={handleBackArrowClick} fontSize='large' /> : ''}
        </Box>
        <Box className='forward-arrow-box'>
          {forwardArrow ? <ArrowForwardIosIcon onClick={handleFowardArrowClick} fontSize='large' /> : ''}
        </Box>
      </Box>
      <button className="pokeball-button" onClick={handleOnClick}>
        <Box className='outter-circle'>
          <Box className='red-half'></Box>
          <Box className='white-half'>
            <Box className='middle-circle'>
              <Box className='inner-circle'></Box>
            </Box>
          </Box>
        </Box>
      </button>
    </>
  );
});

export default Pokeball;