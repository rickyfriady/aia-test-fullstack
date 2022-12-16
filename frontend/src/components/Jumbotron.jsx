import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const Jumbotron = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9yZXN0fHx8fHx8MTY3MTIwNDA1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        objectFit: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Typography variant="h2" color="initial">
            Search Flickr
          </Typography>
          <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", justifyContent: "center", width: { xs: "100%", sm: "80%" }, height: "100%" }}>
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Google Maps" inputProps={{ "aria-label": "search google maps" }} />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Jumbotron;
