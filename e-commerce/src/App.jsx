import React from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
 
  const welcomeMessage = "This is best e-commerce website"
  
  

  return (
    <>
    <Header message = {welcomeMessage} />
    <Navbar/>
       

       
    </>
  )
}

export default App
