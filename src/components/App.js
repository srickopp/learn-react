import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import List from './List';
import Top from './Top';
import Main from './Main';

function App() {
  return (
    <div>      
      <Header list="3 Terbaik"/>
      <Top />
      <Main menuMakanan={
        [
          {
              nama: "Mie Ayam",
              harga: 10000
          },
          {
              nama: "Bakso Pedas poll",
              harga: 20000
          },
          {
              nama: "Mie Ayam Bakso",
              harga: 20000
          },
          {
              nama: "Soto",
              harga: 10000
          },
      ]
      } />
      {/* <List />         */}
      <Footer namanya="Makanan Nusantara" tahun="2019"/>
    </div>
  );
}

export default App;
