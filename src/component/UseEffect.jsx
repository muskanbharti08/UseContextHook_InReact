import React, { useEffect, useState } from 'react'

export default function UseEffect() {

                let [count1, setCount1]  = useState(0);
                let [count2, setcount2]  =  useState(10);
               

                let clk1 = () =>{
                        setCount1(count1+5);
                }


                let clk2 = () =>{
                        setcount2(--count2);
                }

                let fun1 = () =>{
                        console.log("i am use effect")
                }
                useEffect(fun1);


  return (
<>

        <div className="">
                <h1 className=""> {count1}</h1>
                <button onClick={clk1} className="">increment</button>
        </div>

        <div className="">
                <h1 className="">{count2}</h1>
                <button onClick={clk2} className="">decrement</button>
        </div>


</>

  )
}
