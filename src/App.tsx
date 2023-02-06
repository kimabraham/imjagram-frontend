import { Routes, Route } from "react-router-dom";
import Home from "routes/home";
import Contents from "routes/contents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contents" element={<Contents />} />
    </Routes>
  );
}

export default App;
