import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ScrollUp from "./Components/Scroll/ScrollUp";
import Services from "./Components/Services/Services";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
      <Home />
      <Services />
      <Footer />
      <ScrollUp />
    </motion.div>
  );
}

export default App;
