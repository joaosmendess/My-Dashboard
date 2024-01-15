"use client";
import React, { useState, useEffect } from 'react';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


const AsideComponent: React.FC = () => {
  

  

  return (
    <>
    < div >
       
        <h1  className='text-3xl font-bold dark:text-gray-500 flex flex-row gap-3 my-3'> <TbDeviceDesktopCode /> <a href='https://github.com/joaosmendess' target='_blank' rel='noopener noreferrer'> Joaomsdev </a> </h1>

        
    <div className='flex items-center border-b border-gray-400 py-2 bg-gray-100 '>
        <div className='flex flex-row gap-2 m-1'>
        <CiSearch 
    size={25}
     color='gray'
     
     
     />
        </div>
    
        <input 
        
        type="text"
        placeholder='Search for...'
        className='appearance-none  bg-gray-100 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none  '
        
        />
    </div>
    </div>
    
    </>
  )
};

export default AsideComponent;