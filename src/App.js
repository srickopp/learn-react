import React from 'react';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuUtama from './Page/MenuUtama';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';


function App() {
  return (
    <div>
      <Header></Header>
        <MenuUtama></MenuUtama>        
        <MenuMakanan></MenuMakanan>
        <MenuTentangKami></MenuTentangKami>
        <MenuKontak></MenuKontak>
      <Footer></Footer>
    </div>
  );
}

export default App;
