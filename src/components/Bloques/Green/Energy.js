import React from 'react'
import { Link } from 'react-router-dom'

const Energy = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/Pasillos1-IMG_1948-50-1000px.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>ENERGIE</p>
        <p className='parrafo'>Emploi rationnel de l’énergie:</p>
        <p className='parrafo'>Toutes nos ampoules LED et nos appareils électriques et les ascenseurs sont à basse consommation</p>
        <p className='parrafo'>Les détecteurs de mouvement des les parties communes permettent d'éviter les gaspillages</p>
        <p className='parrafo'>Nos climatiseurs sont les plus efficients du marché (système VRV - Volume Réfrigérant Variable - moteurs Inverter</p>
        <p className='parrafo'>L'isolation thermique est optimisée dans tout l'hôtel</p>
        <p className='parrafo'>Toutes les chambres sont équipées d'un interrupteur central activé via la carte magnétique d'accès</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Energy