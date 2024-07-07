import { Button } from '@mui/base/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
     <Stack spacing={2} direction="row">
      <Link to="/feedback">
      <Button>Feedback</Button>
      </Link>
 
      <Button>Button</Button>
      </Stack>
       
    </>
  )
}

export default App
