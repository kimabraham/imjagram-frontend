import { Routes, Route } from "react-router-dom";
import Home from "routes/home";
import Contents from "routes/contents";
import Signup from "routes/accounts/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accounts/signup" element={<Signup />} />
      <Route path="/contents" element={<Contents />} />
    </Routes>
  );
}

export default App;
