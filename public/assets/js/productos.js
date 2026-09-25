// Arreglo de productos - Volvo Tienda de Videojuegos
const productos = [
  {
    id: "warframe",
    idJuego: "WFRM-01",
    nombre: "Warframe",
    categoria: "Acción",
    filtro: "acc",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/warframe-card.jpg",
    imagenDetalle: "https://dropreference-v3.s3.eu-west-3.amazonaws.com/prod/game-images/warframe_vertical.jpg",
    posicionCard: "0% center",
    genero: "Acción, Cooperativo, Multijugador",
    etiquetas: "Ciencia ficción, Ninjas, Free to play",
    trailer: "https://www.youtube.com/embed/MsbL8lFHrZI",
    descripcion: "Shooter cooperativo gratuito en tercera persona. Elige tu Warframe, mejora su armamento y recorre el Sistema Origen en misiones para hasta cuatro jugadores.",
    opiniones: [
      { autor: "Camila S.", nota: 5, texto: "Llevo más de 200 horas y no he gastado un peso. El sistema de mods es enredado al principio, pero después no lo sueltas." },
      { autor: "Diego M.", nota: 4, texto: "El movimiento es lo mejor que tiene: deslizarse por los mapas se siente increíble. Le bajo una estrella porque el tutorial explica poco." },
      { autor: "Rodrigo A.", nota: 4, texto: "Ideal para jugar con amigos, aunque hay que tener paciencia para farmear los materiales." },
      {autor: "Matias R", nota:1, texto: "Mi profesor me reto por poner en mi pagina que este juego era de pago cuando era gratis"}
    ]
  },
  {
    id: "tower-of-fantasy",
    idJuego: "TOF-02",
    nombre: "Tower of Fantasy: Pack Bienvenida",
    categoria: "Aventura",
    filtro: "avn",
    precio: 9990,
    esGratis: false,
    imagen: "assets/images/tower-of-fantasy-card.jpg",
    imagenDetalle: "assets/images/tower-of-fantasy.jpg",
    genero: "RPG, Mundo Abierto, Multijugador",
    etiquetas: "Anime, Exploración, Pack de inicio",
    trailer: "https://www.youtube.com/embed/cQqB1-LK4T0",
    descripcion: "Pack de inicio para el RPG de mundo abierto Tower of Fantasy. Incluye moneda del juego, un atuendo exclusivo y recursos para tus primeras horas en Aida. El juego base es gratuito.",
    opiniones: [
      { autor: "Fernanda L.", nota: 4, texto: "El pack rinde harto para partir: con los recursos armé un equipo decente sin tener que gastar más." },
      { autor: "Ignacio P.", nota: 3, texto: "El mundo abierto es bonito, pero las misiones se vuelven repetitivas pasadas unas horas." }
    ]
  },
  {
    id: "super-people",
    idJuego: "SPPL-03",
    nombre: "Super People: Pack Fundador",
    categoria: "Acción",
    filtro: "acc",
    precio: 7990,
    esGratis: false,
    imagen: "assets/images/super-people-card.jpg",
    imagenDetalle: "assets/images/super-people.jpg",
    genero: "Battle Royale, Shooter, Multijugador",
    etiquetas: "Supervivencia, Competitivo, Pack de fundador",
    trailer: "https://www.youtube.com/embed/a8YMwELFNSo",
    descripcion: "Pack de fundador del battle royale Super People. Trae aspectos exclusivos y recompensas de temporada para las partidas donde cada soldado tiene habilidades especiales. El juego base es gratuito.",
    opiniones: [
      { autor: "Matías V.", nota: 4, texto: "Que cada clase tenga habilidades propias cambia mucho las partidas comparado con otros battle royale." },
      { autor: "Camilo R.", nota: 3, texto: "Entretenido, pero en horario chileno a veces cuesta encontrar partida rápido." }
    ]
  },
  {
    id: "yugioh-master-duel",
    idJuego: "YGMD-04",
    nombre: "Yu-Gi-Oh! Master Duel",
    categoria: "Estrategia",
    filtro: "est",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/yugioh-master-duel-card.jpg",
    imagenDetalle: "assets/images/yugioh-master-duel.jpg",
    genero: "Cartas, Estrategia, Multijugador",
    etiquetas: "Duelos, Coleccionable, Free to play",
    trailer: "https://www.youtube.com/embed/7DbBwNpOkEI",
    descripcion: "Juego de cartas gratuito basado en Yu-Gi-Oh! Arma tu mazo con miles de cartas y compite en duelos clasificados contra jugadores de todo el mundo.",
    opiniones: [
      { autor: "Valentina C.", nota: 5, texto: "Gratis y con todas las cartas disponibles para armar mazos. Perfecto si jugabas de chico." },
      { autor: "Sebastián O.", nota: 3, texto: "Muy bueno, pero el modo clasificatorio es durísimo si no te sabes los mazos del momento." },
      { autor: "Andrés F.", nota: 4, texto: "Está bien optimizado, me corre sin problemas en un notebook antiguo." }
    ]
  },
  {
    id: "assassins-creed",
    idJuego: "ACRD-05",
    nombre: "Assassin's Creed",
    categoria: "Aventura",
    filtro: "avn",
    precio: 19990,
    esGratis: false,
    imagen: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg",
    imagenDetalle: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg",
    genero: "Acción, Sigilo, Un Jugador",
    etiquetas: "Mundo abierto, Histórico, Parkour",
    trailer: "https://www.youtube.com/embed/RjQ6ZtyXoA0",
    descripcion: "Acción y sigilo en mundo abierto. Infíltrate entre la multitud, escala ciudades históricas y sigue el conflicto entre Asesinos y Templarios en una campaña para un jugador.",
    opiniones: [
      { autor: "Josefa M.", nota: 5, texto: "Recorrer las ciudades y escalar cada torre nunca se hace fome. La historia entre Asesinos y Templarios engancha." },
      { autor: "Nicolás T.", nota: 4, texto: "El sigilo se siente bien, aunque de vez en cuando los guardias te detectan sin razón aparente." }
    ]
  },
  {
    id: "pubg-battlegrounds",
    idJuego: "PUBG-06",
    nombre: "PUBG Battlegrounds",
    categoria: "Acción",
    filtro: "acc",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/pubg-battlegrounds-card.jpg",
    imagenDetalle: "assets/images/pubg-battlegrounds.jpg",
    genero: "Battle Royale, Shooter, Multijugador",
    etiquetas: "Supervivencia, Táctico, Free to play",
    trailer: "https://www.youtube.com/embed/8z35rlAslsE",
    descripcion: "El battle royale que popularizó el género, hoy gratuito. Cien jugadores caen en un mapa que se va cerrando y solo uno queda en pie.",
    opiniones: [
      { autor: "Cristóbal H.", nota: 5, texto: "Que pasara a ser gratis fue lo mejor que le pudo pasar. Sigue siendo el battle royale más táctico." },
      { autor: "Paula G.", nota: 4, texto: "La tensión de los últimos círculos no se compara con nada. Los servidores de Sudamérica andan bien." },
      { autor: "Felipe D.", nota: 3, texto: "Buen juego, pero todavía te topas con tramposos de vez en cuando." }
    ]
  },
  {
    id: "apex-legends",
    idJuego: "APEX-07",
    nombre: "Apex Legends: Edición Campeón",
    categoria: "Acción",
    filtro: "acc",
    precio: 13990,
    esGratis: false,
    imagen: "assets/images/apex-legends-card.jpg",
    imagenDetalle: "assets/images/apex-legends.jpg",
    posicionCard: "80% center",
    genero: "Battle Royale, Shooter, Multijugador",
    etiquetas: "Equipos, Habilidades, Edición especial",
    trailer: "https://www.youtube.com/embed/oQtHENM_GZU",
    descripcion: "Edición del battle royale por escuadrones de Respawn. Desbloquea leyendas, aspectos legendarios y monedas Apex. El juego base es gratuito.",
    opiniones: [
      { autor: "Antonia R.", nota: 4, texto: "La edición vale la pena si vas a jugar en serio: vienen leyendas desbloqueadas de entrada." },
      { autor: "Gonzalo S.", nota: 5, texto: "El movimiento y el juego en equipo son lo mejor del género. Los deslizamientos por las pendientes son adictivos." }
    ]
  },
  {
    id: "the-sims-4",
    idJuego: "SIMS-08",
    nombre: "The Sims 4: Expansión A Trabajar",
    categoria: "Simulación y deportes",
    filtro: "sim",
    precio: 19990,
    esGratis: false,
    imagen: "assets/images/sims4-card.jpg",
    imagenDetalle: "assets/images/sims4.jpg",
    posicionCard: "10% center",
    genero: "Simulación, Vida, Un Jugador",
    etiquetas: "Construcción, Carreras profesionales, Expansión",
    trailer: "https://www.youtube.com/embed/0D5bRyZV_Dw",
    descripcion: "Expansión para The Sims 4. Acompaña a tus Sims a su trabajo como médico, detective o científico, o abre tu propio negocio. Requiere el juego base, que es gratuito.",
    opiniones: [
      { autor: "Javiera N.", nota: 5, texto: "Poder acompañar a mi Sim al hospital cambió por completo cómo juego. Vale cada peso." },
      { autor: "Martina B.", nota: 4, texto: "Tener negocio propio es lo más entretenido, aunque se pone lento cuando contratas muchos empleados." }
    ]
  },
  {
    id: "lost-ark",
    idJuego: "LOST-09",
    nombre: "Lost Ark: Pack Fundador",
    categoria: "Aventura",
    filtro: "avn",
    precio: 14990,
    esGratis: false,
    imagen: "assets/images/lost-ark-card.jpg",
    imagenDetalle: "assets/images/lost-ark.jpg",
    genero: "RPG, Acción, Multijugador",
    etiquetas: "Fantasía, Mazmorras, Pack de fundador",
    trailer: "https://www.youtube.com/embed/Dhc30WRb0n0",
    descripcion: "Pack de fundador del RPG de acción isométrico Lost Ark. Incluye cristales, una mascota y objetos para avanzar más rápido en la búsqueda del Arca. El juego base es gratuito.",
    opiniones: [
      { autor: "Esteban Q.", nota: 4, texto: "El combate isométrico se siente potente y el pack ayuda harto en los primeros niveles." },
      { autor: "Daniela I.", nota: 3, texto: "Muy entretenido hasta el nivel 50; de ahí en adelante exige mucho tiempo diario." }
    ]
  },
  {
    id: "destiny-2",
    idJuego: "DEST-10",
    nombre: "Destiny 2: La Forma Final",
    categoria: "Acción",
    filtro: "acc",
    precio: 39990,
    esGratis: false,
    imagen: "assets/images/destiny2-card.jpg",
    imagenDetalle: "assets/images/destiny2.jpg",
    posicionCard: "65% center",
    genero: "Shooter, Ciencia Ficción, Multijugador",
    etiquetas: "Cooperativo, Incursiones, Expansión",
    trailer: "https://www.youtube.com/embed/hdWkpbPTpmE",
    descripcion: "Expansión que cierra la Saga de la Luz de Destiny 2, con un destino nuevo, incursión y subclases prismáticas. Requiere el juego base, que es gratuito.",
    opiniones: [
      { autor: "Tomás E.", nota: 5, texto: "El cierre de la saga vale totalmente la pena. Es la mejor campaña que le han hecho al juego." },
      { autor: "Constanza A.", nota: 4, texto: "Las subclases prismáticas le dan un vuelco enorme al combate. Eso sí, hay que tener el juego base instalado." },
      { autor: "Ricardo M.", nota: 4, texto: "Las incursiones con amigos siguen siendo lo mejor que ofrece." }
    ]
  },
  {
    id: "rocket-league",
    idJuego: "RL-11",
    nombre: "Rocket League",
    categoria: "Simulación y deportes",
    filtro: "sim",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/rocket-league.jpg",
    imagenDetalle: "assets/images/rocket-league.jpg",
    genero: "Deportes, Vehículos, Multijugador",
    etiquetas: "Fútbol, Competitivo, Free to play",
    trailer: "https://www.youtube.com/embed/SgSX3gOrj60",
    descripcion: "Fútbol con autos cohete, gratuito. Partidos de tres contra tres fáciles de entender y difíciles de dominar, con temporadas competitivas.",
    opiniones: [
      { autor: "Bastián L.", nota: 5, texto: "Fácil de entender, imposible de dominar. Llevo años jugando y sigo aprendiendo tiros nuevos." },
      { autor: "Isidora P.", nota: 4, texto: "Gratis y sin ventajas por pagar. Los partidos de tres contra tres son los más entretenidos." }
    ]
  },
  {
    id: "age-of-empires-iv",
    idJuego: "AOE4-12",
    nombre: "Age of Empires IV",
    categoria: "Estrategia",
    filtro: "est",
    precio: 24990,
    esGratis: false,
    imagen: "assets/images/age-of-empires-4.jpg",
    imagenDetalle: "assets/images/age-of-empires-4.jpg",
    genero: "Estrategia, Tiempo Real, Un Jugador",
    etiquetas: "Civilizaciones, Histórico, Construcción",
    trailer: "https://www.youtube.com/embed/ttLZoKjH9kI",
    descripcion: "Estrategia en tiempo real. Administra recursos, levanta tu civilización y libra batallas históricas en las campañas y en partidas multijugador.",
    opiniones: [
      { autor: "Vicente C.", nota: 5, texto: "Las campañas históricas con documentales intercalados son un lujo. Terminé aprendiendo historia jugando." },
      { autor: "Catalina R.", nota: 4, texto: "Las civilizaciones se sienten distintas de verdad, no es solo cambiarles el color." },
      { autor: "Álvaro Z.", nota: 4, texto: "Corre bien en equipos modestos, algo raro en un juego de estrategia actual." }
    ]
  },
  {
    id: "dead-by-daylight",
    idJuego: "DBD-13",
    nombre: "Dead by Daylight",
    categoria: "Terror",
    filtro: "hor",
    precio: 12990,
    esGratis: false,
    imagen: "assets/images/dead-by-daylight.jpg",
    imagenDetalle: "assets/images/dead-by-daylight.jpg",
    genero: "Terror, Supervivencia, Multijugador",
    etiquetas: "Asimétrico, Cooperativo, Horror",
    trailer: "https://www.youtube.com/embed/JGhIXLO3ulc",
    descripcion: "Terror multijugador asimétrico. Cuatro supervivientes intentan reparar los generadores y escapar mientras un asesino controlado por otro jugador los caza.",
    opiniones: [
      { autor: "Francisca U.", nota: 4, texto: "Jugar de asesino y de superviviente son dos juegos distintos. Con amigos es panorama fijo los viernes." },
      { autor: "Joaquín V.", nota: 3, texto: "Entretenido, pero jugando solo con desconocidos puede ser frustrante." }
    ]
  },
  {
    id: "brawlhalla",
    idJuego: "BRWL-14",
    nombre: "Brawlhalla",
    categoria: "Acción",
    filtro: "acc",
    precio: 0,
    esGratis: true,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900_2x.jpg",
    genero: "Lucha, Plataformas, Multijugador",
    etiquetas: "Combate, Competitivo, Free to play",
    trailer: "https://www.youtube.com/embed/8n6Q7w2YwXk",
    descripcion: "Juego de lucha de plataformas gratuito para hasta ocho jugadores. Decenas de leyendas, partidas rápidas y modo clasificatorio.",
    opiniones: [
      { autor: "Renata O.", nota: 5, texto: "Gratis, liviano y con controles simples. Perfecto para jugar de a dos en el mismo computador." },
      { autor: "Maximiliano G.", nota: 4, texto: "Hay muchísimas leyendas y todas se pueden desbloquear jugando, sin pagar." }
    ]
  },
  {
    id: "red-dead-redemption-2",
    idJuego: "RDR2-15",
    nombre: "Red Dead Redemption 2",
    categoria: "Aventura",
    filtro: "avn",
    precio: 49990,
    esGratis: false,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/library_600x900_2x.jpg",
    genero: "Acción, Mundo Abierto, Un Jugador",
    etiquetas: "Western, Historia, Mundo abierto",
    trailer: "https://www.youtube.com/embed/HVRzx17WHVk",
    descripcion: "Aventura de mundo abierto en el ocaso del Lejano Oeste. Acompaña a Arthur Morgan y a la banda de Van der Linde en una campaña extensa que incluye el modo en línea Red Dead Online.",
    opiniones: [
      { autor: "Simón A.", nota: 5, texto: "El mundo más vivo que he jugado. Me pasé horas solo cazando y pescando sin avanzar la historia." },
      { autor: "Amanda K.", nota: 5, texto: "La historia de Arthur Morgan me dejó pensando una semana entera. Obra maestra." },
      { autor: "Rodrigo P.", nota: 4, texto: "Enorme y precioso, pero los controles son lentos a propósito y cuesta acostumbrarse." }
    ]
  },
  {
    id: "hollow-knight",
    idJuego: "HK-16",
    nombre: "Hollow Knight",
    categoria: "Aventura",
    filtro: "avn",
    precio: 9990,
    esGratis: false,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/library_600x900_2x.jpg",
    genero: "Metroidvania, Plataformas, Un Jugador",
    etiquetas: "Exploración, Difícil, Dibujado a mano",
    trailer: "https://www.youtube.com/embed/Y2amTl5lBYM",
    descripcion: "Metroidvania dibujado a mano. Explora el reino en ruinas de Hallownest, mejora tu aguijón y descubre secretos en un mapa enorme e interconectado.",
    opiniones: [
      { autor: "Emilia F.", nota: 5, texto: "Por lo que cuesta es increíble la cantidad de mapa que tiene. El arte y la música son preciosos." },
      { autor: "Lucas M.", nota: 4, texto: "Difícil, pero justo. Cada jefe que te cuesta se siente realmente ganado." },
      { autor: "Ignacia D.", nota: 5, texto: "Me perdí a propósito muchas veces y siempre terminaba encontrando algo nuevo." }
    ]
  },
  {
    id: "hollow-knight-silksong",
    idJuego: "HKSS-17",
    nombre: "Hollow Knight: Silksong",
    categoria: "Aventura",
    filtro: "avn",
    precio: 14990,
    esGratis: false,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030300/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030300/library_600x900_2x.jpg",
    genero: "Metroidvania, Plataformas, Un Jugador",
    etiquetas: "Exploración, Acción, Secuela",
    trailer: "https://www.youtube.com/embed/6XGeJwsUP9c",
    descripcion: "Secuela de Hollow Knight protagonizada por Hornet. Combate más ágil, un reino nuevo que escalar y decenas de jefes repartidos por el camino.",
    opiniones: [
      { autor: "Benjamín R.", nota: 5, texto: "Hornet se mueve mucho más rápido que el caballero del primero, se siente otro juego." },
      { autor: "Trinidad S.", nota: 4, texto: "Más difícil que el original, aviso desde ya. Igual no lo pude soltar." }
    ]
  },
  {
    id: "god-of-war",
    idJuego: "GOW-18",
    nombre: "God of War",
    categoria: "Acción",
    filtro: "acc",
    precio: 34990,
    esGratis: false,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/library_600x900_2x.jpg",
    genero: "Acción, Aventura, Un Jugador",
    etiquetas: "Mitología nórdica, Historia, Un jugador",
    trailer: "https://www.youtube.com/embed/HqQMh_tij0c",
    descripcion: "Kratos y su hijo Atreus cruzan las tierras de la mitología nórdica en una aventura de acción con combate cuerpo a cuerpo y una historia sobre padre e hijo.",
    opiniones: [
      { autor: "Sofía L.", nota: 4, texto: "Que toda la aventura sea un solo plano sin cortes es una locura técnica. La relación entre Kratos y su hijo es lo mejor." },
      { autor: "Pablo N.", nota: 5, texto: "El hacha Leviatán es el arma mejor lograda que he usado. Lanzarla y llamarla de vuelta nunca aburre." }
    ]
  },
  {
    id: "god-of-war-ragnarok",
    idJuego: "GOWR-19",
    nombre: "God of War Ragnarök",
    categoria: "Acción",
    filtro: "acc",
    precio: 49990,
    esGratis: false,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/library_600x900_2x.jpg",
    genero: "Acción, Aventura, Un Jugador",
    etiquetas: "Mitología nórdica, Épico, Historia",
    trailer: "https://www.youtube.com/embed/g1wr0DfV73E",
    descripcion: "Continuación directa de God of War. El Fimbulwinter anuncia el Ragnarök y Kratos y Atreus recorren los nueve reinos buscando respuestas sobre su destino.",
    opiniones: [
      { autor: "Camila T.", nota: 5, texto: "Cierra la historia nórdica como corresponde. Los nueve reinos se ven espectaculares." },
      { autor: "Héctor J.", nota: 4, texto: "Más grande que el anterior en todo sentido, quizás con demasiadas misiones secundarias." },
      { autor: "Valeria M.", nota: 5, texto: "Las opciones de accesibilidad son las mejores que he visto en un juego." }
    ]
  },
  {
    id: "gta-6",
    idJuego: "GTA6-20",
    nombre: "Grand Theft Auto VI",
    categoria: "Aventura",
    filtro: "avn",
    precio: 69990,
    esGratis: false,
    imagen: "assets/images/gta6.jpg",
    imagenDetalle: "assets/images/gta6.jpg",
    genero: "Acción, Mundo Abierto, Un Jugador",
    etiquetas: "Mundo abierto, Crimen, Reserva",
    trailer: "https://www.youtube.com/embed/VQRLujxTm3c",
    descripcion: "Reserva anticipada del regreso de Rockstar a Vice City, ahora en el estado de Leonida. Sigue a Lucia y Jason en una historia criminal de mundo abierto. Al ser una reserva, el producto se activa el día del lanzamiento.",
    opiniones: [
      { autor: "Álvaro E.", nota: 5, texto: "Reservado desde que salió el segundo tráiler. Vice City se ve impresionante." },
      { autor: "Karen S.", nota: 4, texto: "Ojalá no lo vuelvan a atrasar, pero se nota que la espera va a valer la pena." },
      { autor: "Diego C.", nota: 5, texto: "El nivel de detalle del tráiler es de otro nivel, se nota el trabajo que hay detrás." }
    ]
  },
  {
    id: "resident-evil-requiem",
    idJuego: "REQ-21",
    nombre: "Resident Evil Requiem",
    categoria: "Terror",
    filtro: "hor",
    precio: 59990,
    esGratis: false,
    imagen: "assets/images/resident-evil-requiem.jpg",
    imagenDetalle: "assets/images/resident-evil-requiem.jpg",
    genero: "Terror, Supervivencia, Un Jugador",
    etiquetas: "Survival horror, Historia, Raccoon City",
    trailer: "https://www.youtube.com/embed/9lrThxCoznw",
    descripcion: "Noveno capítulo principal de la saga de survival horror de Capcom, construido sobre el RE ENGINE. Una historia ligada al incidente de Raccoon City, con la tensión y la administración de recursos de siempre.",
    opiniones: [
      { autor: "Manuel A.", nota: 5, texto: "La ambientación es asfixiante en el buen sentido. Volvieron al terror de verdad y no a la acción." },
      { autor: "Antonia V.", nota: 4, texto: "Se ve espectacular y corre bien. Le bajo una estrella porque la campaña se me hizo corta." },
      { autor: "Cristián B.", nota: 5, texto: "Poder alternar la cámara cambia por completo la experiencia. Lo jugué dos veces por eso." }
    ]
  },
  {
    id: "blood-of-dawnwalker",
    idJuego: "DAWN-22",
    nombre: "The Blood of Dawnwalker",
    categoria: "Aventura",
    filtro: "avn",
    precio: 54990,
    esGratis: false,
    imagen: "assets/images/blood-of-dawnwalker.jpg",
    imagenDetalle: "assets/images/blood-of-dawnwalker.jpg",
    posicionCard: "35% center",
    genero: "RPG, Acción, Un Jugador",
    etiquetas: "Fantasía oscura, Vampiros, Mundo abierto",
    trailer: "https://www.youtube.com/embed/Rc0zHeBUBCw",
    descripcion: "RPG de acción y fantasía oscura ambientado en la Europa del siglo XIV. Encarnas a Coen, humano de día y vampiro de noche, en un mundo abierto donde el reloj corre mientras intentas salvar a tu familia.",
    opiniones: [
      { autor: "Nicolás H.", nota: 5, texto: "La idea de que el día y la noche te den poderes distintos obliga a planificar cada misión." },
      { autor: "Paulina G.", nota: 4, texto: "El mundo y la ambientación medieval están muy logrados. Se nota de dónde viene el estudio." },
      { autor: "Sergio M.", nota: 4, texto: "Buena historia y buen combate, aunque el límite de tiempo estresa más de lo que esperaba." }
    ]
  },
  {
    id: "subnautica-2",
    idJuego: "SUB2-23",
    nombre: "Subnautica 2",
    categoria: "Aventura",
    filtro: "avn",
    precio: 24990,
    esGratis: false,
    imagen: "assets/images/subnautica2.jpg",
    imagenDetalle: "assets/images/subnautica2.jpg",
    genero: "Supervivencia, Exploración, Cooperativo",
    etiquetas: "Océano, Construcción, Acceso anticipado",
    trailer: "https://www.youtube.com/embed/6t2nDHldoSk",
    descripcion: "Secuela de Subnautica: explora el océano de un planeta alienígena, construye tus bases y sobrevive, ahora en cooperativo con otros jugadores. Está en acceso anticipado, así que recibe contenido nuevo de forma periódica.",
    opiniones: [
      { autor: "Catalina F.", nota: 5, texto: "Poder explorar el fondo del mar con amigos era justo lo que le faltaba al primero." },
      { autor: "Tomás R.", nota: 3, texto: "Muy entretenido, pero al ser acceso anticipado todavía se le escapan algunos errores." },
      { autor: "Javiera E.", nota: 4, texto: "La sensación de bajar a lo profundo sin saber qué hay abajo sigue siendo única." }
    ]
  }
];

