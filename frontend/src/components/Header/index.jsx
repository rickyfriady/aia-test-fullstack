
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';

const Header = () => {
  return (
    <Box 
            sx={{
              display: 'flex',
              height: '100px',
              marginTop: '100px',
              gap: '10px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '50px',
              color : 'white'
              }}
         >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  )
}

export default Header