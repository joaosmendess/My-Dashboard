"use client";
import React, { useState, useEffect } from 'react';
import Clientes from './Clientes';
import ClientesComponent from './Clientes';

interface Avaliacao {
  id: number;
  id_servico: number;
  classificacao: number;
  comentario: string;
  
}

const AvaliacoesList = () => {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch('https://opine-back.onrender.com/api/avaliacoes');
        const data = await response.json();
        setAvaliacoes(data);
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
      }
    };

    fetchAvaliacoes();
  }, []);

  return (
    <div className="space-y-4" >
      {avaliacoes.map(avaliacao => (
        <div key={avaliacao.id} className="bg-white p-4 shadow rounded-lg">
          <div className="font-bold text-lg">Avaliação #{avaliacao.id}</div>
          <p>Classificação: {avaliacao.classificacao} / 5</p>
          <p>Comentário: {avaliacao.comentario}</p>
         


      
        </div>
      ))}
    </div>
  );
};

export default AvaliacoesList;