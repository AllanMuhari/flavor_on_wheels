/** @format */

import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

const Nav = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best
          <span className='font-bold'>Eat</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 focus:outline-none w-full'
          type='text'
          placeholder='Search foods'
        />
      </div>
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>
      {/* mobile menu */}
      <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      {/* side drawer */}
      <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'>
        <AiOutlineClose
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Orders
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
