
import Header from "./views/header";
import Home_screes from "./views/home_screens";
import Toeic from "./views/toiec/view_list_toeic";
import ViewListVocaToeic from "./views/toiec/view_listvoca_toeic";
import Test from "./components/test";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Test" element={<Test />} exact></Route>
        <Route path="/" element={<Home_screes />} exact></Route>
        <Route path="/Toeic" element={<Toeic />} exact></Route>
        <Route path="/Toeic/:key/:ID" element={<ViewListVocaToeic />} />
      </Routes>
    </>
  );
}

export default App;
