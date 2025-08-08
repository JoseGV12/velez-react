
import { MiFirstComponent } from './components/MiFirstComponent'
import './App.css'
import { Header } from './components/NavBar/Header'
import { MainContent } from './components/MainContent/MainContent'
import {MainProduct} from './components/ShowProduct/MainProduct'
import { useState } from 'react'
import { CartProvider } from './context/cart'

function validateUrl(url){
      return /^\/product\/\d+$/.test(url);
}

function getI(url){
  return url.split('/').pop();
    
}

function App() {
 const [currentPathName,setCurrentPathName]= useState(window.location.pathname)
 
  return (
    
      <CartProvider>
        <div className="app">
        <Header/>
        {currentPathName === '/' && <MainContent/>}
        {validateUrl(currentPathName) && <MainProduct IdProduct={getI(currentPathName)}/>}

      </div>
      </CartProvider>
    
  )
}

export default App
