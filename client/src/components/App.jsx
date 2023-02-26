import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import CatForm from "./CatForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catform" element={<CatForm />} />
      </Routes>
    </div>
  );
}

export default App;
