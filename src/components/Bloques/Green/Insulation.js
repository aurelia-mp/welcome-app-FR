import React from 'react'
import { Link } from 'react-router-dom'

const Insulation = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/terrace.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/materials" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/CO2" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ISOLATION</p>
        <p className='parrafo'>Renforcement des isolations thermiques et accoustiques:</p>
        <p className='parrafo'>Toutes nos fênêtres sont équipée d'un double vitrage hermétique</p>
        <p className='parrafo'>Sol, plafonds et murs disposent d'une isolation accoustique et thermique</p>
        <p className='parrafo'>Les jardins verticaux et plantes grimpantes fournissent une isolation naturelle supplémentaire</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Insulation