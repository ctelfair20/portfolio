import { Box, Paper } from '@mui/material';
import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeNameAndDescription = () => {
  // Typescript won't let me add these varibles together like normal strings -- add " || '' " to variables -- look for css  to do this easier
  const { id, name, types, height, weight } = usePokeContext();
  const typeFirstLetterCaps = types?.[0].type?.name?.[0].toUpperCase();
  // const typeArray = types
  const remainingLettersInName = name?.slice(1);
  const remainingLettersInType = types?.[0].type?.name?.slice(1);
  const nameFirstLetterCaps = name?.[0].toUpperCase();
  const possName = `${nameFirstLetterCaps}${remainingLettersInName}`

  // converts data from api to an array of types
  const typesArray = () => {
    return types?.map((typeObj) => {
      return typeObj.type.name;
    });
  }

  // converts array of types into an array of box components
  const typeBoxes = typesArray()?.map((type, i) => {
    const id = 'typ' + i;
    const typWithCapsFirstLetter = type[0].toUpperCase() + type.slice(1);
    return <Box key={id}>{typWithCapsFirstLetter}</Box>
  })

  return (
    <Box className="below-image">
      <Paper elevation={3} className="pokemon-name">{possName}</Paper>
      <Box className="pokemon-description-type">
        <Paper elevation={3} className="pokemon-description">
          <span className="title">Description:</span>
          <Box id="description">
            <Box>
              Ht: {height}
            </Box>
            <Box>
              Wt: {weight}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={3} className="pokemon-types">
          <span className='title'>Types:</span>
          <Box id="types">
            {typeBoxes}
            {/* {`${typeFirstLetterCaps}${remainingLettersInType}`} */}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PokeNameAndDescription;