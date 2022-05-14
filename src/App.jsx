import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Show from "./components/Show/Show";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Frame from "./components/Frame/Frame";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/frame/:group" element={<Frame />} />
        <Route path="/show/:group" element={<Show />} />
        <Route path="/show/leaderBoard" element={<LeaderBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
