import React, { useState } from 'react'

export default function Home() {
        let [img, setImg] =useState("pic6.jpeg");
let clk = ()=>{
      if(img=="pic6.jpeg"){
        setImg("pic5.jpeg")
      }
      else{
        setImg("pic6.jpeg")
      }
}

        




  return (
        <> 
    <div>
        <div className="">
                <h1 className="bg-blue-100 p-1 rounded-sm  mb-0.5  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique nisi nesciunt, eligendi aperiam iste maxime. Voluptatum sed minima dolorem.</h1>
                <img src={img} alt="" className=" border-2 border-black rounded-sm -mb-8" />
                <button onClick={clk} className="bg-white px-2 rounded-full ml-32"><i class="fa-regular fa-heart"></i></button>
                </div>
    </div>
    </>
  )
}
