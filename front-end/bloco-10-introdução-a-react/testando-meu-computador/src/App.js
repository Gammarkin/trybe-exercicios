import React from 'react';
import './App.css';
import NameAndDes from './Component';
import Header from './Header';
import Content from './Content'
import Footer from './Footer';

function App() {
  return (<div>
    <Header />
    <NameAndDes />
    <Content />
    <Footer />
  </div>
  );
}

export default App;