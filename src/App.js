import { ImagesProvider } from "./context/ImagesContext";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import "./styles/app.css";

function App() {
  return (
    <UserProvider>
      <ImagesProvider>
        <div className="App">
          <Home />
        </div>
      </ImagesProvider>
    </UserProvider>
  );
}

export default App;
