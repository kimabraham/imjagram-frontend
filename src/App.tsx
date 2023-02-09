import { Outlet } from "react-router-dom";
import Footer from "routes/layout/footer";
import "styles/global.css";

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
