import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { extendTheme } from "@mui/joy/styles";

import { commonTheme } from "./constants/shared";
import AboutPage from "./components/pages/about/AboutPage";
import ChessPage from "./components/pages/chess/ChessPage";
import PortfolioPage from "./components/pages/portfolio/PortfolioPage";
import UpdatesPage from "./components/pages/updates/UpdatesPage";
import NotFoundPage from "./components/pages/notfound/NotFoundPage";

const materialTheme = materialExtendTheme(commonTheme);
const theme = extendTheme(commonTheme);
function App() {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="chess" element={<ChessPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="updates" element={<UpdatesPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}

export default App;
