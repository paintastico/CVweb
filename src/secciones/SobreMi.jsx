import React from 'react';
import '../index.css';



function SobreMi() {
  return (
    <section 
      id="sobre-mi" 
      className="w-full flex flex-col md:flex-row justify-center items-center text-center text-white marginTopBotom-5"
    >
       
      <div className= "flex-shrink-0 mb-6 md:mb-0 md:mr-8" >
        <img 
            src="src/img/images.jpg" 
            alt="Felipe"
            className="transition-all duration-300 hover:scale-110 hover:brightness-125 marginTopBotom-5"
            />
            
      </div>
      <div className= "w-full max-w-4xl p-5" >
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 p-10 text-left ">Sobre mi</h1>
        <p className='text-2xl text-left'> Soy Analista Programador con experiencia en desarrollo de software, enfocado en: </p> <br/>
        <ul className ="list-disc list-inside text-left">
            <li><strong>Frontend:</strong> Maquetación web con HTML5, CSS3, Bootstrap y lógica en JavaScript.</li>
            <li><strong>Bases de datos: </strong>Diseño y optimización de consultas SQL, manejo de datos relacionales.</li>                        
            <li><strong>Android (Java):</strong> Desarrollo de aplicaciones móviles nativas.</li>
        </ul>
        <br/>
        

        <p className='text-xl text-left'>Mi formación en <a href = "#id-marketing"> <strong>Ingeniería en Marketing</strong></a> me permite crear soluciones técnicas que no solo son funcionales, sino también intuitivas y alineadas con las necesidades del usuario.</p>  

      </div>
    </section>
  );
}

export default SobreMi;