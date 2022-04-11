import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
