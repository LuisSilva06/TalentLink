import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import Modal from '../components/Modal'
import SearchBar from '../components/SearchBar'
import profissionaisData from '../data/profissionais.json'

export default function Home(){
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({area:'', localizacao:''})
  const [open, setOpen] = useState(null)
  const [list, setList] = useState([])

  useEffect(()=> setList(profissionaisData), [])

  const filtered = list.filter(p=>{
    const q = query.toLowerCase()
    if(filters.area && p.area !== filters.area) return false
    if(filters.localizacao && p.localizacao !== filters.localizacao) return false
    if(!q) return true
    return (
      p.nome.toLowerCase().includes(q) ||
      p.habilidadesTecnicas.join(' ').toLowerCase().includes(q) ||
      p.localizacao.toLowerCase().includes(q)
    )
  })

  return (
    <div>
      <SearchBar q={query} setQ={setQuery} filters={filters} setFilters={setFilters} />
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filtered.map(p => <Card key={p.Id} p={p} onOpen={setOpen} />)}
      </div>

      {open && <Modal profissional={open} onClose={()=>setOpen(null)} />}
    </div>
  )
}
