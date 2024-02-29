import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Fish from "./components/pages/Fish";
import Bugs from "./components/pages/Bugs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fish" exact element={<Fish />} />
        <Route path="/bugs" exact element={<Bugs />} />
      </Routes>
    </Router>
  );
}

export default App;
