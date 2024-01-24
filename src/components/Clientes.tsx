"use client";
import React, { useState, useEffect } from 'react';

interface Clientes {
  id: number;
  nome: string;
  veiculo: string;
  numero: string;
}

const ClientesComponent = () => {
  const [clientes, setClientes] = useState<Clientes[]>([]);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch('https://opine-back.onrender.com/api/clientes');
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchAvaliacoes();
  }, []);

  return (
    <div className="space-y-4">
      {clientes.map(clientes => (
        <div key={clientes.id} className="bg-white p-4 shadow rounded-lg">
          <div className="font-bold text-lg">Cliente: {clientes.nome} </div>
          <p>nome: {clientes.nome} </p>
          <p>veiculo: {clientes.veiculo}</p>
          <p>numero: {clientes.numero}</p>

        </div>
      ))}
    </div>
  );
};

export default ClientesComponent;