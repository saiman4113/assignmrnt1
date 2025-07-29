import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/author_profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdvancedExample from "./components/pagination";
function App() {
  return (
    
    <BrowserRouter>
    
      <div className="App">
        

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
