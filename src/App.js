import React from 'react';
//Import Component
import MenuUtama from './Page/MenuUtama';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';

function App() {
  return (
    <div>
      <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
      <Footer />
    </div>
  );
}

let Header = () => {
  return (
    <div>
      <h1>Ini halaman untuk Header</h1>
    </div>
  )
}

let Footer = () => {
  return (
    <div>
      <h3>Ini halaman untuk Footer</h3>
    </div>
  )
}

export default App;
