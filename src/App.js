import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './components/style.css'
import Construction from './components/Construction';

function App() {
  return (
    <div className='container'>
      <Header />
      <Construction />
      <Footer />
    </div>
    
  )
}

export default App;
