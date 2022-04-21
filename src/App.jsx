import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/UserContext";

import Login from "./components/Login/Login";
import Setting from "./components/Setting/Setting";
import Show from "./components/Show/Show";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
function App() {
  const [userInfo, setUserInfo] = useState({});
  const providerValue = useMemo(
    () => ({ userInfo, setUserInfo }),
    [userInfo, setUserInfo]
  );

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/show" element={<Show />} />
          <Route path="/show/leaderBoard" element={<LeaderBoard />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
