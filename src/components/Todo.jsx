import React, { useState } from 'react'

export default function Todo() {
    const [values, setValues]=useState('')
    const [items, setItems]=useState([])

// submit
    const handleSubmit=(e)=>{
        e.preventDefault()
    if(values.trim()){
     const newItem={
        id:Date.now() + Math.random(),
        name:values,
        txt:'Hello',
        message:'Welcome to my website.',
        bgChange:false,
        textChange:false
      }
      setItems(items=>[...items, newItem])
      setValues('')
        }
    }
// reset
    const resetEl = () => {
  setItems([])
};

const bgColor=(id)=>{
  setItems(items=>
    items?.map(e=>
      e.id===id?{...e,bgChange:!e.bgChange}:e
    )
  )
}
const textColor=(id)=>{
  const newItems=items?.map((e=>(
    e.id===id?{...e,textChange:!e.textChange}:e
  )))
  setItems(newItems)
}

  return (
    <div className='flex flex-col justify-center items-center gap-5 pt-50 mb-10'>
    <form className='flex items-center gap-3' onSubmit={handleSubmit}>
      <input className='shadow-lg ring-2 ring-[#24615b] outline-0 rounded-lg w-120 h-10 pl-3 focus:shadow-[#0e3d38]' placeholder='Write your name' value={values} onChange={(e)=>setValues(e.target.value)} type="text" />
      <button disabled={!values} className='disabled:bg-green-200 disabled:cursor-no-drop bg-green-500 hover:bg-green-800 transition-all duration-300 w-15 h-15 rounded-lg cursor-pointer text-white' onClick={handleSubmit}>show</button>
      <button className='bg-red-500 hover:bg-red-800 transition-all duration-300 w-15 h-15 rounded-lg cursor-pointer text-white' onClick={resetEl}>reaet</button>
   </form>
{/* show */}
   {items.map((item)=>(
  <div key={item.id} className={`todo flex justify-around items-center gap-[50px] w-[40%] py-2 rounded-lg hover:scale-[1.02] transition-scale duration-[.3s,.3s] ease-in-out ${item.bgChange ? 'bg-blue-500' : 'bg-emerald-800'}`}>
    <div className={`flex gap-2 w-100 text-[20px] ${item.textChange ? 'text-black' : 'text-white'}`}>
        {item.txt}
         <p className={`font-bold ${item.textChange ?'text-white':'text-black'}`}>{item.name}</p>
        {item.message}
    </div>
    <div className='flex gap-5'>
      <button className='bg-green-500 hover:bg-green-700 transition-all duration-300 w-12 h-10 rounded-lg cursor-pointer text-white text-[12px]' onClick={() => bgColor(item.id)}>Bg Change</button>
      <button className='bg-red-500 hover:bg-red-800 transition-all duration-300 w-12 h-10 rounded-lg cursor-pointer text-white text-[12px]' onClick={() => textColor(item.id)}>TXT Change</button>
    </div>
  </div>
))}
    </div>
  )
}