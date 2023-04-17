
import Header from "./header";
import "../styles/App.css";
import Home from './toiec/home.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase.js"
function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
