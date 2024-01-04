import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
export default function App() {
  return (
    <>
      <Router>
        <div className="app">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies simplified={false} />}
              />
              <Route path="/exchanges" element={<Exchanges />} />

              {/* The following div should be replaced with a Route component */}
              <Route
                path="/news"
                element={
                  <div className="p-4 sm:ml-64">
                    <div className="p-4 border-gray-200 rounded-lg dark:border-gray-700">
                      <p className="font-bold text-2xl text-gray-900 mb-4">
                        Top crypto News
                      </p>
                      <News simplified={false} />
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
          <div className="footer"></div>
        </div>
      </Router>
    </>
  );
}
