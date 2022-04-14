import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Dessert from "./pages/Dessert";
import Cuisine from "./pages/Cuisine";
import All from "./pages/All";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/all" element={<All />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
