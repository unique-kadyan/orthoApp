import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Video from "./components/Video";
import HomeVideo from "./assets/Videos/HomeVideo.mp4";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {(location.pathname === "/" ||
        location.pathname.toLowerCase() === "/orthoapp") && (
        <Video src={HomeVideo} />
      )}

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
