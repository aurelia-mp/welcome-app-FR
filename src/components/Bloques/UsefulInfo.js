import React from 'react'

const UsefulInfo = () => {
  return (
    <>
    <div className='contenedorGrande'>
      <div className='contenedorGeneral'>

        <div className='in'>
          <p className='palabraIn'>IN</p>
          <img src="/icons/flechaIzquierda.png" alt="flechaIzquierda" />
          <p className='tresPM'>15H</p>
        </div>

        <div className='in'>
          <p className='palabraIn'>OUT</p>
          <img src="/icons/flechaDerecha.png" alt="flechaDerecha" />
          <p className='tresPM'>12H</p>
        </div>

        <div className='frase'>
          <h3 className='fraseIt'>Nous ne voulons pas que vous partiez. Mais comme dit le proverbe italien: “cosa bella passa è non dura” (les meilleurs choses ont une fin).</h3>
        </div>

        <div className="lineaIzquierda">
          <img src="/icons/line.png" alt="linea" />
        </div>


      <div className='bloquesInternos'>
        <img src="/icons/smoking.png" alt="no fumador" />
          <div className='texto'>
            <p>Hôtel non fumeur</p>
            <p>Balcons inclus</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/wifi.png" alt="wifi" />
          <div className='texto'>
            <p>Mot de passe wifi</p>
            <p>bonpland</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/bicycle.png" alt="bicicletas" />
          <div className='texto'>
            <p>s'il vous plaît,</p>
            <p>empruntez-moi!</p>
          </div>
      </div>

      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/piscina.png" alt="pileta" />
          <div className='texto'>
            <p>tous les jours</p>
            <p>de 9h a 21h</p>
            <p>8ème étage</p>
          </div>
      </div>

      <div>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/aspiradora.png" alt="aspiradora" />
          <div className='texto'>
            <p>nos femmes de chambres passeront pour </p>
            <p>le ménage quotidien entre 9h et 16h</p>
          </div>
      </div>


      <div className='lineaDerecha'>
          <img src="/icons/line.png" alt="linea" />
      </div>

      <div className='bloquesInternos'>
        <img src="/icons/valuables.png" alt="valuables" />
          <div className='texto'>
            <p>merci d'utiliser le coffre-fort</p>
          </div>
      </div>

        <div className="lineaIzquierda">
          <img src="/icons/line.png" alt="linea" />
        </div>

    
      <div className='bloquesInternos'>
        <img src="/icons/gym.png" alt="valuables" />
          <div className='texto'>
            <p>Gymnase: Tous les jours</p>
            <p>de a 9 a 21hs</p>
          </div>
      </div>


      </div>

      <img className='imagenHome' src="/fotos/1604 - Guest Bikes - Garden - DSC_0299 - 1000px.jpg" alt="bicletas para huéspedes" />
    
      <div className='in'>
          <p className='palabraBike'>VÉLOS</p>
          <p className='textoBike'>Nos vélos sont à votre disposition pour visiter Buenos Aires. Empruntez-les à la Réception, sans réservation préalable.</p>
      </div>


    </div>
    </>
  )
}

export default UsefulInfo
