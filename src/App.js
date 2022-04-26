import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [error, setError] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AnimatedRoutes error={error} setError={setError} />
        {error && <Error />}
      </div>
    </BrowserRouter>
  );
}

export default App;
