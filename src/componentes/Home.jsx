import React from 'react'

const Home = () => {
  return (
    <div className="portada-principal ">
      <div className="container medio">

        <h1 className='text-light fw-bold display-3'>Tienda Virtual: <span className='color-texto'>Tienda de Dulces</span></h1>
        {/* <p className='text-light'>Ingrese en "productos" para ver más!</p> */}
      </div>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L48,250.7C96,213,192,139,288,138.7C384,139,480,213,576,218.7C672,224,768,160,864,149.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default Home