function renderizarCatalogo() {
  const catalogo = document.querySelector('#catalogo-productos');
  const paginacion = document.querySelector('#paginacion-productos');

  if (!catalogo) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  const busqueda = (parametros.get('buscar') || '').trim();
  const filtroSolicitado = parametros.get('filtro') || '*';
  const paginaSolicitada = Number.parseInt(parametros.get('pagina') || '1', 10);
  const productosPorPagina = 8;
  const infoBusqueda = document.querySelector('#busqueda-info');
  const escaparHtml = (texto) => texto.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);

  let productosAMostrar = productos;
  if (busqueda !== '') {
    const termino = busqueda.toLowerCase();
    productosAMostrar = productos.filter((producto) => producto.nombre.toLowerCase().includes(termino));
    const busquedaSegura = escaparHtml(busqueda);

    if (infoBusqueda) {
      infoBusqueda.innerHTML = `
        <p class="busqueda-resultado">
          ${productosAMostrar.length > 0
            ? `Resultados para "<strong>${busquedaSegura}</strong>" (${productosAMostrar.length})`
            : `No encontramos resultados para "<strong>${busquedaSegura}</strong>"`}
          — <a href="producto.html">ver catálogo completo</a>
        </p>
      `;
    }
  } else if (infoBusqueda) {
    infoBusqueda.innerHTML = '';
  }

  if (filtroSolicitado !== '*') {
    productosAMostrar = productosAMostrar.filter((producto) => producto.filtro === filtroSolicitado);
  }

  const totalPaginas = Math.max(1, Math.ceil(productosAMostrar.length / productosPorPagina));
  const paginaActual = Math.min(Math.max(Number.isNaN(paginaSolicitada) ? 1 : paginaSolicitada, 1), totalPaginas);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosDePagina = productosAMostrar.slice(inicio, inicio + productosPorPagina);

  if (productosAMostrar.length === 0) {
    catalogo.innerHTML = '';
    if (paginacion) {
      paginacion.innerHTML = '';
    }
    return;
  }

  catalogo.innerHTML = productosDePagina.map((producto) => {
    const precio = producto.esGratis
      ? '<span class="precio">Gratis</span>'
      : `<span class="precio">$${producto.precio.toLocaleString('es-CL')}</span>`;

    return `
      <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items ${producto.filtro}">
        <div class="item">
          <div class="thumb">
            <a href="detalle-producto.html?id=${producto.id}">
              <img src="${producto.imagen}" alt="Portada de ${producto.nombre}"${producto.posicionCard ? ` style="object-position: ${producto.posicionCard};"` : ''}>
            </a>
            ${precio}
          </div>
          <div class="down-content">
            <span class="category">${producto.categoria}</span>
            <h4>${producto.nombre}</h4>
            <a href="detalle-producto.html?id=${producto.id}"><i class="fa fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (!paginacion) {
    return;
  }

  const parametrosPaginacion = [
    filtroSolicitado !== '*' ? `filtro=${encodeURIComponent(filtroSolicitado)}` : '',
    busqueda ? `buscar=${encodeURIComponent(busqueda)}` : ''
  ].filter(Boolean).join('&');
  const separadorParametros = parametrosPaginacion ? '&' : '';
  const crearEnlacePagina = (pagina, etiqueta, esActiva = false, deshabilitado = false) => `
    <li class="${deshabilitado ? 'disabled' : ''}">
      <a class="${esActiva ? 'is_active' : ''}" href="producto.html?pagina=${pagina}${separadorParametros}${parametrosPaginacion}" data-pagina="${pagina}"${esActiva ? ' aria-current="page"' : ''}${deshabilitado ? ' aria-disabled="true"' : ''}>${etiqueta}</a>
    </li>
  `;

  paginacion.innerHTML = [
    crearEnlacePagina(Math.max(1, paginaActual - 1), '&lt;', false, paginaActual === 1),
    ...Array.from({ length: totalPaginas }, (_, indice) => {
      const pagina = indice + 1;
      return crearEnlacePagina(pagina, pagina, pagina === paginaActual);
    }),
    crearEnlacePagina(Math.min(totalPaginas, paginaActual + 1), '&gt;', false, paginaActual === totalPaginas)
  ].join('');

  paginacion.querySelectorAll('a[data-pagina]').forEach((enlace) => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      if (!enlace.parentElement.classList.contains('disabled')) {
        const nuevaUrl = new URL(enlace.href, window.location.href);
        window.history.pushState({}, '', nuevaUrl);
        renderizarCatalogo();
        window.scrollTo({ top: document.querySelector('.trending').offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // Solo marcamos cuál está activo: los botones de filtro son HTML fijo,
  // así que sus listeners se registran una sola vez en activarFiltros().
  const filtros = document.querySelector('.trending-filter');
  if (filtros) {
    filtros.querySelectorAll('a[data-filter]').forEach((enlace) => {
      enlace.classList.toggle('is_active', enlace.dataset.filter === filtroSolicitado);
    });
  }
}

// Se llama UNA vez al cargar la página. Si esto viviera dentro de
// renderizarCatalogo() se acumularía un listener nuevo en cada render.
function activarFiltros() {
  const filtros = document.querySelector('.trending-filter');

  if (!filtros) {
    return;
  }

  filtros.querySelectorAll('a[data-filter]').forEach((enlace) => {
    const filtro = enlace.dataset.filter;
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      const nuevaUrl = new URL(window.location.href);
      nuevaUrl.searchParams.delete('pagina');
      nuevaUrl.searchParams.delete('filtro');
      if (filtro !== '*') {
        nuevaUrl.searchParams.set('filtro', filtro);
      }
      window.history.pushState({}, '', nuevaUrl);
      renderizarCatalogo();
      window.scrollTo({ top: document.querySelector('.trending').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

renderizarCatalogo();
activarFiltros();
window.addEventListener('popstate', renderizarCatalogo);
