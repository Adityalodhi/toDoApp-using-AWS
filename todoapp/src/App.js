import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Account } from './Components/Account';
import Login from './Components/Login';
import Register from './Components/Register';
import Status from './Components/Status';
import Add from './Components/Add';

function App() {
  return (
    <Account>
      <Status />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
      
    </Account>
  );
}

export default App;
