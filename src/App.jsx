import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import Applynow from "./Pages/Applynow.jsx";
import FranchiseDetail from "./Pages/FranchiseDetail.jsx";
import TermsandConditions from "./Legal/TermsandConditions.jsx";
import Privacypolicy from "./Legal/Privacypolicy.jsx";
import Contactus from "./Pages/Contactus.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/apply" element={<Applynow />} />
        <Route path="/franchise" element={<FranchiseDetail />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/terms-and-conditions" element={<TermsandConditions />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
