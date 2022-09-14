import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImagesProvider } from "./context/ImagesContext";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import "./styles/app.css";
import "./styles/generics.css";

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
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
        </ImagesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
