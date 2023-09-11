import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import MovieDetails from "./pages/MovieDetails";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/pelicula/:title" element={<MovieDetails />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
