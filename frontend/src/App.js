import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Allnotes from "./Components/Allnotes";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/note" element={<Allnotes />} />
      </Routes>
    </div>
  );
}

export default App;
