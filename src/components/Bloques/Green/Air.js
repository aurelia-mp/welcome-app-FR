import React from 'react'
import { Link } from 'react-router-dom'

const Air = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/deluxe.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/operations" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>QUALITÉ DE L'AIR</p>
        <p className='parrafo'>Améliorer la qualité de l'air que nous respirons:</p>
        <p className='parrafo'>L'air extérieur entrant dans le système d'air conditionné et chauffage est filtré, dosé et régulé.</p>
        <p className='parrafo'>Ainsi, l'air à l'intérieur de l'hôtel est toujours pur, tout en optimisant la consommation électrique.</p>
        <p className='parrafo'>Nous privilégions le papier peint à la peinture afin d'éviter la présence de produits chimiques, solvants notamment, dans l'air.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Air