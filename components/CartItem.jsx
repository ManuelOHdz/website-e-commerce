import React from 'react'

import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
      {/*Empieza Imagen */ }
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <img src="/Case-spiderman.webp"/>
      </div>
      {/*Termina Imagen */ }
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* TITULO DE PRODUCTO */}
          <div className='text-lg md:text-2xl font-semibold text-black/[0.8]'>
            Spider-man Edition
          </div>

          {/* SUBTITULO DE PRODUCTO */}
          <div className='text-sm md:text-md font-medium text-black/[0.5] block md:hidden'>
            Case 3in1
          </div>

          {/* PRECIO DE PRODUCTO */}
          <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            $320.00
          </div>

          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
              <div className='flex items-center gap-1'>
                <div className='font-semibold'>Color:</div>
                <select className='hover:text-black'>
                  <option value="1">BLANCO</option>
                  <option value="2">ROJO</option>
                  <option value="3">AZUL</option>
                  <option value="4">NEGRO</option>
                  <option value="5">VERDE</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
              <div className='flex items-center gap-1'>
                <div className='font-semibold'>Cantidad:</div>
                <select className='hover:text-black'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <RiDeleteBin6Line className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem