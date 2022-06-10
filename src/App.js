import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Page/Shared/Header';
import Contract from './Page/Contract/Contract';
import ForeStar from './Page/ProjectDetails/ForeStar';
import Unload from './Page/ProjectDetails/Unload';
import SmileSharp from './Page/ProjectDetails/SmileSharp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/forestar' element={<ForeStar></ForeStar>}></Route>
        <Route path='/unload' element={<Unload></Unload>}></Route>
        <Route path='/smilesharp' element={<SmileSharp></SmileSharp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
