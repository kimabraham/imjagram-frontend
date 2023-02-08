import { Routes, Route } from "react-router-dom";
import Home from "routes/home";
import Contents from "routes/contents";
import Join from "routes/accounts/join";
import Footer from "routes/layout/footer";
import { BrowserRouter } from "react-router-dom";
import "styles/global.css";
import LoginError from "routes/accounts/loginerror";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-100 flex flex-col h-[100vh] justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/signup" element={<Join />} />
          <Route path="/accounts/password" element={<LoginError />} />
          <Route path="/contents" element={<Contents />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
