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

  console.log("aqui");
  console.log(mini_prod1);

    return(
        <section className="section-body">
            <div className="container-galeria container-galeria--elements">
                <div className="container-galeria elements elements--cards">
                    <div className="cards">
                        {/* <img src={require("../../assets/camiseta/adidas-mens-spain-2022-23-authentic-home-jersey-power-red-navy-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button> */}
                       
                    </div>
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
                        


                    {/* <div className="cards">
                        <img src={require("../../assets/camiseta/puma-mens-borussia-dortmund-2022-23-away-jersey-cyber-black-asphalt-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/joma-mens-cruz-azul-2022-23-away-jersey-royal-blue-white-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/adidas-kids-germany-2022-23-home-jersey-white-black-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/adidas-mens-germany-2022-23-away-jersey-black-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/adidas-kids-germany-2022-23-away-jersey-black-bronze-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/adidas-mens-spain-2022-23-authentic-home-jersey-power-red-navy-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/charly-mens-atlas-2022-23-long-sleeve-bi-campeon-jersey-black-red-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/puma-mens-senegal-2022-23-home-jersey-white-red-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div>
                    <div className="cards">
                        <img src={require("../../assets/camiseta/nike-mens-saudi-arabia-2023-23-away-jersey-malachite-white-front_300x.avif")} alt="" id=""/>
                        <a href="/">Camiseta adidas España 2022/23<br/>Authentic Primera Equipación Hombre<br/>Rojo/Azul Marino<br/> USD 150</a>
                        <button className="button button--secondary button--card">Agregar al Carrito</button>
                        <button className="button button--primary button--card">Vista</button>
                    </div> */}
                </div>
            </div>
        </section>
    )
}


export default HomeCamisetas;