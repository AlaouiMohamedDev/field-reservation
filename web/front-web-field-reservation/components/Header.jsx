import React from 'react'

export default function Header() {

    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }


  return (
    <div>
        <div className="flex  justify-between px-5 shadow-sm relative py-6 text-gray-600">
            <div className="">
               <img src="./images/header-1.png" className="w-[6.5rem] absolute top-0 "/>
            </div>
            <div className="flex items-center justify-between w-1/2">
                <a href="" className="className text-md font-semibold px-5 text-main">Welcome</a>
                <a href="" className="className text-md font-semibold px-5">Fields</a>
                <a href="" className="className text-md font-semibold px-5">About Us</a>
                <a href="" className="className text-md font-semibold px-5">Contact Us</a>
                <i onClick={ModalAuth}  class='bx bx-menu-alt-right  text-3xl  text-main'></i>
            </div>
        </div>
        

    </div>
  )
}
