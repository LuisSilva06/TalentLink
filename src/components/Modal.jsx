import React from 'react'

export default function Modal({profissional, onClose}){
  if(!profissional) return null
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/40' onClick={onClose} />
      <div className='relative max-w-3xl w-full p-6 bg-white dark:bg-[#071024] rounded-xl shadow-lg'>
        <button className='absolute top-4 right-4' onClick={onClose}>Fechar</button>
        <div className='flex gap-6'>
          <img src={profissional.foto} className='w-28 h-28 rounded-full object-cover' alt=''/>
          <div>
            <h2 className='text-2xl font-bold'>{profissional.nome}</h2>
            <p className='text-sm text-gray-600 dark:text-gray-300'>{profissional.cargo} • {profissional.localizacao}</p>
            <p className='mt-3'>{profissional.resumo}</p>
            <div className='mt-4'>
              <strong>Habilidades:</strong>
              <div className='flex gap-2 mt-2 flex-wrap'>
                {profissional.habilidadesTecnicas.map((h,i)=>(<span key={i} className='text-xs px-2 py-1 rounded-full border'>{h}</span>))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold'>Experiências</h4>
            {profissional.experiencias.map((ex,i)=>(
              <div key={i} className='mt-2'>
                <div className='text-sm font-medium'>{ex.cargo} — {ex.empresa}</div>
                <div className='text-xs text-gray-500'>{ex.inicio} → {ex.fim || 'Presente'}</div>
                <div className='text-sm'>{ex.descricao}</div>
              </div>
            ))}
          </div>
          <div>
            <h4 className='font-semibold'>Formação & Idiomas</h4>
            {profissional.formacao.map((f,i)=>(
              <div key={i} className='mt-2 text-sm'><strong>{f.curso}</strong> — {f.instituicao} ({f.ano})</div>
            ))}
            <div className='mt-3'>
              <strong>Idiomas</strong>
              <ul className='list-disc ml-5 mt-2 text-sm'>
                {profissional.idiomas.map((l,i)=>(<li key={i}>{l.idioma} — {l.nivel}</li>))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-6 flex gap-3'>
          <button onClick={()=>alert('Recomendação enviada!')} className='px-4 py-2 rounded bg-gradient-to-br from-purple-500 to-teal-400 text-white'>Recomendar profissional</button>
          <button onClick={()=>alert('Mensagem enviada!')} className='px-4 py-2 rounded border'>Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}
