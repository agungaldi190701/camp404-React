import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuLain from './components/MenuLain';
import { useState } from 'react';


function App() {

  const [buku, setBuku] = useState([{
    id: 1,
    judul: 'Buku 1',
    pengarang: 'Pengarang 1',
    penerbit: 'Penerbit 1',
    tahun: 2021
  }])

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='manajemen-buku' element={<ManajemenBuku />} />
          <Route path='menu-lain' element={<MenuLain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
