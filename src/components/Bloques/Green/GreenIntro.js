import React from 'react'
import { Link } from 'react-router-dom'

const GreenIntro = () => {
  return (
    <>
    <div className='fotoPresentacionFood'>
        <img src="/fotos/green2.jpg" alt="flechaDerecha" />
    </div>

    <div className='iconoTriangulo'>
        <Link to="/green/water" className="linkFood">
            <img src="/icons/trianguloIzq.png" alt="izquierda" />
        </Link>
        <Link to="/green/energy" className="linkFood">
            <img src="/icons/trianguloDer.png" alt="derecha" />
        </Link>
    </div>

    <div className='texto1'>
        <p className='parrafo'>HÔTEL ECO-RESPONSABLE</p>
        <p className='parrafo'>INTRO. Palo Santo es le premier hôtel urbain écologique d’Argentine.
        Construit selon les normes LEED (Leadership in Energy and Environmental Design), Palo Santo est un hôtel éco-responsable.</p>
    </div>

    <div className='lineaDerechaSinContenedor'>
        <img src="/icons/line.png" alt="flechaDerecha" />
    </div>
    </>
  )
}

export default GreenIntro