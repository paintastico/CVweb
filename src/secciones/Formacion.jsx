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
        <section id="formación" className=" w-full  h-screen flex justify-center items-center text-center 
        text-white  bg-gradient-to-br from-black to-Aoscuro ">


            <div className="w-full max-w-4xl p-5 overflow-y-auto  justify-center md:w-1/2 mx-auto marginTopBotom-10 bg-Verde">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 m-4 md:m-8 lg:m-12 ">Formación</h1>
                
                <div className="formacionContent text-xl text-center sm:text-lg md:text-2xl rounded-2xl ">
                    <ul>
                        {formacionItems.map((item, idx) => (
                            <li className="List-Item" key={idx}>
                                <h3 
                                    className="clickable"
                                    onClick={() => handleClick(idx)}
                                    style={{ 
                                        cursor: "pointer", 
                                        color: "#0066cc", 
                                        display: "inline-block", 
                                        marginBottom: "0.3rem" 
                                    }}
                                >
                                    <strong>{item.title}</strong>
                                </h3>
                                <p 
                                    className={`detalles ${openIndex === idx ? "visible" : "hidden"}`}
                                    style={{
                                        maxHeight: openIndex === idx ? "500px" : "0",
                                        overflow: "hidden",
                                        opacity: openIndex === idx ? 1 : 0,
                                        transition: "max-height 1s ease, opacity 0.3s ease",
                                        marginTop: 0,
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Formacion;