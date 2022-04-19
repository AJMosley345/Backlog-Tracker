import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AddGameButton(){
  return (
      <Button component={ Link } variant="contained" color="primary">
        Add Game
      </Button>
  );
}
