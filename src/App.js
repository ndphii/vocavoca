
import Header from "./views/header";
import Home_screes from "./views/home_screens";
import Home from "./views/toiec/home";
import Toeic from "./views/view_list_toeic";
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home_screes />} exact></Route>
        <Route path="/Home_list_toeic" element={<Home />}></Route>
        <Route path="/Toeic" element={<Toeic />}></Route>
      </Routes>
    </>
  );
}

export default App;