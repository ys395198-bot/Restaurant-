import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Log_in from "./pages/Log_in.js";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Log_in" element={<Log_in/>} />

        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;