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
import Header from "./components/shared/Header";

const materialTheme = materialExtendTheme(commonTheme);
const theme = extendTheme(commonTheme);

const FullPage = ({ name, page }) => {
  return (
    <>
      <Header currentPage={name} />
      <div className="main-body">{page}</div>
    </>
  );
};

function App() {
  return (
    <MaterialCssVarsProvider
      defaultMode="system"
      theme={{ [MATERIAL_THEME_ID]: materialTheme }}
    >
      <JoyCssVarsProvider defaultMode="system" theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Routes>
            <Route
              path="/"
              element={<FullPage name="" page={<AboutPage />} />}
            />
            <Route
              path="chess"
              element={<FullPage name="chess" page={<ChessPage />} />}
            />
            <Route
              path="portfolio"
              element={<FullPage name="portfolio" page={<PortfolioPage />} />}
            />
            <Route
              path="updates"
              element={<FullPage name="updates" page={<UpdatesPage />} />}
            />
            <Route
              path="/*"
              element={<FullPage name="404" page={<NotFoundPage />} />}
            />
          </Routes>
        </Router>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}

export default App;
