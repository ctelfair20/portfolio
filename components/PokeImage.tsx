import { usePokeContext } from '../pages/Pokepage/PokeContext';

const PokeImage = () => {

  const { sprites, name } = usePokeContext();
  const frontArtwork = sprites?.other['official-artwork']['front_default'];

  return (
    <img src={frontArtwork} alt={name} className="pokemon-image" />
  );
}

export default PokeImage;