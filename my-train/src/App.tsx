import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
        </Routes>
      </>
    </Router>

  )
}

export default App;