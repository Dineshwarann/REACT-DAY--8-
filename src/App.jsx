import './App.css'
import React from 'react';
import Cart from './Cart';


function App() {
 

  return (
    <div>
      <div className='titleSection'> 
      <h1 className='title'>S H O P P I N G - C A R T</h1>
      </div>
          {/* Cart component is used */}
          <Cart/>
    </div>
    
  )
}

export default App
