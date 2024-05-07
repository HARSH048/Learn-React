import Profile from "./components/Profie";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return <UserContextProvider>
    <Login />
    <Profile />
  </UserContextProvider>;
}

export default App;
