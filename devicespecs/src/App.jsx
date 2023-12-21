import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import "./App.css";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
