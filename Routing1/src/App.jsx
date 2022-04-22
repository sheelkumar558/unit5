import { Home } from "./components/Home";
import { About } from "./components/About";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<UserList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
