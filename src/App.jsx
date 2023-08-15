import { useEffect, useState } from 'react'
import Accordion from './Components/Accordion'
import ThemeSwitch from './Components/ThemeSwitch'
import image from "./assets/Group-12682.png"

function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("dark")) || false);

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark])


  return (
    <main className={` ${dark && "dark bg-slate-800"} min-h-screen w-full py-10 lg:py-0 flex flex-col items-center justify-center`}>
      <div className='text-start w-full px-6 lg:px-14 container mx-auto'>
        <ThemeSwitch setDark={setDark} dark={dark} />
      </div>
      <div className=' relative container w-full h-full grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-14'>
        <div className='space-y-7 order-2 lg:order-1'>
          <div className='bg-purple-100 dark:bg-slate-600 p-2 rounded dark:text-white text-purple-500 w-fit'>
            <p>We Are Leading Software Company</p>
          </div>
          <h1 className='text-4xl dark:text-white font-semibold'>We Provide <span className='bg-gradient-to-r from-purple-700 via-purple-600 to-red-500 text-transparent bg-clip-text'>Best Solutions</span> </h1>
          <p className='text-lg dark:text-white'> Our web design & development company leverages large knowledge base to deliver best-in-domain solutions that meet needs, business and budget expectations of our customers. Our experts offer advanced technology solutions that add real-value to their business. It is simple— we understand that our success is measured by the success of our esteemed clients.</p>
          <Accordion />
        </div>
        <div className='w-full order-1 lg:order-2'>
          <img className='w-full' src={image} alt="" />
        </div>
      </div>
    </main>
  )
}

export default App
