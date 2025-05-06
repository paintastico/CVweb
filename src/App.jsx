import React from 'react'
import Navbar from './secciones/Navbar'
import Inicio from './secciones/Inicio'
import SobreMi from './secciones/SobreMi'
import Tecnologias from './secciones/Tecnologias'
import Formacion from './secciones/Formacion'
import Contacto from './secciones/Contacto'

const App = () => {
  return (
    <div className="min-h-screen">
      <main className="w-full h-screen mx-auto ">        
        <Navbar/>
        <Inicio/>
        <SobreMi/>
        <Tecnologias/>
        <Formacion/>
        <Contacto/>
        
        
      </main>
    </div>
  )
}
export default App