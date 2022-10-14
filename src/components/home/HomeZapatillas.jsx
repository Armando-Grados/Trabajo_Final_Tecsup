import React from "react";
import { useState,useEffect } from "react";
// import './HomeProducto.scss';
//import ImagenCardView1 from '../../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre';
//import ImagenCardView1 from '../';
//import records from '../../json/producto1.json'
import axios from "axios";

const HomeZapatillas = () => {
  //URL BASE PRINCIPAL
  const URL_BASE = 'https://localhost:44356/api/';

  //URL POR ID SERVICIO EN BASE DE DATOS
  const CONTROLLER_PROD1 = 'producto/1';

  // URL LISTADO MODELOS POR PRODUCTO 
  //const URL_BASE = 'http://4.228.185.92:8080/api/';
  const CONTROLLER = 'producto/getbyall/1/1';

  //useEffect
  const [ prod1, setProd1 ] = useState([]);

  useEffect(()=>{
    const obtenerProd1 = async ()=>{
      const url = URL_BASE + CONTROLLER_PROD1;
      const result = await axios.get(url);
      setProd1(result.data)
    }
    console.log(prod1);

    obtenerProd1()
  },[]);



  const [ mini_prod1, setMiniProd1 ] = useState([]);

  useEffect(()=>{
    const obtenerListaProd1 = async ()=>{
      const url = URL_BASE + CONTROLLER;
      const result = await axios.get(url);
      setMiniProd1(result.data)
    }
    obtenerListaProd1()
  },[]);

  return(
    <section className="section-body">
      <div className="section-body__title">
        <h2>ÚLTIMO CALZADO</h2>
      </div>
      <div className="container-galeria container-galeria--elements">
        <div className="container-galeria elements elements--cards">
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-grey-blackened-blue.webp")} alt="" id="card_principal"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className ="cards card-view">
            {
                mini_prod1.map(prod=>{
                  return(
                    <div key={prod.idproducto}>
                      <img src={prod.Ruta_Imagen} className={prod.Clase}/>
                    </div>
                    )
                })
            }
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-grey-marina-blue.webp")} alt="" id="card_principal-2"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item2">
              <img src={require("../../assets/catalogo//Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-black-gold-front.webp")} alt="" className="card-view-item2__img"/>
              <img src={require("../../assets/catalogo/Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-grey-marina-blue.webp")} alt="" className="card-view-item2__img card-view-item2__img--active"/>
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Mercurial_Vapor_14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-grey-blackened-blue.webp")} alt="" id="card_principal-3"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item3">
              <img src={require("../../assets/catalogo/Nike_Mercurial_Vapor_14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-black-iron-grey-front.webp")} alt="" className="card-view-item3__img"/>
              <img src={require("../../assets/catalogo/Nike_Mercurial_Vapor_14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-black-gold-front.webp")} alt="" className="card-view-item3__img"/>
              <img src={require("../../assets/catalogo/Nike_Mercurial_Vapor_14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-grey-blackened-blue.webp")} alt="" className="card-view-item3__img"/>
              <img src={require("../../assets/catalogo/Nike_Mercurial_Vapor_14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-lapis-volt-blue-void.webp")} alt="" className="card-view-item3__img card-view-item3__img--active"/>
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Mercurial_ Superfly_8_Pro_FG/nike-kids-mercurial-superfly-8-pro-fg-grey-blackened-blue.webp")} alt="" id="card_principal-4"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item4">
              <img src={require("../../assets/catalogo/Nike_Mercurial_ Superfly_8_Pro_FG/nike-kids-mercurial-superfly-8-pro-fg-grey-blackened-blue.webp")} alt="" className="card-view-item4__img card-view-item4__img--active"/>
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-phantom-sunset-glow.webp")} alt="" id="card_principal-5"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item5">
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-mg-team-red-mystic.webp")} alt="" className="card-view-item5__img"/>
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-black-silver-front.webp")} alt="" className="card-view-item5__img"/>
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-phantom-sunset-glow.webp")} alt="" className="card-view-item5__img card-view-item5__img--active"/>
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-black-photo-blue.webp")} alt="" className="card-view-item5__img"/>
            </div>
            <button className="button button--secondary button--card">Agregar al Carrito</button>
            <button className="button button--primary button--card">Vista</button>
          </div>
          <div className="cards">
            <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-sail-light-brown.webp")} alt="" id="card_principal-6"/>
            <a href="/">Nike Phantom GT2 Elite FG Hombre<br/>Gris/Azul Ennegrecido<br/> USD 250</a>
            <div className="cards card-view-item6">
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-black-iron-grey-front.webp")} alt="" className="card-view-item6__img"/>
              <img src={require("../../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-sail-light-brown.webp")} alt="" className="card-view-item6__img card-view-item6__img--active"/>
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