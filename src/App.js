import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
