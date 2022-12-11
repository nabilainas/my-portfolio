import React from 'react'

const Informations = () => {
  return (
    <div id="informations" className='text-white font-comfortaa'>
      <div className='grid justify-items-start p-5'>
        <div className='w-96 h-auto bg-slate-400 '>
          <h1 className='p-5 text-black text-center'>Interface graphique python pour capteur ultrasons</h1>
          <p className='p-5'> Ce projet avait pour but de convertir la sortie dans le terminal <strong>arduino</strong> avec des valeurs,
           en interface qui affiche visuellement la distance sous forme de jauge avec <strong>python</strong>,
           afin de faire comprendre la possibilité d'utiliser différents langages de programmation ensemble (python et arduino dans ce projet) à des élèves. </p>
          <img></img>
        </div>
        <div className='w-96 h-96 justify-self-end bg-slate-400'>
          <h1>Projet 2</h1>
          <p>pas d'idées</p>
        </div>
        <div className=' w-96 h-96 bg-slate-400 '>
          <h1>Projet 3</h1>
          <p>pas d'idées</p>
        </div>
      </div>
    </div>

  )
}

export default Informations