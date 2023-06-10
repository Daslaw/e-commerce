import {useState} from 'react'
import { data } from './data'
import React from 'react'
import logo from "./images/logo.svg"
import avatar from "./images/image-avatar.png"
import {FaCartPlus} from "react-icons/fa"
import {FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa"
import minus from "./images/icon-minus.svg"
import plus from "./images/icon-plus.svg"


// Header Section
function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-bottom border-2 max-w-7xl max-auto">
        <div className='flex items-center justify-start gap-4'>
          <img src={logo} alt="logo" />
          <nav className='hidden'>
            <ul className='flex items-center justify-start gap-4'>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className='flex items-center justify-start gap-4'>
            <li>
                <button>
                  <FaCartPlus className='text-2xl text-slate-600'/>
                </button>
              </li>
            <li><img src={avatar} alt="avatar" className='w-12'/></li>
          </ul>
        </div>
    </header>
    </>
  )
}

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0)

  const [amount, setAmount] = useState(0)
  const [slideIndex, setSlideIndex] = useState(1)
  
  const {mainImage} = products[value]

  const nextSlide = () => {
      if (slideIndex !== products.length) {
        setSlideIndex(slideIndex + 1)
    } else if (slideIndex === products.length){
        setSlideIndex(1)
  };
}
  const previousSlide = () =>{
    if (slideIndex !== 1)  {
          setSlideIndex(slideIndex - 1)
      } else if (slideIndex === 1){
        setSlideIndex (products.length)
      }
  }
  
  const HandleMinus = () => {
    setAmount(amount - 1)
    if (amount <= 0 ) setAmount (0)
  };
  
  return (
    <>  
      <Header/>
      <section className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10'>
        <article>
       <div className='relative'>
         <img src={mainImage} alt="" className='w-full lg:rounded-2xl'/>
         <ul>
          <li><button onClick={previousSlide} className='bg-white rounded-full p-5 shadow left-0 absolute left-4 top-1/2 -translate-y-1/2'><FaChevronCircleLeft /></button></li>
          <li><button onClick={nextSlide} className='bg-white rounded-full absolute p-5 shadow right-4 top-1/2 -translate-y-1/2'><FaChevronCircleRight /></button></li>
         </ul>
       </div>
        <ul className='hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5'>
          {products.map((item, index) =>( 
              <li key={item.id} onClick={() => setValue(index)} className={`${index === value && "border-2 border-orange-400 opacity-80"} border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.thumbnail} alt="" className='w-20 rounded-xl' />
              </li>
        ))}
        </ul>
        </article>
          {/* The text Area  */}
        <article className='px-8 pb-10'>
          <h2 className='bg-slate-100 py-1 px2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10'>Sneaker Company</h2>
          <h1 className='text-slate-900 mb-10 font-bold text-3xl lg:text-4xl'>Fall Limited Edition Sneakers</h1>
          <p className='text-slate-60 mb-10 loading-relaxed'>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
            <div className='flex flex-wrap items-center justify-between'>
              <ul className='flex items-center gap-5'>
                <li className='text-slate-900 font-bold'>$125.00</li>
                <li className='bg-orange-100 py-1 px2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10'>50%</li>
              </ul>
              <p className='text-slate-600 text-sm'><s>$250.00</s></p>
            </div>
            <div className='mt-10'>
              <ul className='flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow'>
                <li onClick={HandleMinus} className='cursor-pointer' >
                  <img src={minus} alt="" />
                </li>
                <li>{amount}</li>
                <li onClick={() => setAmount(amount + 1)} className='cursor-pointer'><img src={plus} alt="" /></li>
              </ul>
            <div className='text-center mx-auto'>
                <button className='flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 w-full text-white font-bold rounded-lg shadow mt-5 w-full'>
                <FaCartPlus/> Add to cart
              </button>
            </div>
            </div>
        </article>
      </section>
    </>
  );
}
export default App;
