import React, { createContext } from 'react'
import A from './component/A'




export let Muskan  = createContext();
export let Muskan2 = createContext();

export let Muskan3  = createContext();

export default function App() {


  return (
<>
 <Muskan.Provider value={45}>
      <Muskan2.Provider  value = "rrrfsdkhf">
      <Muskan3.Provider value     = {10}>  
        <A/>
      </Muskan3.Provider>
      </Muskan2.Provider>
 </Muskan.Provider>
</>
     )

  }
