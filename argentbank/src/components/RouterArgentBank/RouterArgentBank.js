import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

function RouterArgentBank() {
  return (
    <div>
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default RouterArgentBank;
