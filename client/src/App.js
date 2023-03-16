import { Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar"
import Home from "./Home"
import User from "./User"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/Home" element={<Home/>} /> 
      <Route exact path="/User" element={<User/>} /> 
    </Routes>
    </>
  );
}

export default App;
