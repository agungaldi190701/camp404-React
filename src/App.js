import logo from './logo.svg';
import './App.css';
import ManajemenBuku from './components/ManajemenBuku';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuLain from './components/MenuLain';
import { useState } from 'react';


function App() {

  const [buku, setBuku] = useState([
    {
      _id: 1,
      judul: 'Buku 1',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun: 2021
    },
    {
      _id: 2,
      judul: 'Buku 2',
      pengarang: 'Pengarang 2',
      penerbit: 'Penerbit 2',
      tahun: 2022
    },
  ])

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='manajemen-buku' element={<ManajemenBuku bookList={buku} />} />
          <Route path='menu-lain' element={<MenuLain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
