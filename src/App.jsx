import React from 'react'
import Home from './assets/navbarComponets/Home'
import Menu from './assets/navbarComponets/menu'
import Btn from './assets/navbarComponets/cardComponent/btn'
import About from './assets/navbarComponets/cardComponent/about'
import Service from './assets/navbarComponets/cardComponent/service'
import Product from './assets/navbarComponets/cardComponent/product'
import Footer from './assets/navbarComponets/cardComponent/footer'
import './App.css'
function App(){
  return(
    <div>
<Home/>
<Menu/>
<Btn/>
<About/>
<Service/>
<Product/>
<Footer/>
    </div>
  )
}
export default App