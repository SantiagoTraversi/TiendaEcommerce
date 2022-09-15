import React, { useEffect, useState } from 'react'
import bombon from '../img/bombon.jpg'
import tableta from '../img/tableta.jpg'
import alfajoresImg from '../img/alfajores.jpg'
import { Link } from 'react-router-dom'

const CategoriasContainer = () => {

    return (
        <div className="container min-vh-100">
            <div className="col-sm-12 mt-5">
                <div className="row p-5">
                    <div className="col-sm-4 mt-2 mb-2">

                        <Link to='/categorias/bombones' className='text-decoration-none'>
                            <div className="card shadow bg-dark carta-categoria">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div>
                                                <img src={bombon} className='img-fluid' alt="bombones" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h3 className='text-light'>Bombones</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="col-sm-4 mt-2 mb-2">
                        <Link to='/categorias/tabletas' className='text-decoration-none'>

                            <div className="card shadow bg-dark carta-categoria">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div>
                                                <img src={tableta} className='img-fluid' alt="tabletas" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h3 className='text-light'>Tabletas</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4 mt-2 mb-2">
                        <Link to='/categorias/alfajores' className='text-decoration-none'>

                            <div className="card shadow bg-dark carta-categoria">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div>
                                                <img src={alfajoresImg} className='img-fluid' alt="alfajores" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h3 className='text-light'>Alfajores</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriasContainer