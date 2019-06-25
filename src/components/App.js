import React from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';

function App() {
  return (
    <div>
      <Header />
        <List />        
      <Footer namanya="Makanan Nusantara" tahun="2019"/>
    </div>
  );
}

export default App;
