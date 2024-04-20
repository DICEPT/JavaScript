import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SectionPage from "./pages/SectionPage1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/section1" element={<SectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
