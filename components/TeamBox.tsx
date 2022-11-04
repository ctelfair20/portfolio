import { Box } from "@mui/system";
import TeamPlaceholder from "./TeamPlaceholder";
import TeamCard from "./TeamCard";
import { pokeInterface } from '../pages/Pokepage/interface';

interface PropsI {
  favorited: Array<pokeInterface>
}

// This component displays the team members or a tooltip to add members if the team is not full
const TeamBox = ({ favorited }: PropsI) => {

  const generateTeam = () => {
    // if favorites is empty
    if (favorited.length === 0) {
      // display a placeholder '?' and tool tip
      return (
        <TeamPlaceholder />
      )
    }
    // map over favorites
    const team = favorited.map((pokemon, i) => {
      // return a teamCard for each element passing the element to the card so that the card knows what to display
      return <TeamCard key={'Fav' + i} pokemon={pokemon} />
      //
    })
    // check if favorited is not full
    if (favorited.length < 6) {
      team.push(
        <TeamPlaceholder key="placeholder" />
      )
    }
    return team;
  }

  return (
    <Box
      className="team-box"
    >
      {generateTeam()}
    </Box >
  );
}

export default TeamBox;