import React from 'react';
import '../index.css';
import '../constantes/index.js'



function Contacto() {
  return (
    <section 
      id="contacto" 
      className="w-full flex justify-center items-center text-center text-white bg-black-100"
    >
       
      <div className= "w-full max-w-4xl  p-5 overflow-y-auto " >

        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 p-10 ">Contacto</h1>
          <p>Puedes comunicarte conmigo por:</p>
        </div>
        
            
           

      </div>
    </section>
  );
}

export default Contacto;