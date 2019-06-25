import React from 'react';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <h1>Rendering Elements</h1>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h4>Ini Footer</h4>
    </div>
  )
}

export default App;
