import Home from "../../pages/Home/Home";
import Footer from "../../components/Footer/Footer";
import Singin from "../../pages/Sing-in/Singin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

function RouterArgentBank() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sing-in" element={<Singin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouterArgentBank;
