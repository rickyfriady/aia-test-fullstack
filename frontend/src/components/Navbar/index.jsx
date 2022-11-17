import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Login'];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "transparent", boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: {xs : 'flex'}, justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, justifyContent: 'space-between', alignItems: 'center'}}>
          <Box
          component="img"
          sx={{
            maxHeight: {xs: 40},
            maxWidth: { xs: 70 },
            }}
          alt="The house from the offer."
          src="https://logos-world.net/wp-content/uploads/2021/03/Flickr-Logo.png"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              pl: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Search
          </Typography>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, justifyContent: 'space-between', alignItems: 'center'}}>   
          <Box
          component="img"
          sx={{
            maxHeight: {xs: 30},
            maxWidth: { xs: 50 },
            }}
          alt="The house from the offer."
          src="https://logos-world.net/wp-content/uploads/2021/03/Flickr-Logo.png"
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Search
          </Typography>
          </Box>


          <Box sx={{ position: '' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, 
              color: 'inherit', }}>
                <AccountCircle sx={{}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar