
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header, ImageList, Navbar } from './components';

function App() {
  const url = 'https://cdn.pixabay.com/photo/2018/06/03/21/50/milky-way-3451655__340.jpg'

  return (
    <div className="App">

      <Container maxWidth="xl">
        <Box 
            sx={{
              position: 'relative',
              backgroundImage: `url(${url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '100vh' 
              }}
         >
          <Navbar/>
          <Header/>
          <ImageList/>
         </Box>
      </Container>

    </div>
  );
}

export default App;
