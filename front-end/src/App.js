import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useState, useEffect } from "react"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify"
import '../node_modules/react-toastify/dist/ReactToastify.css'
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./assets/app.css"
function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {

      setloading(false)
    }, 2000)
  }, [])
  return (
    <div>
      <div>

        {
          loading ? (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>

          ) : (
            < div className="bg-white dark:bg-black" >


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
            </div >
          )
        }
      </div>
    </div>



  );
}

export default App;
