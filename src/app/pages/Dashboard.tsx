"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import ClientesComponent from '../../components/AvaliacoesList';
import AvaliacoesComponent from '../../components/Clientes';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('clientes');

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white p-5">
          <button onClick={() => setActiveTab('avaliacoes')}  className="transition-colors duration-300 py-2 px-4 w-full text-left hover:bg-gray-200">
            Clientes
          </button>
          <button onClick={() => setActiveTab('clientes')}  className="transition-colors duration-300 py-2 px-4 w-full text-left hover:bg-gray-200">
            Avaliações
          </button>
        </aside>
        <main className="flex-grow p-5">
          {activeTab === 'clientes' && <ClientesComponent />}
          {activeTab === 'avaliacoes' && <AvaliacoesComponent />}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
