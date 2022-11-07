import Image from 'next/image';
import { usePokeContext } from '../pages/Pokepage/PokeContext';
import styles from '../styles/pokepage.module.css';

const PokeImage = () => {

  const { sprites, name } = usePokeContext();
  const frontArtwork = sprites?.other['official-artwork']['front_default'];

  return (
    <Image
      className={styles['pokemon-image']}
      src={frontArtwork}
      alt={name}
      width={200}
      height={200}
      priority
    />
  );
}

export default PokeImage;