import React from 'react'

export default function SearchBar({q, setQ, filters, setFilters}){
  return (
    <div className='flex gap-2 flex-wrap items-center'>
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder='Buscar por nome, tecnologia ou cidade' className='p-2 rounded-md border w-full md:w-2/3' />
      <select value={filters.area} onChange={e=>setFilters({...filters, area: e.target.value})} className='p-2 rounded-md border'>
        <option value=''>Todas as áreas</option>
        <option>Desenvolvimento</option>
        <option>Design</option>
        <option>Dados</option>
        <option>Marketing</option>
        <option>Produto</option>
      </select>
      <select value={filters.localizacao} onChange={e=>setFilters({...filters, localizacao: e.target.value})} className='p-2 rounded-md border'>
        <option value=''>Todas as cidades</option>
        <option>São Paulo/SP</option>
        <option>Rio de Janeiro/RJ</option>
        <option>Belo Horizonte/MG</option>
        <option>Porto Alegre/RS</option>
      </select>
    </div>
  )
}
