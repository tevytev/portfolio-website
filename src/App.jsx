import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Portfolio from "./routes/Portfolio/Portfolio";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
