import "./App.css";
import ContainerApp from "./components/ContainerApp";
import Sibar from "./components/Sidebar";
function App() {
  return (
    <div className="container-app">
      <Sibar />
      <ContainerApp/>
    </div>
  );
}

export default App;
