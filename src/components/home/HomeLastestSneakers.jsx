
const HomeLastestSneakers = () => {
  const code = () => {
    const cardPrincipal = document.getElementById("card_principal");
    const cardPrincipal2 = document.getElementById("card_principal-2");
    const cardPrincipal3 = document.getElementById("card_principal-3");
    const cardPrincipal4 = document.getElementById("card_principal-4");
    const cardPrincipal5 = document.getElementById("card_principal-5");
    const cardPrincipal6 = document.getElementById("card_principal-6");
    const cardViewImg = document.querySelectorAll(".card-view__img");
    const cardViewImg2 = document.querySelectorAll(".card-view-item2__img");
    const cardViewImg3 = document.querySelectorAll(".card-view-item3__img");
    const cardViewImg4 = document.querySelectorAll(".card-view-item4__img");
    const cardViewImg5 = document.querySelectorAll(".card-view-item5__img");
    const cardViewImg6 = document.querySelectorAll(".card-view-item6__img");
    console.log(cardPrincipal);
    if (cardPrincipal.id === "card_principal") {
      cardViewImg.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view__img--active");
          active.classList.remove("card-view__img--active");
          this.classList.add("card-view__img--active");
          cardPrincipal.src = this.src;
        });
      });
    }

    if (cardPrincipal2.id === "card_principal-2") {
      cardViewImg2.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view-item2__img--active");
          active.classList.remove("card-view-item2__img--active");
          this.classList.add("card-view-item2__img--active");
          cardPrincipal2.src = this.src;
        });
      });
    }

    if (cardPrincipal3.id === "card_principal-3") {
      cardViewImg3.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view-item3__img--active");
          active.classList.remove("card-view-item3__img--active");
          this.classList.add("card-view-item3__img--active");
          cardPrincipal3.src = this.src;
        });
      });
    }

    if (cardPrincipal4.id === "card_principal-4") {
      cardViewImg4.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view-item4__img--active");
          active.classList.remove("card-view-item4__img--active");
          this.classList.add("card-view-item4__img--active");
          cardPrincipal4.src = this.src;
        });
      });
    }

    if (cardPrincipal5.id === "card_principal-5") {
      cardViewImg5.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view-item5__img--active");
          active.classList.remove("card-view-item5__img--active");
          this.classList.add("card-view-item5__img--active");
          cardPrincipal5.src = this.src;
        });
      });
    }

    if (cardPrincipal6.id === "card_principal-6") {
      cardViewImg6.forEach((element) => {
        element.addEventListener("click", function () {
          const active = document.querySelector(".card-view-item6__img--active");
          active.classList.remove("card-view-item6__img--active");
          this.classList.add("card-view-item6__img--active");
          cardPrincipal6.src = this.src;
        });
      });
    }
  }
  return (
    <section className="section-body">
      <div className="section-body__title">
        <h2>ÚLTIMO CALZADO</h2>
      </div>
      <div className="container-galeria container-galeria--elemens">
        <div className="container-galeria elements elements--cards">
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-grey-blackened-blue.webp")} alt="" id="cards_principal" />

            <a href="/">Nike Phantom GT2 Elite FG Hombre<br />Gris/Azul Ennegrecido<br /> USD 250</a>
            <div className="cards cards-view">
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-black-blue-front.webp")} alt="" className="cards-view__img" />
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-navy-white-front.webp")} alt="" className="cards-view__img" />
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-white-bright-crimson-front.webp")} alt="" className="cards-view__img" />
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Elite_FG_Hombre/nike-mens-phantom-gt2-elite-fg-grey-blackened-blue.webp")} alt="" className="cards-view__img cards-view__img--active" />
            </div>
          </div>
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-grey-marina-blue_300x.avif")} alt="" id="cards_principal-2" />
            <a href="/">Nike Niños Phantom GT2 Academy DF<br />FG/MG Gris/Azul Marina<br /> USD 65</a>
            <div className="cards cards-view-item2">
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-black-gold-front.webp")} alt="" className="cards-view-item2__img" />
              <img src={require("../assets/catalogo/Nike_Phantom_GT2_Academy_DF_FG/nike-kids-phantom-gt2-academy-df-fg-mg-grey-marina-blue.webp")} alt="" className="cards-view-item2__img cards-view-item2__img--active" />
            </div>
          </div>
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Mercurial_Vapor 14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-grey-blackened-blue_300x.avif")} alt="" id="cards_principal-3" />
            <a href="/">Nike Hombre Mercurial Vapor 14<br />Academy FG/MG Gris/Azul Ennegrecido<br />USD 80</a>
            <div className="cards cards-view-item3">
              <img src={require("../assets/catalogo/Nike_Mercurial_Vapor 14_Academy_FG/CU5691004nike-mens-mercurial-vapor-14-academy-fg-mg-black-iron-grey-front.webp")} alt="" className="cards-view-item3__img" />
              <img src={require("../assets/catalogo/Nike_Mercurial_Vapor 14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-black-gold-front.webp")} alt="" className="cards-view-item3__img" />
              <img src={require("../assets/catalogo/Nike_Mercurial_Vapor 14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-grey-blackened-blue.webp")} alt="" className="cards-view-item3__img" />
              <img src={require("../assets/catalogo/Nike_Mercurial_Vapor 14_Academy_FG/nike-mens-mercurial-vapor-14-academy-fg-mg-lapis-volt-blue-void.webp")} alt="" className="cards-view-item3__img cards-view-item3__img--active" />
            </div>
          </div>
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Mercurial_ Superfly_8_Pro_FG/nike-kids-mercurial-superfly-8-pro-fg-grey-blackened-blue.webp")} alt="" id="cards_principal-4" />
            <a href="/">Nike Niños Mercurial Superfly 8 Pro FG<br /> Gris/Azul Ennegrecido<br /> USD 120</a>
            <div className="cards cards-view-item4">
              <img src={require("../assets/catalogo/Nike_Mercurial_ Superfly_8_Pro_FG/nike-kids-mercurial-superfly-8-pro-fg-grey-blackened-blue.webp")} alt="" className="cards-view-item4__img cards-view-item4__img--active" />
            </div>
          </div>
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-phantom-sunset-glow.webp")} alt="" id="cards_principal-5" />
            <a href="/">Nike Men's Tiempo Legend 9 Club Pro FG<br />FG/MG Phantom/Sunset Glow<br />USD 50</a>
            <div className="cards cards-view-item5">
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-mg-team-red-mystic.webp")} alt="" className="cards-view-item5__img" />
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-black-silver-front.webp")} alt="" className="cards-view-item5__img" />
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-phantom-sunset-glow.webp")} alt="" className="cards-view-item5__img cards-view-item5__img--active" />
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_ Club_FG/nike-mens-tiempo-legend-9-club-fg-mg-black-photo-blue.webp")} alt="" className="cards-view-item5__img" />
            </div>
          </div>
          <div className="cards">
            <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-sail-light-brown.webp")} alt="" id="cards_principal-6" />
            <a href="/">Nike Tiempo Legend 9 Academy TF<br /> Vela/Marrón Claro Hombre<br /> USD 75</a>
            <div className="cards cards-view-item6">
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-black-iron-grey-front.webp")} alt="" className="cards-view-item6__img" />
              <img src={require("../assets/catalogo/Nike_Tiempo_ Legend_9_Academy_TF/nike-mens-tiempo-legend-9-academy-tf-sail-light-brown.webp")} alt="" className="cards-view-item6__img cards-view-item6__img--active" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLastestSneakers;