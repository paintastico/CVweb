import React from 'react';
import '../index.css';
import '../constantes/index.js';
import { useState } from 'react';
import { formacionItems } from '../constantes/index.js';

function Formacion() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    
    return (
        <section 
        id="formación" 
        className="mx-auto w-full flex flex-col md:flex-row justify-center items-center text-center text-white 
        marginTopBotom-5 p-4 md:p-6 lg:p-8 xl:p-10"
        style={{
          width: 'fit-content',
          borderRadius: '12px', // Más redondeado que 'rounded-lg'
          border: '3px solid #7DD3FC'
        }}>


            <div className="w-full max-w-4xl overflow-y-auto justify-left mx-auto marginTopBotom-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 m-4 md:m-8 lg:m-12">Formación</h1>
                
                <div className="formacionContent text-xl text-left sm:text-lg md:text-2xl rounded-2xl">
                    <ul className="space-y-2">
                        {formacionItems.map((item, idx) => (
                            <li className="List-Item" key={idx}>
                                <h3 
                                    className="clickable transition-all text-Destacado duration-300 transform hover:scale-110 hover:text-blue-600"
                                    onClick={() => handleClick(idx)}
                                    style={{ 
                                        cursor: "pointer", 
                                        color: "#7DD3FC",
                                        display: "inline-block",
                                        
                                        paddingLeft: "2rem",
                                        marginBottom: "0.3rem",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    <strong>{item.title}</strong>
                                </h3>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out`}
                                    style={{
                                        maxHeight: openIndex === idx ? `${item.description.length * 0.6}px` : "10px",
                                        opacity: openIndex === idx ? 1 : 0,
                                        paddingLeft: "2rem",
                                        marginBottom: "1rem"
                                    }}
                                >
                                    <p className="pt-2">
                                        {item.description}<br/>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Formacion;