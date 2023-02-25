import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home/Home.jsx";
import CatForm from "./CatForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catform" element={<CatForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
