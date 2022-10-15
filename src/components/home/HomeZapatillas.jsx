import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const HomeZapatillas = () => {
  //URL BASE PRINCIPAL
  //produccion
  const URL_BASE = 'http://4.228.185.92:8080/api/';
  //local
  //const URL_BASE = 'https://localhost:44356/api/';

  //URL POR ID SERVICIO EN BASE DE DATOS
  const CONTROLLER_PROD1 = 'producto/4';
  const CONTROLLER_PROD2 = 'producto/6';
  const CONTROLLER_PROD3 = 'producto/10';
  const CONTROLLER_PROD4 = 'producto/11';
  const CONTROLLER_PROD5 = 'producto/14';
  const CONTROLLER_PROD6 = 'producto/17';

  // URL LISTADO MODELOS POR PRODUCTO 

  const CONTROLLER_LIST_PROD1 = 'producto/getbyall/1/1';
  const CONTROLLER_LIST_PROD2 = 'producto/getbyall/1/2';
  const CONTROLLER_LIST_PROD3 = 'producto/getbyall/1/3';
  const CONTROLLER_LIST_PROD4 = 'producto/getbyall/1/4';
  const CONTROLLER_LIST_PROD5 = 'producto/getbyall/1/5';
  const CONTROLLER_LIST_PROD6 = 'producto/getbyall/1/6';

  //useEffect
  const [ prod1, setProd1 ] = useState([]);
  const [ prod2, setProd2 ] = useState([]);
  const [ prod3, setProd3 ] = useState([]);
  const [ prod4, setProd4 ] = useState([]);
  const [ prod5, setProd5 ] = useState([]);
  const [ prod6, setProd6 ] = useState([]);

  useEffect(()=>{
    const obtenerProd1 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD1;
      const result = await axios.get(url);
      setProd1(result.data)
    }

    obtenerProd1()
  },[]);

  useEffect(()=>{
    const obtenerProd2 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD2;
      const result = await axios.get(url);
      setProd2(result.data)
    }

    obtenerProd2()
  },[]);

  useEffect(()=>{
    const obtenerProd3 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD3;
      const result = await axios.get(url);
      setProd3(result.data)
    }

    obtenerProd3()
  },[]);

  useEffect(()=>{
    const obtenerProd4 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD4;
      const result = await axios.get(url);
      setProd4(result.data)
    }

    obtenerProd4()
  },[]);

  useEffect(()=>{
    const obtenerProd5 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD5;
      const result = await axios.get(url);
      setProd5(result.data)
    }

    obtenerProd5()
  },[]);

  useEffect(()=>{
    const obtenerProd6 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD6;
      const result = await axios.get(url);
      setProd6(result.data)
    }

    obtenerProd6()
  },[]);

  const [ mini_prod1, setMiniProd1 ] = useState([]);
  const [ mini_prod2, setMiniProd2 ] = useState([]);
  const [ mini_prod3, setMiniProd3 ] = useState([]);
  const [ mini_prod4, setMiniProd4 ] = useState([]);
  const [ mini_prod5, setMiniProd5 ] = useState([]);
  const [ mini_prod6, setMiniProd6 ] = useState([]);

  useEffect(()=>{
    const obtenerListaProd1 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD1;
      const result = await axios.get(url);
      setMiniProd1(result.data)
    }
    obtenerListaProd1()
  },[]);

  useEffect(()=>{
    const obtenerListaProd2 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD2;
      const result = await axios.get(url);
      setMiniProd2(result.data)
    }
    obtenerListaProd2()
  },[]);

  useEffect(()=>{
    const obtenerListaProd3 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD3;
      const result = await axios.get(url);
      setMiniProd3(result.data)
    }
    obtenerListaProd3()
  },[]);

  useEffect(()=>{
    const obtenerListaProd4 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD4;
      const result = await axios.get(url);
      setMiniProd4(result.data)
    }
    obtenerListaProd4()
  },[]);

  useEffect(()=>{
    const obtenerListaProd5 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD5;
      const result = await axios.get(url);
      setMiniProd5(result.data)
    }
    obtenerListaProd5()
  },[]);

  useEffect(()=>{
    const obtenerListaProd6 = async ()=>{
      const url = URL_BASE + CONTROLLER_LIST_PROD6;
      const result = await axios.get(url);
      setMiniProd6(result.data)
    }
    obtenerListaProd6()
  },[]);


  return(
    <section className="section-body">
      <div className="section-body__title">
        <h2>ÚLTIMO CALZADO</h2>
      </div>
      <div className="container-galeria container-galeria--elements">
        <div className="container-galeria elements elements--cards">
          <div className="cards">
            <img src={prod1.Ruta_Imagen_Grande} alt="" id="card_principal"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className ="cards card-view">
            {
                mini_prod1.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen_Pequeno} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={prod2.Ruta_Imagen_Grande} alt="" id="card_principal-2"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item2">
            {
              mini_prod2.map(prod=>{
              return(
                <div key={prod.idproducto}>
                  <img src={ prod.Ruta_Imagen_Pequeno } className={prod.Clase} />
                    </div>
                  )
              })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={prod3.Ruta_Imagen_Grande} alt="" id="card_principal-3"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item3">
            {
                mini_prod3.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen_Pequeno} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={prod4.Ruta_Imagen_Grande} alt="" id="card_principal-4"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item4">
              {
                mini_prod4.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen_Pequeno} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={prod5.Ruta_Imagen_Grande} alt="" id="card_principal-5"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item5">
            {
                mini_prod5.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen_Pequeno} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            {/* <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-sail-light-brown.webp")} alt="" id="card_principal-6"/> */}
            <img src={prod6.Ruta_Imagen_Grande} alt="" id="card_principal-6"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item6">
            {
                mini_prod6.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen_Pequeno} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeZapatillas;