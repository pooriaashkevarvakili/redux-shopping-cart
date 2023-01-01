import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
