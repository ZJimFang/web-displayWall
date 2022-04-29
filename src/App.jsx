import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/public/UserContext";

import Login from "./components/Login/Login";
import Show from "./components/Show/Show";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Frame from "./components/Frame/Frame";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const value = useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo, setUserInfo]
  );

  return (
    <Router>
      <UserContext.Provider value={value}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/frame/:group" element={<Frame />} />
          <Route path="/show/:group" element={<Show />} />
          <Route path="/show/leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
