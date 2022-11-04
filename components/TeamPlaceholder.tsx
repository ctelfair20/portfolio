import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import styles from '../styles/pokepage.module.css';

// This component displays the tooltip '?' for the pokemon team
const TeamPlaceholder = () => {
  return (
    <Tooltip
      title="favorite a pokemon to add it to your team"
      disableFocusListener
    >
      <HelpIcon />
    </Tooltip>
  )
}

export default TeamPlaceholder;