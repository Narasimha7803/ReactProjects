import  React  from 'react'
import './App.css'
import Products1 from './components/Products1'
import Productsprofile1 from './components/Productsprofile1'
import Userproductprovider1 from './context/Userproductprovider1'
function App() {
  

  return (
    
     <Userproductprovider1>
      <Products1/>
      <Productsprofile1/>
     </Userproductprovider1>
    
  )
}

export default App
