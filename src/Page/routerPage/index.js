import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "../../components/forgotPassword";
import IndexPage from "../indexPage";
import GetStarted from "../getStarted";
import Login from "../login";
import Research from "../../components/research";
import Profile from "../../components/profile";
import Peaple from "../../components/people";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/index-page" element={<IndexPage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/peaple" element={<Peaple />} />

        {/* <Redirect to="/GetStarted" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
