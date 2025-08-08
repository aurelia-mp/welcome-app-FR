import React from 'react'

const Map = () => {
  return (
    <div>
        <h2 className='tituloMap'>Les recommandations de notre équipe</h2>

        <div className='mapa'>
          <a href="https://www.google.com/maps/d/u/0/edit?mid=1nnBsL8jvSiZbWANTmIWOOm8raCYCCPU&usp=sharing" rel="noreferrer" target='_blank'>
            <img src="/fotos/mapaNegro.jpg" alt="Mapa Buenos Aires" />
          </a>
        </div>

        <p className='textoMapa'>Nous avons choisi pour vous les meilleurs bars, cafés, restaurants et boutiques autour de l'hôtel.<br></br> Cliquez sur le plan pour les découvrir</p>

  
    </div>
  )
}

export default Map