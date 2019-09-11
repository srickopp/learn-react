import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import List from './List';
import Form from './Form';
import Top from './Top';
// import Main from './Main';

function App() {
  return (
    <div>      
      <Header list="3 Terbaik"/>      
      <Top />
      <Form />
      {/* <Main />
      <List />         */}
      <Footer namanya="Makanan Nusantara" tahun="2019"/>
    </div>
  );
}

export default App;
