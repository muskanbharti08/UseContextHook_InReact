import React, { useContext } from 'react'
import { Muskan } from '../App'
import { Muskan2,Muskan3 } from '../App';


export default function E() {

                let userage = useContext(Muskan);
                let usernsme  = useContext(Muskan2)
                let userclass  = useContext(Muskan3)

  return (
    <div>E    {userage}   {usernsme}  {userclass} </div> 
  )
}
