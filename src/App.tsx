import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Ask from "./pages/Ask";
import Book from "./pages/Book";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/book" element={<Book />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
