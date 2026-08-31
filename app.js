// Configuración del Negocio
const PHONE_NUMBER = "5215542721803";

// Catálogo Oficial Completo - Alquiladora GM
const productos = [
    // ==================== LONAS BLANCAS ====================
    { id: 1, nombre: "Lona Blanca 5 x 6 m", categoria: "Lonas y Carpas", precio: 800, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca uso rudo impermeable de 5x6m. Incluye estructura y montaje." },
    { id: 2, nombre: "Lona Blanca 8 x 7 m", categoria: "Lonas y Carpas", precio: 1200, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca impermeable de 8x7m. Estructura y montaje incluidos." },
    { id: 3, nombre: "Lona Blanca 10 x 6 m", categoria: "Lonas y Carpas", precio: 1400, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca impermeable de 10x6m para eventos medianos." },
    { id: 4, nombre: "Lona Blanca 10 x 8 m", categoria: "Lonas y Carpas", precio: 1700, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca impermeable de 10x8m. Excelente cobertura." },
    { id: 5, nombre: "Lona Blanca 10 x 10 m", categoria: "Lonas y Carpas", precio: 1900, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca de 10x10m (100 m² de sombra)." },
    { id: 6, nombre: "Lona Blanca 10 x 12 m", categoria: "Lonas y Carpas", precio: 2800, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca de gran formato 10x12m." },
    { id: 7, nombre: "Lona Blanca 10 x 15 m", categoria: "Lonas y Carpas", precio: 3000, fotos: ["img/lona.jpg", "img/evento_lona_blanca_completo.jpg"], desc: "Lona blanca máxima capacidad de 10x15m (150 m²)." },

    // ==================== CARPAS ESTRUCTURALES ====================
    { id: 11, nombre: "Carpa Estructura 5 x 3 m", categoria: "Lonas y Carpas", precio: 1500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg", "img/carpa_estructura3.jpg"], desc: "Carpa modular tipo domo/árabe de 5x3m." },
    { id: 12, nombre: "Carpa Estructura 5 x 4 m", categoria: "Lonas y Carpas", precio: 1500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa elegante tipo domo/árabe de 5x4m." },
    { id: 13, nombre: "Carpa Estructura 5 x 5 m", categoria: "Lonas y Carpas", precio: 1500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa cuadrada de 5x5m con estructura profesional." },
    { id: 14, nombre: "Carpa Estructura 6 x 4 m", categoria: "Lonas y Carpas", precio: 1600, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x4m." },
    { id: 15, nombre: "Carpa Estructura 6 x 5 m", categoria: "Lonas y Carpas", precio: 1600, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x5m." },
    { id: 16, nombre: "Carpa Estructura 6 x 6 m", categoria: "Lonas y Carpas", precio: 1600, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x6m." },
    { id: 17, nombre: "Carpa Estructura 8 x 5 m", categoria: "Lonas y Carpas", precio: 2000, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 8x5m para jardín o terraza." },
    { id: 18, nombre: "Carpa Estructura 10 x 5 m", categoria: "Lonas y Carpas", precio: 2500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa amplia de 10x5m." },
    { id: 19, nombre: "Carpa Estructura 10 x 6 m", categoria: "Lonas y Carpas", precio: 2800, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x6m para banquetes." },
    { id: 20, nombre: "Carpa Estructura 10 x 8 m", categoria: "Lonas y Carpas", precio: 4000, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de gran formato 10x8m." },
    { id: 21, nombre: "Carpa Estructura 10 x 10 m", categoria: "Lonas y Carpas", precio: 5000, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x10m (100 m²)." },
    { id: 22, nombre: "Carpa Estructura 10 x 15 m", categoria: "Lonas y Carpas", precio: 7500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa monumental de 10x15m para bodas y recepciones." },

    // ==================== MESAS Y JUEGOS ====================
    { id: 30, nombre: "Mesa Forrada Tablón c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 400, fotos: ["img/tabloon_acojina.jpeg"], desc: "Tablón 2.40x0.70m con mantel incluido y 10 sillas acojinadas." },
    { id: 31, nombre: "Mesa Forrada Redonda c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 500, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda para 10 personas con mantel y 10 sillas acojinadas." },
    { id: 32, nombre: "Mesa Forrada Cuadrada c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 550, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada 1.50x1.50m con mantel y 10 sillas acojinadas." },
    { id: 33, nombre: "Mesa Tablón c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 200, fotos: ["img/tabloon_acojina.jpeg"], desc: "Tablón rectangular de 2.40 x 0.70m con 10 sillas acojinadas." },
    { id: 34, nombre: "Mesa Tablón c/10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 450, fotos: ["img/vintage_tiffany.jpeg"], desc: "Tablón de 2.40m con 10 sillas Tiffany (blanca, dorada o chocolate)." },
    { id: 35, nombre: "Mesa Tablón c/10 Sillas Avant Garde", categoria: "Mesas y Juegos", precio: 600, fotos: ["img/avant_garden.jpeg"], desc: "Tablón de 2.40m con 10 sillas plegables Avant Garde de madera." },
    { id: 36, nombre: "Mesa Tablón c/10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 700, fotos: ["img/crossback.jpeg"], desc: "Tablón de 2.40m con 10 sillas Crossback de madera." },
    { id: 37, nombre: "Mesa Tablón Solo (2.40 x 0.70m)", categoria: "Mesas y Juegos", precio: 80, fotos: ["img/tabloon_acojina.jpeg"], desc: "Tablón rectangular solo (sin sillería)." },
    { id: 38, nombre: "Mesa Redonda c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 250, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda para 10 personas con sillas acojinadas." },
    { id: 39, nombre: "Mesa Redonda c/10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 550, fotos: ["img/redondatiffany.jpeg", "img/tiffanyDorada.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas Tiffany." },
    { id: 40, nombre: "Mesa Redonda c/10 Sillas Avant Garde", categoria: "Mesas y Juegos", precio: 700, fotos: ["img/avant_garden.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas Avant Garde." },
    { id: 41, nombre: "Mesa Redonda c/10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 800, fotos: ["img/redondacrossback.jpeg", "img/redondacrossback2.jpeg"], desc: "Mesa redonda con 10 sillas de madera Crossback." },
    { id: 42, nombre: "Mesa Redonda Sola", categoria: "Mesas y Juegos", precio: 100, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda sola sin sillería (capacidad 10 personas)." },
    { id: 43, nombre: "Mesa Infantil c/10 Sillitas", categoria: "Mesas y Juegos", precio: 150, fotos: ["img/infantil_tifany.jpeg"], desc: "Mesa infantil baja con 10 sillitas para niños." },
    { id: 44, nombre: "Mesa Infantil c/10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 350, fotos: ["img/infantil_tifany.jpeg"], desc: "Mesa infantil montada con 10 sillitas Tiffany pequeñas." },
    { id: 45, nombre: "Mesa Cuadrada c/10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 300, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada tipo imperial (1.50 x 1.50m) con 10 sillas acojinadas." },
    { id: 46, nombre: "Mesa Cuadrada c/10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 600, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial (1.50 x 1.50m) con 10 sillas Tiffany." },
    { id: 47, nombre: "Mesa Cuadrada c/10 Sillas Avant Garde", categoria: "Mesas y Juegos", precio: 750, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Avant Garde." },
    { id: 48, nombre: "Mesa Cuadrada c/10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 850, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Crossback." },
    { id: 49, nombre: "Mesa Cuadrada Sola (1.50 x 1.50m)", categoria: "Mesas y Juegos", precio: 150, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial individual." },
    { id: 50, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 400, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda con sombrilla de lona y 10 sillas acojinadas." },
    { id: 51, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 750, fotos: ["img/redondatiffany.jpeg"], desc: "Mesa redonda con sombrilla de lona y 10 sillas Tiffany." },
    { id: 52, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Avant Garde", categoria: "Mesas y Juegos", precio: 800, fotos: ["img/avant_garden.jpeg"], desc: "Mesa redonda con sombrilla de lona y 10 sillas Avant Garde." },
    { id: 53, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 900, fotos: ["img/redondacrossback.jpeg"], desc: "Mesa redonda con sombrilla de lona y 10 sillas Crossback." },
    { id: 54, nombre: "Mesa Rústica / Campirana c/10 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 1000, fotos: ["img/campirana_tifanny.jpeg"], desc: "Mesa de madera maciza barnizada con 10 sillas Tiffany." },
    { id: 55, nombre: "Mesa Rústica / Campirana c/10 Sillas Avant Garde", categoria: "Mesas y Juegos", precio: 1200, fotos: ["img/Mesa_campirana.jpeg", "img/Mesa_campirana2.jpeg"], desc: "Mesa de madera maciza con 10 sillas Avant Garde." },
    { id: 56, nombre: "Mesa Rústica / Campirana c/10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 1350, fotos: ["img/campirana_crossback.jpeg"], desc: "Mesa campirana con 10 sillas Crossback de madera natural." },
    { id: 57, nombre: "Mesa Rústica / Campirana Sola", categoria: "Mesas y Juegos", precio: 400, fotos: ["img/Mesa_campirana_sola.jpeg"], desc: "Mesa campirana de madera sólida individual." },
    { id: 58, nombre: "Mesa California c/10 Sillas Crossback", categoria: "Mesas y Juegos", precio: 2200, fotos: ["img/crossback.jpeg", "img/crossback2.jpeg"], desc: "Mesa de madera estilo California premium con 10 sillas Crossback." },
    { id: 59, nombre: "Mesa California Sola", categoria: "Mesas y Juegos", precio: 1000, fotos: ["img/Mesa_California.jpeg"], desc: "Mesa de madera estilo California individual." },
    { id: 60, nombre: "Mesa Vintage (12 personas) c/Sillas Tiffany", categoria: "Mesas y Juegos", precio: 1200, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage amplia para 12 personas con sillas Tiffany." },
    { id: 61, nombre: "Mesa de Novios o XV Años", categoria: "Mesas y Juegos", precio: 2200, fotos: ["img/bodaxv.jpeg"], desc: "Mesa principal de honor con sillón especial para novios o quinceañera." },
    { id: 62, nombre: "Mesa Periquera Vintage (4 personas)", categoria: "Mesas y Juegos", precio: 500, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa periquera alta con 4 bancos incluidos." },
    { id: 63, nombre: "Mesa Periquera Vintage (6 personas)", categoria: "Mesas y Juegos", precio: 1200, fotos: ["img/Periquera_vintage.jpeg"], desc: "Mesa periquera alta de madera con 6 bancos." },
    { id: 64, nombre: "Mesa Periquera Vintage (8 personas)", categoria: "Mesas y Juegos", precio: 800, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa periquera alta con 8 bancos." },
    { id: 65, nombre: "Periquera Negra de 6 Bancos", categoria: "Mesas y Juegos", precio: 1100, fotos: ["img/Periquera_negra.jpeg", "img/Periquera_negra2.jpeg", "img/Periquera_negra3.jpeg"], desc: "Juego de mesa alta con acabado negro y 6 bancos." },
    { id: 66, nombre: "Mesa Periquera Sola", categoria: "Mesas y Juegos", precio: 350, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa periquera individual sin bancos." },
    { id: 67, nombre: "Mesa Bar c/4 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 180, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa tipo bar con 4 sillas acojinadas." },
    { id: 68, nombre: "Mesa Bar c/4 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa tipo bar con 4 sillas Tiffany." },
    { id: 69, nombre: "Mesa Bar Sola", categoria: "Mesas y Juegos", precio: 80, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa tipo bar sola." },
    { id: 70, nombre: "Mesa Brich c/4 Sillas Acojinadas", categoria: "Mesas y Juegos", precio: 180, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa tipo brich con 4 sillas acojinadas." },
    { id: 71, nombre: "Mesa Brich c/4 Sillas Tiffany", categoria: "Mesas y Juegos", precio: 400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa tipo brich con 4 sillas Tiffany." },
    { id: 72, nombre: "Mesa Brich Sola", categoria: "Mesas y Juegos", precio: 80, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa tipo brich sola." },
    { id: 73, nombre: "Sala Lounge (10 piezas)", categoria: "Mesas y Juegos", precio: 1000, fotos: ["img/sala_lounge.jpeg"], desc: "Juego completo tipo lounge con módulos acojinados, taburetes y mesa de centro para 10 personas." },

    // ==================== SILLAS ====================
    { id: 80, nombre: "Silla Acojinada", categoria: "Sillas", precio: 15, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Precio por pieza. Silla plegable de vinil acojinada." },
    { id: 81, nombre: "Silla Tiffany (Blanca, Dorada o Chocolate)", categoria: "Sillas", precio: 40, fotos: ["img/Silla_tiffany_dorada.jpeg", "img/tiffanyDorada.jpeg"], desc: "Precio por pieza. Incluye cojín tapizado." },
    { id: 82, nombre: "Silla Avant Garde", categoria: "Sillas", precio: 60, fotos: ["img/avant_garden.jpeg"], desc: "Precio por pieza. Silla plegable de madera blanca." },
    { id: 83, nombre: "Silla Cross Back", categoria: "Sillas", precio: 75, fotos: ["img/Silla_crossback.jpeg"], desc: "Precio por pieza. Silla de madera rústica con respaldo en X." },

    // ==================== MANTELERÍA ====================
    { id: 90, nombre: "Mantel Tablón Blanco", categoria: "Mantelería", precio: 35, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel rectangular blanco para tablón de 2.40m." },
    { id: 91, nombre: "Mantel Redondo Blanco", categoria: "Mantelería", precio: 45, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mantel blanco circular para mesa redonda." },
    { id: 92, nombre: "Cubremantel", categoria: "Mantelería", precio: 35, fotos: ["img/redondatiffany.jpeg"], desc: "Cubremantel cuadrado para sobreponer (varios colores)." },
    { id: 93, nombre: "Mantel de Color Redondo", categoria: "Mantelería", precio: 50, fotos: ["img/redondatiffany.jpeg"], desc: "Mantel circular en diversos colores a elegir." },
    { id: 94, nombre: "Mantel de Color Tablón", categoria: "Mantelería", precio: 40, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel rectangular en diversos colores a elegir." },
    { id: 95, nombre: "Mantel Versalles de Lujo", categoria: "Mantelería", precio: 150, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mantel con diseño y textura fina de gala." },
    { id: 96, nombre: "Servilleta de Tela (c/u)", categoria: "Mantelería", precio: 7, fotos: ["img/cubiertos.jpeg"], desc: "Servilleta de tela lavada y planchada." },
    { id: 97, nombre: "Bambalinas", categoria: "Mantelería", precio: 200, fotos: ["img/tabloon_acojina.jpeg"], desc: "Faldón perimetral decorativo para mesas principales." },
    { id: 98, nombre: "Funda para Sillas", categoria: "Mantelería", precio: 15, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Funda de tela blanca adaptable a silla acojinada." },
    { id: 99, nombre: "Banda / Moño para Sillas", categoria: "Mantelería", precio: 10, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Banda de color para respaldo de silla." },
    { id: 100, nombre: "Camino de Mesa", categoria: "Mantelería", precio: 50, fotos: ["img/campirana_crossback.jpeg"], desc: "Tira central decorativa de tela para mesas." },
    { id: 101, nombre: "Mantel Mesa Bar", categoria: "Mantelería", precio: 30, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel ajustable especial para mesa coctelera o de bar." },

    // ==================== CRISTALERÍA ====================
    { id: 110, nombre: "Plato Trinche", categoria: "Cristalería", precio: 10, fotos: ["img/Plato_trinche.jpeg"], desc: "Precio por pieza. Plato plano para plato fuerte." },
    { id: 111, nombre: "Plato Postre / Pastelero / Hondo", categoria: "Cristalería", precio: 10, fotos: ["img/Plato_trinche.jpeg"], desc: "Precio por pieza a elegir." },
    { id: 112, nombre: "Cubiertos de Acero (Tenedor/Cuchara/Cuchillo)", categoria: "Cristalería", precio: 5, fotos: ["img/cubiertos.jpeg"], desc: "Precio por pieza individual en acero inoxidable." },
    { id: 113, nombre: "Cubiertos Dorados", categoria: "Cristalería", precio: 9, fotos: ["img/cubiertos_dorados.jpeg"], desc: "Precio por pieza individual con acabado oro fino." },
    { id: 114, nombre: "Vaso de Vidrio", categoria: "Cristalería", precio: 8, fotos: ["img/vaso.jpeg"], desc: "Vaso de vidrio cristalino estándar." },
    { id: 115, nombre: "Vaso Old Fashioned", categoria: "Cristalería", precio: 12, fotos: ["img/Caso_oldfashon.jpeg"], desc: "Vaso bajo tipo rocas para whisky o licores." },
    { id: 116, nombre: "Copa de Cristal Estándar", categoria: "Cristalería", precio: 15, fotos: ["img/Copa_Globo.jpeg"], desc: "Copa tradicional para agua o vino." },
    { id: 117, nombre: "Copa Globo", categoria: "Cristalería", precio: 20, fotos: ["img/Copa_Globo.jpeg"], desc: "Copa amplia tipo balón para coctelería o vino tinto." },
    { id: 118, nombre: "Copa de Color Azul Cobalto", categoria: "Cristalería", precio: 20, fotos: ["img/copa_color.jpeg"], desc: "Copa labrada de cristal en color azul cobalto." },
    { id: 119, nombre: "Copa de Color Rosa Púrpura", categoria: "Cristalería", precio: 20, fotos: ["img/copa_color_Rosa_Purpura.jpeg", "img/copa_color_Rosa_Purpura2.jpeg"], desc: "Copa labrada en cristal tono rosa púrpura." },
    { id: 120, nombre: "Copa de Color Humo", categoria: "Cristalería", precio: 20, fotos: ["img/copa_color_Humo.jpeg"], desc: "Copa en cristal color humo elegante." },
    { id: 121, nombre: "Copa Color Amarillo", categoria: "Cristalería", precio: 20, fotos: ["img/copa_color.jpeg"], desc: "Copa labrada en cristal amarillo ámbar." },
    { id: 122, nombre: "Taza con Plato para Café", categoria: "Cristalería", precio: 15, fotos: ["img/Taza_con_plato.jpeg"], desc: "Juego de taza de cerámica con platillo." },
    { id: 123, nombre: "Portasobres", categoria: "Cristalería", precio: 15, fotos: ["img/vaso.jpeg"], desc: "Recipiente de mesa para sobres de azúcar y té." },
    { id: 124, nombre: "Cenicero de Vidrio", categoria: "Cristalería", precio: 15, fotos: ["img/vaso.jpeg"], desc: "Cenicero de cristal grueso para mesas." },
    { id: 125, nombre: "Chafer / Bufetera", categoria: "Cristalería", precio: 300, fotos: ["img/Plato_trinche.jpeg"], desc: "Mantenedor térmico de alimentos a baño maría con quemadores." },
    { id: 126, nombre: "Charola de Servicio", categoria: "Cristalería", precio: 50, fotos: ["img/cubiertos.jpeg"], desc: "Charola antiderrapante para mesero." },
    { id: 127, nombre: "Cafetera Industrial", categoria: "Cristalería", precio: 350, fotos: ["img/Taza_con_plato.jpeg"], desc: "Cafetera percoladora de alta capacidad para eventos." },

    // ==================== EQUIPO Y SERVICIOS ====================
    { id: 140, nombre: "Calentador Ambiental para Exterior", categoria: "Equipo y Servicios", precio: 1000, fotos: ["img/lona.jpg"], desc: "Calentador tipo hongo a gas para jardín o terraza." },
    { id: 141, nombre: "Sombrilla Sola", categoria: "Equipo y Servicios", precio: 200, fotos: ["img/redonda_acojinada.jpeg"], desc: "Sombrilla individual para intemperie con base firme." },
    { id: 142, nombre: "Hielera Grande", categoria: "Equipo y Servicios", precio: 250, fotos: ["img/vaso.jpeg"], desc: "Hielera térmica de gran volumen para bebidas." },
    { id: 143, nombre: "Reflector de Iluminación", categoria: "Equipo y Servicios", precio: 200, fotos: ["img/carpa_estructura.jpg"], desc: "Reflector LED de alta potencia para áreas oscuras." },
    { id: 144, nombre: "Bocina Bluetooth Profesional", categoria: "Equipo y Servicios", precio: 800, fotos: ["img/carpa_estructura.jpg"], desc: "Bafle de audio amplificado con conexión Bluetooth y tripié." },
    { id: 145, nombre: "Servicio de Mesero (5 horas)", categoria: "Equipo y Servicios", precio: 500, fotos: ["img/cubiertos.jpeg"], desc: "Personal de servicio capacitado y uniformado por 5 horas." },
    { id: 146, nombre: "Asador Grande", categoria: "Equipo y Servicios", precio: 600, fotos: ["img/Mesa_campirana_sola.jpeg"], desc: "Asador amplio para parrilladas y eventos." },
    { id: 147, nombre: "Mesa de Futbolito", categoria: "Equipo y Servicios", precio: 1000, fotos: ["img/infantil_tifany.jpeg"], desc: "Mesa de futbolito profesional para entretenimiento de invitados." },

    // ==================== PISOS Y PISTAS ====================
    { id: 160, nombre: "Tarima de Madera (1.25 x 1.25 m)", categoria: "Pisos y Pistas", precio: 50, fotos: ["img/Mesa_California.jpeg"], desc: "Módulo de tarima nivelada de 1.25 x 1.25 m (precio por módulo)." },
    { id: 161, nombre: "Pista Iluminada LED (1.25 x 1.25 m)", categoria: "Pisos y Pistas", precio: 350, fotos: ["img/bodaxv.jpeg"], desc: "Módulo de pista de baile acrílica con luces LED programables (precio por módulo)." }
];

let categoriaActual = "Todos";
let productoModalActual = null;
let indiceFotoActual = 0;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
});

function filtrarCategoria(categoria) {
    categoriaActual = categoria;
    document.querySelectorAll(".cat-btn").forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === categoria.toLowerCase() || (categoria === "Todos" && btn.textContent.trim() === "Todos")) {
            btn.className = "cat-btn active bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm";
        } else {
            btn.className = "cat-btn bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-300 transition";
        }
    });
    renderCatalog();
}

function renderCatalog() {
    const grid = document.getElementById("catalog-grid");
    const prodsFiltrados = categoriaActual === "Todos"
        ? productos
        : productos.filter(p => p.categoria === categoriaActual);

    grid.innerHTML = prodsFiltrados.map(prod => {
        const fotoPrincipal = (prod.fotos && prod.fotos.length > 0 && prod.fotos[0] !== "img/") ? prod.fotos[0] : "img/placeholder.jpg";

        return `
      <div onclick="abrirDetalle(${prod.id})" class="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden hover:shadow-md transition cursor-pointer flex flex-col justify-between group">
        <div class="relative overflow-hidden h-44">
          <img src="${fotoPrincipal}" alt="${prod.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.src='https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&q=80'">
          <span class="absolute top-2 right-2 bg-blue-700/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            ${prod.categoria}
          </span>
          ${prod.fotos && prod.fotos.length > 1 ? `
            <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <i class="fas fa-images"></i> ${prod.fotos.length}
            </span>
          ` : ''}
        </div>
        <div class="p-4 text-center">
          <h4 class="font-bold text-gray-800 text-sm leading-tight group-hover:text-blue-600 transition">${prod.nombre}</h4>
          <p class="text-blue-600 font-extrabold text-base mt-2">$${prod.precio.toLocaleString()} MXN</p>
        </div>
      </div>
    `;
    }).join('');
}

// ==================== MODAL / CARRUSEL ====================
function abrirDetalle(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;

    productoModalActual = prod;
    indiceFotoActual = 0;

    document.getElementById("modal-cat").textContent = prod.categoria;
    document.getElementById("modal-title").textContent = prod.nombre;
    document.getElementById("modal-price").textContent = `$${prod.precio.toLocaleString()} MXN`;
    document.getElementById("modal-desc").textContent = prod.desc || "Consulta disponibilidad, medidas y flete por WhatsApp.";

    actualizarFotoCarrusel();
    document.getElementById("product-modal").classList.remove("hidden");
}

function cerrarDetalle() {
    document.getElementById("product-modal").classList.add("hidden");
    productoModalActual = null;
}

function cambiarFotoCarrusel(direccion) {
    if (!productoModalActual || !productoModalActual.fotos) return;
    const total = productoModalActual.fotos.length;
    indiceFotoActual = (indiceFotoActual + direccion + total) % total;
    actualizarFotoCarrusel();
}

function actualizarFotoCarrusel() {
    const fotosValidas = productoModalActual.fotos && productoModalActual.fotos.length > 0 && productoModalActual.fotos[0] !== "img/"
        ? productoModalActual.fotos
        : ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80"];

    const imgEl = document.getElementById("carousel-img");
    imgEl.src = fotosValidas[indiceFotoActual];
    imgEl.onerror = () => { imgEl.src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80"; };

    const counterEl = document.getElementById("carousel-counter");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    counterEl.textContent = `${indiceFotoActual + 1} / ${fotosValidas.length}`;

    if (fotosValidas.length <= 1) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        counterEl.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
        counterEl.classList.remove("hidden");
    }
}