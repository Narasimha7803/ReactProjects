import React from 'react'
import {useState } from 'react'
import Userproducts from './Userproducts';

const Userproductprovider1 = ({children})=> {

    const [user, setuser] = useState();


return (

    <><Userproducts.Provider value={{user, setuser}}>
    {children}
</Userproducts.Provider></>
  

)
}

export default Userproductprovider1
