import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import '../node_modules/react-toastify/dist/ReactToastify.css'
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-black">


      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
