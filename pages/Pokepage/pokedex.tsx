import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import PokeProvider from "./PokeContext";
import PokeCard from "../../components/Pokepage/PokeCard";
import Pokeball from "../../components/Pokepage/Pokeball";
import PokeInfoCard from "../../components/Pokepage/PokeInfoCard";
import TeamBox from "../../components/Pokepage/TeamBox";
import Image from "next/image";
import pokemonLogo from '../../public/Pokemon-logo.jpg';
import { pokeInterface } from './interface';
import styles from '../../styles/Pokedex.module.css';

const PokePage = () => {
  const [favorited, setFavorited] = useState(Array<pokeInterface>);
  const [liked, setLiked] = useState(false);

  return (
    <PokeProvider>
      <Box className={styles['pokemon-page']}>
        <Box id={styles["logo-box"]}>
          <Image id={styles.logo} src={pokemonLogo} priority={true}
            alt="pokemon-logo"
          />
        </Box>

        <Container className={styles.container}>
          <Grid
            container
            justifyContent="space-evenly"
            alignItems="center"
          >
            {/* This grid item holds the pokemon's image, name and basic info */}
            <Grid
              item
              sm={4}
              md={4}
              lg={5}
            >
              <PokeCard favorited={favorited} setFavorited={setFavorited} liked={liked} setLiked={setLiked} />
            </Grid>

            {/* This grid item holds the pokeball button*/}
            <Grid
              item
              sm={2}
              md={1}
              lg={2}
              justifyContent="center"
            >
              <Pokeball setLiked={setLiked} favorited={favorited} liked={liked} />
            </Grid>

            {/* This grid item holds the pokemon's advance info*/}
            <Grid
              item
              sm={4}
              md={4}
              lg={5}
            >
              <PokeInfoCard />
            </Grid>
          </Grid>
          <TeamBox favorited={favorited} />
        </Container>

      </Box>
    </PokeProvider>
  );
};

export default PokePage;