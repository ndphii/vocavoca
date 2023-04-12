
import Header from '../components/header.js';
import "../styles/App.css";
import Home from './toiec/home.js';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase.js"
function App() {
  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `KH`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
