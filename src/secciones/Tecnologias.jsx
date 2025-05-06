import React from 'react';
import '../index.css';
import '../constantes/index.js'


const getAssetPath = (path) => {
    return import.meta.env.PROD 
      ? `/CVweb${path}`
      : `src${path}`;
};



function Tecnologias() {
  return (
    <section 
      id="Tecnologias" 
      className="mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
      marginTopBotom-5 bg-Aoscuro p-4 md:p-6 lg:p-8 xl:p-10"
      style={{
        width: 'fit-content',
        borderRadius: '12px', // Más redondeado que 'rounded-lg'
        border: '3px solid #7DD3FC'
      }}>
    
       
      <div className= "w-full max-w-4xl  p-5 overflow-y-auto " >
        
            <h1 className="text-5xl md:text-7xl font-bold mb-4 p-10 ">Tecnologias y herramientas</h1>
            <p className='text-xl text-center sm:text-lg md:text-2xl'> Estas son algunas de las tecnologias con las que he trabajado y he hecho uso a lo largo de mi formacion y carrera profesional o en proyectos personales.</p>
            <div class="cajas">
                    <div className="cajagrupo">
                        <div className="caja hover:bg-opacity-90 hover:[transform:scale(1.2)] transition-transform duration-200">
                            <p>HTML 5</p>  
                            <img src={getAssetPath("/img/ico/html5.svg")} alt="HTML5" />
                                            
                        </div>
                        <div className="caja">
                            <p>CSS</p>  
                            <img src={getAssetPath("/img/ico/css.svg")} alt="CSS" />
                                            
                        </div>
                        <div className="caja">
                            <p>MySQL</p>  
                            <img src={getAssetPath("/img/ico/mysql.svg")} alt="MySQL" />          
                        </div>
                        <div className="caja">
                            <p>Javascript</p>  
                            <img src={getAssetPath("/img/ico/js.svg")} alt="JS" />          
                        </div>
                        <div className="caja">
                            <p>Github</p>  
                            <img src={getAssetPath("/img/ico/github.svg")} alt="GitHub" />         
                        </div>
                        <div className="caja">
                            <p>Postman</p>  
                            <img src={getAssetPath("/img/ico/postman.svg")} alt="Postman" />        
                        </div>
                        <div className="caja">
                            <p>Visual Studio</p>  
                            <img src={getAssetPath("/img/ico/visualstudio.svg")} alt="VS" />          
                        </div>
                        <div className="caja">
                            <p>Photoshop</p>  
                            <img src={getAssetPath("/img/ico/ps.svg")} alt="Photoshop" />         
                        </div>
                        <div className="caja">
                            <p>Blender</p>  
                            <img src={getAssetPath("/img/ico/blender_icon_512x512.png")} alt="Blender" />          
                        </div>
                        <div className="caja">
                            <p>Office</p>  
                            <img src={getAssetPath("/img/ico/Office.png")} alt="Office" />         
                        </div>

            </div>
        </div>

        
        
        

      </div>
    </section>
  );
}

export default Tecnologias;