import React from 'react'

export default function AddComplex() {

    const nextStep =()=>{
        const first= document.querySelector('.first')
        const last= document.querySelector('.last')

        first.classList.remove('active')
        first.classList.add('bg-white')
        first.classList.add('text-gray-300')

        last.classList.remove('bg-white')
        last.classList.remove('text-gray-300')
        last.classList.add('active')
        
    }
  return (
    <div className="flex flex-col p-7 ">
       <div className=" flex items-center ">
        <div className="rounded py-5 flex justify-center text-sm  px-10 active first ">
                <h1>First step</h1>
            </div>
            <div className="rounded py-5  flex justify-center text-sm px-10 text-gray-300 bg-white last">
                <h1>Final Step</h1>
            </div>
       </div>
        <div className="bg-white grid grid-cols-2 py-5 px-5 gap-5">
            <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add your complex</h1>
            <input name="address"  placeholder = "Address of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="latitude"   placeholder = "Latitude of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="longitude"  placeholder = "Longitude of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="longitude"  placeholder = "Longitude of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />

            <button onClick={nextStep} className="bg-main py-2  text-white text-xs rounded">Valid and go to the next Step</button>
        </div>
    </div>
  )
}
