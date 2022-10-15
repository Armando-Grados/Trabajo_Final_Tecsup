import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const HomeCamisetas = () => {
  //URL BASE PRINCIPAL
  //produccion
  const URL_BASE = 'http://4.228.185.92:8080/api/';
  //local
  //const URL_BASE = 'https://localhost:44356/api/';

  const CONTROLLER_LIST_CAMISETA = 'producto/getbyall/2/1';

  const [ mini_prod1, setMiniProd1 ] = useState([]);

  useEffect(()=>{
    const obtenerListaProd1 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_CAMISETA;
      const result = await axios.get(url);
      setMiniProd1(result.data)
    }
    obtenerListaProd1()
  },[]);

    return(
        <section className="section-body">
            <div className="container-galeria container-galeria--elements">
                <div className="container-galeria elements elements--cards">
                {
                    mini_prod1.map(prod=>{
                    return(
                        <>
                            <div className="cards">
                                <div key={prod.idproducto}>
                                    <img src={prod.Ruta_Imagen_Pequeno}/>
                                    <a href="" className="description">{prod.Nombre}</a>
                                    <button className="button button--secondary button--card">Agregar al Carrito</button>
                                    <button className="button button--primary button--card">Vista</button>
                                </div>
                            </div>  
                        </>
                        )
                        })
                }        
                </div>
            </div>
        </section>
    )
}


export default HomeCamisetas;