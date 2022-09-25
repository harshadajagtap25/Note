import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Allnotes from "./Components/Allnotes";
// import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Home />} />
        <Route path="/note" element={<Allnotes />} />
      </Routes>
    </div>
  );
}

export default App;
