import { usePokeContext } from '../pages/Pokepage/PokeContext';
import styles from '../styles/Home.module.css';

const PokeImage = () => {

  const { sprites, name } = usePokeContext();
  const frontArtwork = sprites?.other['official-artwork']['front_default'];

  return (
    <img src={frontArtwork} alt={name} className={styles['pokemon-imag']} />
  );
}

export default PokeImage;