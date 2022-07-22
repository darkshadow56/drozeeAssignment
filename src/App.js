import "./App.css";
import HomeButtons from "./Components/HomeButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <div className="App">
      <HomeButtons />
      <LandingPage />
    </div>
  );
}

export default App;
