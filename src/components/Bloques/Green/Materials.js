import React from 'react'
import { Link } from 'react-router-dom'

const Materials = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/materials.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/insulation" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>MATERIAUX</p>
        <p className='parrafo'>Materiaux durables et certifiés:</p>
        <p className='parrafo'>Nos parquets sont certifiés FSC (bois issu de forêts gérées de façon responsable)</p>
        <p className='parrafo'>Nous privilégions les matériaux de grande qualité et durabilité: marbre, acier, pierre, ciment, verre.</p>
        <p className='parrafo'>Nos tissus sont fabriqués dans en cotton naturel</p>
        <p className='parrafo'>Le linge usagé est recyclé ou donné à des ONG</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default Materials