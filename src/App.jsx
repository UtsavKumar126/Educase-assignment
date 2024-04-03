import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Profile from "./Components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
