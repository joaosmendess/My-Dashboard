"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import ClientesComponent from '../../components/AvaliacoesList';
import AvaliacoesComponent from '../../components/Clientes';
import { FaUsers } from "react-icons/fa6";
import { MdAssessment } from "react-icons/md";
import AsideComponent from '@/components/Aside';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('clientes');

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex min-h-screen bg-white-100 ">
        <aside className="w-64 bg-white-100 p-5 border-solid border-2 ">
          <AsideComponent/>
          <div className='my-4'>

          
          <button onClick={() => setActiveTab('avaliacoes')}  className="transition-colors duration-300 py-2 px-4 w-full text-left hover:bg-gray-200">
         <div className='flex flex-row gap-3 font-semibold '><FaUsers size={20}/> Clientes  </div>
          </button>
          <button onClick={() => setActiveTab('clientes')}  className="transition-colors duration-300 py-2 px-4 w-full text-left hover:bg-gray-200">
          <div className='flex flex-row gap-3 font-semibold' > <MdAssessment size={20}  /> Avaliações   </div>
            
          </button>
          </div>
        </aside>
        <main className="flex-grow p-5 bg-gray-100">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Dashboard
        </h1>
          {activeTab === 'clientes' && <ClientesComponent />}
          {activeTab === 'avaliacoes' && <AvaliacoesComponent />}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
