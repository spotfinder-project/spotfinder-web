import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DeleteAccount from "./pages/DeleteAccount";
import NoAccount from "./pages/NoAccount";

function App() {
  return (
    <Router>
      <div className="text-center">
        <img
          src="src/assets/spotfinder_logo.png"
          alt="spotfinder_logo"
          className="w-10 h-10 m-auto"
        />
        <div className="text-[#4D63FC] font-semibold text-lg">
          SPOT FINDER 회원 탈퇴
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/no-account" element={<NoAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
