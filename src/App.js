import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Header from './Page/Shared/Header';
import Contract from './Page/Contract/Contract';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
      </Routes>

    </div>
  );
}

export default App;
