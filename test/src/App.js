
import "./App.css";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
import About from "./component/About";
import Contactus from "./component/Contactus";
import Belog from "./component/Belog";
import NoteState from "./component/Context/NoteState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetaFeaching from "./component/DetaFeaching";

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <DetaFeaching />
        <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contect" element={<Contactus />} />
      <Route path="/belog" element={<Belog />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
    </NoteState>
    </>

  );
}

export default App;
