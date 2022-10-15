import React from "react";
import "./service.css";

const Service = () => {
  const mouseEnteredOne = (e) => {
    document.querySelector(".welcome__service").classList.add("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("third");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredTwo = (e) => {
    document.querySelector(".welcome__service").classList.add("second");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("third");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredThree = (e) => {
    document.querySelector(".welcome__service").classList.add("third");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("fourth");
  };
  const mouseEnteredFour = (e) => {
    document.querySelector(".welcome__service").classList.add("fourth");
    document.querySelector(".welcome__service").classList.remove("first");
    document.querySelector(".welcome__service").classList.remove("second");
    document.querySelector(".welcome__service").classList.remove("third");
  };

  return (
    <>
      <div className="welcome__service first zoom">
        <div className=" height__100">
          <div className="row height__100">
              <div className={` welcome__service-item height__100`}>
                <div
                  className="box box__item-1 height__100"
                  onMouseOver={mouseEnteredOne}
                >
                  <div className="content contetnt__an">
                    <h3 className="heading">Misión</h3>
                    <p className="pera">
                    

To bring inspiration and innovation to every athlete* in the world. (Ofrecer inspiración e innovación a todos los atletas* del mundo).

* If you have a body, you are an athlete. (Si tienes cuerpo, eres atleta)

Para obtener más información acerca de lo que queremos conseguir con esa misión, visita Acerca de Nike.
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-2 height__100"
                  onMouseOver={mouseEnteredTwo}
                >
                  <div className="content">
                    <h3 className="heading">Vision</h3>
                    <p className="pera">
                    
Rudy Bootcamp Tecsup CodiGo: ser los líderes del diseño con un enfoque en obtener lo mejor de los atletas con productos de rendimiento garantizado en el mercado deportivo a nivel mundial.”{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-3 height__100"
                  onMouseOver={mouseEnteredThree}
                >
                  <div className="content">
                    <h3 className="heading">Enfoque Global</h3>
                    <p className="pera">
                    
El enfoque global de adidas Runners se construye alrededor de cuatro pilares enfocados en el rendimiento: PREPARACIÓN MENTAL, NUTRICIÓN, MOVIMIENTO Y RECUPERACIÓN. Y para asegurarnos de que todo esto se cumple a la hora de crear una mejor versión de ti mismo, incorporamos un quinto pilar esencial: EL PRODUCTO.
                    </p>
                  </div>
                </div>
                <div
                  className="box box__item-4 height__100"
                  onMouseOver={mouseEnteredFour}
                >
                  <div className="content">
                    <h3 className="heading">Motivacion</h3>
                    <p className="pera">
                    Creemos que cada uno de nuestros corredores obtiene su fuerza gracias a la comunidad que lo rodea: unirte a la comunidad te permite alcanzar el éxito y el crecimiento individual. Guía, apoyo, motivación, inspiración son los factores que impulsan a tu comunidad hacia delante.{" "}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
