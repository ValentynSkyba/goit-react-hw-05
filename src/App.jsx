import { RiH1 } from "react-icons/ri";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
