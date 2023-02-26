import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import CatForm from "./CatForm";
import { useState } from "react";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="App">
      <Navbar
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
          }
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
        />
        <Route path="/catform" element={<CatForm />} />
      </Routes>
    </div>
  );
}

export default App;
