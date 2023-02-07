import { Routes, Route } from "react-router-dom";
import Home from "routes/home";
import Contents from "routes/contents";
import Signup from "routes/accounts/join";
import Footer from "routes/layout/footer";
import { BrowserRouter } from "react-router-dom";
import "styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-neutral-100 flex flex-col h-[100vh] justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/signup" element={<Signup />} />
          <Route path="/contents" element={<Contents />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
