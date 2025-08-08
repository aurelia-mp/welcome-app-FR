import React from 'react'
import { Link } from 'react-router-dom'

const Water = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/_MG_3823-ZoomCascada3000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>EAU</p>
        <p className='parrafo'>Gestion de l'eau:</p>
        <p className='parrafo'>Toutes nos installations sanitaires sont perfomantes et les douches remplacent les baignoires dans toutes nos chambres (à l'exception de deux suites)</p>
        <p className='parrafo'>Un système goutte à goutte permet l'arrosage des plantes sans pertes d'eau</p>
        <p className='parrafo'>L'eau de pluie est stockée puis libérée progressivement vers le système pluvial de façon différée, afin de ne pas contribuer aux inondations, fréquentes à Buenos Aires</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Water