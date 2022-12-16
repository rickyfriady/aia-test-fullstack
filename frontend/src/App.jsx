import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import "./App.css";
import Jumbotron from "./components/Jumbotron";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

// theme.typography.h2 = {
//   [theme.breakpoints.up("md")]: {
//     fontSize: "20px",
//   },
// };

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Jumbotron />
        {/* <AppBarNavigasi /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
