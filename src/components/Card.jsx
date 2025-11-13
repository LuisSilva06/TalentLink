import React from 'react'

export default function Card({p, onOpen}){
  return (
    <div className='bg-white/80 dark:bg-white/5 backdrop-blur rounded-xl p-4 shadow hover:scale-[1.01] transition cursor-pointer' onClick={()=>onOpen(p)}>
      <div className='flex gap-4 items-center'>
        <img src={p.foto} alt='' className='w-16 h-16 rounded-full object-cover' />
        <div>
          <h3 className='font-semibold'>{p.nome}</h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>{p.cargo} — {p.localizacao}</p>
          <div className='flex gap-2 mt-2 flex-wrap'>
            {p.habilidadesTecnicas.slice(0,3).map((h,i)=>(
              <span key={i} className='text-xs px-2 py-1 rounded-full border'>{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
