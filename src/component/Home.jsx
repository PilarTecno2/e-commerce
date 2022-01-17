import React from 'react'
import { Products } from './Products'

export const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="background" height={"550px"}/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className='container'>
                            <h5 className="card-title display-3 fw-bolder mb-0">Nuevo Año</h5>
                            <p className="card-text lead fs-2">Mira los nuevos productos que tenemos para ti.</p>
                        </div>
                    </div> 
            </div>
            <Products/>
        </div>
    )
}
