import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagesProvider } from "./context/ImagesContext";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ImagesProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </ImagesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
