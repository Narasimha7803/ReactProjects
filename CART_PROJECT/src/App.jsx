import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from './Components/Header';
import Products from './Components/Products';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import Usercontextprovider from './Context/Usercontextprovider';
function App() {
  

  return (
    <>
     <Usercontextprovider>
     <Header/>
     <Products/>
     </Usercontextprovider>
     
      <Footer/>
    </>
  )
}

export default App
