import './App.css';

import {CTA, Navbar, Brand} from './components'
import {Header, Footer, WhatGPT3, Possibility, Blog, Features} from './containers'
function App() {
  return (
    <div className="App">
        <div className='gradient_bg'> 
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
