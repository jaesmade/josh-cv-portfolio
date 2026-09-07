import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proj1 from "./pages/proj1";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proj1" element={<Proj1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
