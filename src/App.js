import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ScrollUp from "./Components/Scroll/ScrollUp";
import Services from "./Components/Services/Services";
import { motion } from "framer-motion";
import About from "./Components/about/About";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
      <Home />
      <About/>
      <Services />
      <Gallery/>
      <Footer />
      <ScrollUp />
    </motion.div>
  );
}

export default App;
