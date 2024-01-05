import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route , Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Sigup from "./component/Sigup";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Sigup/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
