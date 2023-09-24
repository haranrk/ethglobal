import LoginView from "./views/LoginView";
import { useClient } from "./hooks/useClient";
import HomeView from "./views/HomeView";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Header from "./components/Header";
import Navbar from "./components/Layout";

TimeAgo.addDefaultLocale(en);

function App() {
  const client = useClient();

  return (
    <div>
      <Navbar></Navbar>
      <Header>Test content</Header>
      {client ? <HomeView /> : <LoginView />}
    </div>
  )
}

export default App;
