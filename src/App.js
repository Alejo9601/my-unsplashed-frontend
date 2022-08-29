import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import "./styles/app.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Home />
      </div>
    </UserProvider>
  );
}

export default App;
