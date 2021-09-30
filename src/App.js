import Routes from "./components/nav/Routes";
import { AuthProvider } from "./context/AuthContext";
import "./sass/custom.scss";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
