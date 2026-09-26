import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {

  return (
    <>
    {/*
    <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </div>
    */}
  <Header/> 
  <main>
  <div className="main-banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 align-self-center">
                <div className="caption header-text">
                    <h6>Bienvenido a Volvo</h6>
                    <h1>La mejor página para comprar y opinar sobre tus juegos favoritos</h1>
                    <p>Encuentra un catalogo extendido de videojuegos</p>
                    <div className="search-input">
                        <form id="search" action="producto.html" method="get">
                            <input type="text" placeholder="Busca tu juego" id="searchText" name="buscar" autoComplete="off" />
                                <button type="submit">Buscar ahora</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
                <div className="right-image">
                    <a href="detalle-producto.html?id=assassins-creed">
                      <img src="assets/images/assassinscreed2.jpg" alt="Portada de Assassin's Creed en oferta" />
                    </a>
                    <span className="precio">$19.990</span>
                    <span className="oferta">-50%</span>
                </div>
            </div>

        </div>
    </div>
  </div>

  <div className="features">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6"> {/*Acá empieza*/}
                <a href="nosotros.html">
                    <div className="item">
                        <div className="image">
                            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                        </div>
                        <h4>Entrega inmediata</h4>
                    </div>
                </a>
            </div>{/*Acá termina*/}

            <div className="col-lg-3 col-md-6"> {/*Acá empieza*/}
                <a href="contacto.html">
                    <div className="item">
                        <div className="image">
                            <i className="fa-solid fa-headset" aria-hidden="true"></i>
                        </div>
                        <h4>Contáctanos</h4>
                    </div>
                </a>
            </div>{/*Acá termina*/}

            <div className="col-lg-3 col-md-6"> {/*Acá empieza*/}
                <a href="detalle-producto.html?id=gta-6">
                    <div className="item">
                        <div className="image">
                            <i className="fa-solid fa-star" aria-hidden="true"></i>
                        </div>
                        <h4>Novedades</h4>
                    </div>
                </a>
            </div>{/*Acá termina*/}

            <div className="col-lg-3 col-md-6"> {/*Acá empieza*/}
                <a href="blogs.html">
                    <div className="item">
                        <div className="image">
                            <i className="fa-solid fa-newspaper" aria-hidden="true"></i>
                        </div>
                        <h4>Blog</h4>
                    </div>
                </a>
            </div>{/*Acá termina*/}
        </div>
    </div>
  </div>

  <section className="section trending">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-heading">
                    <h6>Tendencias</h6>
                    <h2>Juegos en tendencia</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="main-button">
                    <a href="producto.html">Ver todos</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="item">
                    <div className="thumb">
                        <a href="detalle-producto.html?id=gta-6">
                            <img src="assets/images/gta6.jpg" alt="Portada de Grand Theft Auto VI" />
                        </a>
                    </div>
                    <div className="down-content">
                        <h4>Reserva GTA 6</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="item">
                    <div className="thumb">
                        <a href="detalle-producto.html?id=resident-evil-requiem">
                            <img src="assets/images/resident-evil-requiem.jpg" alt="Portada de Resident Evil Requiem" />
                        </a>
                    </div>
                    <div className="down-content">
                        <h4>Resident Evil Requiem</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="item">
                    <div className="thumb">
                        <a href="detalle-producto.html?id=blood-of-dawnwalker">
                            <img src="assets/images/blood-of-dawnwalker.jpg" alt="Portada de The Blood of Dawnwalker" style={{ objectPosition: '35% center' }} />
                        </a>
                    </div>
                    <div className="down-content">
                        <h4>The Blood of Dawnwalker</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="item">
                    <div className="thumb">
                        <a href="detalle-producto.html?id=subnautica-2">
                            <img src="assets/images/subnautica2.jpg" alt="Portada de Subnautica 2" />
                        </a>
                    </div>
                    <div className="down-content">
                        <h4>Subnautica 2</h4>
                    </div>
                </div>
            </div>
        </div>
     </div>
</section>


  <section className="section most-played">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>LO MÁS TOP</h6>
            <h2>Más Jugados</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="producto.html">Ver todos</a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=warframe"><img src="assets/images/warframe-hero.jpg" alt="Portada de Warframe" /></a>
            </div>
            <div className="down-content">
                <span className="category">Acción</span>
                <h4>Warframe</h4>
                <a href="detalle-producto.html?id=warframe">Explorar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=pubg-battlegrounds"><img src="assets/images/pubg-battlegrounds-hero.jpg" alt="Portada de PUBG Battlegrounds" /></a>
            </div>
            <div className="down-content">
                <span className="category">Battle Royale</span>
                <h4>PUBG Battlegrounds</h4>
                <a href="detalle-producto.html?id=pubg-battlegrounds">Explorar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=rocket-league"><img src="assets/images/rocket-league-hero.jpg" alt="Portada de Rocket League" /></a>
            </div>
            <div className="down-content">
                <span className="category">Deportes</span>
                <h4>Rocket League</h4>
                <a href="detalle-producto.html?id=rocket-league">Explorar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=dead-by-daylight"><img src="assets/images/dead-by-daylight-hero.jpg" alt="Portada de Dead by Daylight" /></a>
            </div>
            <div className="down-content">
                <span className="category">Terror</span>
                <h4>Dead by Daylight</h4>
                <a href="detalle-producto.html?id=dead-by-daylight">Explorar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=brawlhalla"><img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_hero.jpg" alt="Portada de Brawlhalla" /></a>
            </div>
            <div className="down-content">
                <span className="category">Lucha</span>
                <h4>Brawlhalla</h4>
                <a href="detalle-producto.html?id=brawlhalla">Explorar</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="detalle-producto.html?id=hollow-knight"><img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/library_hero.jpg" alt="Portada de Hollow Knight" /></a>
            </div>
            <div className="down-content">
                <span className="category">Metroidvania</span>
                <h4>Hollow Knight</h4>
                <a href="detalle-producto.html?id=hollow-knight">Explorar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="section categories">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-heading">
            <h6>Categorías</h6>
            <h2>Categorías Principales</h2>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <div className="thumb">
              <a href="producto.html?filtro=acc"><img src="assets/images/apex-legends.jpg" alt="Categoría Acción" /></a>
              <span className="category-caption">Acción</span>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <div className="thumb">
              <a href="producto.html?filtro=avn"><img src="assets/images/lost-ark.jpg" alt="Categoría Aventura" /></a>
              <span className="category-caption">Aventura</span>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <div className="thumb">
              <a href="producto.html?filtro=hor"><img src="assets/images/resident-evil-requiem.jpg" alt="Categoría Terror" /></a>
              <span className="category-caption">Terror</span>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <div className="thumb">
              <a href="producto.html?filtro=est"><img src="assets/images/age-of-empires-4.jpg" alt="Categoría Estrategia" /></a>
              <span className="category-caption">Estrategia</span>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <div className="thumb">
              <a href="producto.html?filtro=sim"><img src="assets/images/rocket-league.jpg" alt="Categoría Simulación y deportes" /></a>
              <span className="category-caption">Simulación y deportes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="shop">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>Nuestra Tienda</h6>
                  <h2>¡Haz tu Pre-Compra y Obtén los Mejores <em>Precios</em> para Ti!</h2>
                </div>
                <p>Reserva tus juegos favoritos con anticipación y accede a descuentos exclusivos por tiempo limitado.</p>
                <div className="main-button">
                  <a href="producto.html">Comprar Ahora</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-2 align-self-end">
          <div className="subscribe">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>NEWSLETTER</h6>
                  <h2>Obtén un 10% de Descuento en tu Primera Compra al <em>Suscribirte</em> a Nuestro Newsletter!</h2>
                </div>
                <div className="search-input">
                  <form id="subscribe" action="#" noValidate>
                    <label htmlFor="exampleInputEmail1" className="visually-hidden">Correo para el newsletter</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="correoNewsletter" autoComplete="email" placeholder="ejemplo@duoc.cl" required />
                    <button type="submit">Suscribirme Ahora</button>
                  </form>
                  <p id="subscribe-aviso" className="aviso" hidden></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  </main>

    <Footer />

  
    </>
  )
}

export default App
