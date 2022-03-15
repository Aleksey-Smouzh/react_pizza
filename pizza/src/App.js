import Header from "./components/Header/Header";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/Navbar/All/All";
import Vegan from "./components/Navbar/Vegan/Vegan";
import Closed from "./components/Navbar/Closed/Closed";
import Grill from "./components/Navbar/Grill/Grill";
import Meat from "./components/Navbar/Meat/Meat";
import Spicy from "./components/Navbar/Spicy/Spicy";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        
        <Routes>
          <Route path="/all" element={<All />}>
            {" "}
          </Route>
          <Route path="/closed" element={<Closed />}>
            {" "}
          </Route>
          <Route path="/grill" element={<Grill />}>
            {" "}
          </Route>
          <Route path="/meat" element={<Meat />}>
            {" "}
          </Route>
          <Route path="/spicy" element={<Spicy />}>
            {" "}
          </Route>
          <Route path="/vegan" element={<Vegan />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
