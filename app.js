// Configuración del Negocio
const PHONE_NUMBER = "5215542721803";

// Catálogo Oficial Completo - Alquiladora Padierna GM (Precios Actualizados)
const productos = [
    // ==================== 1. CARPAS ====================
    { id: 10, nombre: "Carpa Estructura 3 x 3 m", categoria: "Carpas", precio: 1500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa modular tipo domo de 3x3m para accesos o stands." },
    { id: 11, nombre: "Carpa Estructura 5 x 3 m", categoria: "Carpas", precio: 1800, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg", "img/carpa_estructura3.jpg"], desc: "Carpa modular tipo domo/árabe de 5x3m." },
    { id: 12, nombre: "Carpa Estructura 5 x 4 m", categoria: "Carpas", precio: 1800, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa elegante tipo domo/árabe de 5x4m." },
    { id: 13, nombre: "Carpa Estructura 5 x 5 m", categoria: "Carpas", precio: 2200, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa cuadrada de 5x5m con estructura profesional." },
    { id: 14, nombre: "Carpa Estructura 6 x 3 m", categoria: "Carpas", precio: 2200, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x3m." },
    { id: 15, nombre: "Carpa Estructura 6 x 4 m", categoria: "Carpas", precio: 2200, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x4m." },
    { id: 16, nombre: "Carpa Estructura 6 x 5 m", categoria: "Carpas", precio: 2200, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x5m." },
    { id: 17, nombre: "Carpa Estructura 6 x 6 m", categoria: "Carpas", precio: 2400, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 6x6m." },
    { id: 18, nombre: "Carpa Estructura 8 x 3 m", categoria: "Carpas", precio: 2500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 8x3m." },
    { id: 19, nombre: "Carpa Estructura 8 x 4 m", categoria: "Carpas", precio: 2500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 8x4m." },
    { id: 20, nombre: "Carpa Estructura 8 x 5 m", categoria: "Carpas", precio: 2500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 8x5m para jardín o terraza." },
    { id: 21, nombre: "Carpa Estructura 8 x 6 m", categoria: "Carpas", precio: 3200, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 8x6m." },
    { id: 22, nombre: "Carpa Estructura 10 x 3 m", categoria: "Carpas", precio: 3300, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x3m." },
    { id: 23, nombre: "Carpa Estructura 10 x 4 m", categoria: "Carpas", precio: 3300, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x4m." },
    { id: 24, nombre: "Carpa Estructura 10 x 5 m", categoria: "Carpas", precio: 3300, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa amplia de 10x5m." },
    { id: 25, nombre: "Carpa Estructura 10 x 6 m", categoria: "Carpas", precio: 3300, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x6m para banquetes." },
    { id: 26, nombre: "Carpa Estructura 10 x 8 m", categoria: "Carpas", precio: 4500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de gran formato 10x8m." },
    { id: 27, nombre: "Carpa Estructura 10 x 10 m", categoria: "Carpas", precio: 6000, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa estructural de 10x10m (100 m²)." },
    { id: 28, nombre: "Carpa Estructura 10 x 15 m", categoria: "Carpas", precio: 9500, fotos: ["img/carpa_estructura.jpg", "img/carpa_estructura2.jpg"], desc: "Carpa monumental de 10x15m para bodas y recepciones." },

    // ==================== 2. MESAS Y SILLAS ====================
    // --- Mesas Tablón ---
    { id: 30, nombre: "Mesa Tablón Solo (2.40 x 0.70m)", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/tabloon_acojina.jpeg"], desc: "Tablón rectangular solo (sin sillería)." },
    { id: 31, nombre: "Mesa Tablón c/10 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 300, fotos: ["img/tabloon_acojina.jpeg"], desc: "Tablón rectangular de 2.40 x 0.70m con 10 sillas acojinadas." },
    { id: 32, nombre: "Mesa Tablón c/10 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 550, fotos: ["img/vintage_tiffany.jpeg"], desc: "Tablón de 2.40m con 10 sillas Tiffany blancas." },
    { id: 33, nombre: "Mesa Tablón c/10 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 650, fotos: ["img/tiffanyDorada.jpeg"], desc: "Tablón de 2.40m con 10 sillas Tiffany doradas." },
    { id: 34, nombre: "Mesa Tablón c/10 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 800, fotos: ["img/vintage_tiffany.jpeg"], desc: "Tablón de 2.40m con 10 sillas Tiffany negras." },
    { id: 35, nombre: "Mesa Tablón c/10 Sillas Avant Garden", categoria: "Mesas y Sillas", precio: 700, fotos: ["img/avant_garden.jpeg"], desc: "Tablón con 10 sillas plegables Avant Garden de madera." },
    { id: 36, nombre: "Mesa Tablón c/10 Sillas Crossback", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/crossback.jpeg"], desc: "Tablón con 10 sillas Crossback de madera natural." },
    { id: 37, nombre: "Mesa Tablón Vestida", categoria: "Mesas y Sillas", precio: 400, fotos: ["img/tabloon_acojina.jpeg"], desc: "Incluye mantel blanco, banda de color, cubremantel, funda blanca para sillas y 10 sillas acojinadas." },

    // --- Mesas Redondas ---
    { id: 40, nombre: "Mesa Redonda Sola (1.50 m)", categoria: "Mesas y Sillas", precio: 150, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda sola sin sillas (capacidad 10 personas)." },
    { id: 41, nombre: "Mesa Redonda c/10 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 350, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas acojinadas." },
    { id: 42, nombre: "Mesa Redonda c/10 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/redondatiffany.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas Tiffany blancas." },
    { id: 43, nombre: "Mesa Redonda c/10 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 700, fotos: ["img/tiffanyDorada.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas Tiffany doradas." },
    { id: 44, nombre: "Mesa Redonda c/10 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 850, fotos: ["img/redondatiffany.jpeg"], desc: "Mesa redonda con 10 sillas Tiffany negras." },
    { id: 45, nombre: "Mesa Redonda c/10 Sillas Avant Garden", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/avant_garden.jpeg"], desc: "Mesa redonda para 10 personas con 10 sillas Avant Garden." },
    { id: 46, nombre: "Mesa Redonda c/10 Sillas Crossback", categoria: "Mesas y Sillas", precio: 1000, fotos: ["img/redondacrossback.jpeg", "img/redondacrossback2.jpeg"], desc: "Mesa redonda con 10 sillas de madera Crossback." },
    { id: 47, nombre: "Mesa Redonda Vestida", categoria: "Mesas y Sillas", precio: 450, fotos: ["img/redonda_acojinada.jpeg"], desc: "Incluye mantel blanco, banda de color, cubremantel, funda blanca para sillas y 10 sillas acojinadas." },

    // --- Mesas Redondas con Sombrilla ---
    { id: 50, nombre: "Mesa Redonda c/Sombrilla s/Sillas", categoria: "Mesas y Sillas", precio: 350, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda con sombrilla integrada (sin sillas)." },
    { id: 51, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas acojinadas." },
    { id: 52, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 800, fotos: ["img/redondatiffany.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas Tiffany blancas." },
    { id: 53, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/tiffanyDorada.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas Tiffany doradas." },
    { id: 54, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 1000, fotos: ["img/redondatiffany.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas Tiffany negras." },
    { id: 55, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Avant Garden", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/avant_garden.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas Avant Garden." },
    { id: 56, nombre: "Mesa Redonda c/Sombrilla y 10 Sillas Crossback", categoria: "Mesas y Sillas", precio: 1100, fotos: ["img/redondacrossback.jpeg"], desc: "Mesa redonda con sombrilla y 10 sillas Crossback." },
    { id: 57, nombre: "Sombrilla con Base", categoria: "Mesas y Sillas", precio: 250, fotos: ["img/sombrilla.jpg", "img/sombrilla 2.jpg"], desc: "Sombrilla individual para exterior incluye su base firme." },
    { id: 58, nombre: "Base de Sombrilla", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/sombrilla.jpg"], desc: "Base firme para sombrilla individual." },

    // --- Mesas Cuadradas ---
    { id: 60, nombre: "Mesa Cuadrada Sola (1.50 x 1.50m)", categoria: "Mesas y Sillas", precio: 250, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada tipo imperial de 1.50 x 1.50m sola." },
    { id: 61, nombre: "Mesa Cuadrada c/10 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas acojinadas." },
    { id: 62, nombre: "Mesa Cuadrada c/10 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Tiffany blancas." },
    { id: 63, nombre: "Mesa Cuadrada c/10 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 1000, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Tiffany doradas." },
    { id: 64, nombre: "Mesa Cuadrada c/10 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 1100, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Tiffany negras." },
    { id: 65, nombre: "Mesa Cuadrada c/10 Sillas Avant Garden", categoria: "Mesas y Sillas", precio: 1100, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Avant Garden." },
    { id: 66, nombre: "Mesa Cuadrada c/10 Sillas Crossback", categoria: "Mesas y Sillas", precio: 1400, fotos: ["img/cuadrada_tifany.jpeg"], desc: "Mesa cuadrada imperial con 10 sillas Crossback." },

    // --- Mesa Rústica o Campirana ---
    { id: 70, nombre: "Mesa Rústica Sola (1.00 x 2.44m)", categoria: "Mesas y Sillas", precio: 800, fotos: ["img/Mesa_campirana_sola.jpeg"], desc: "Mesa rústica de madera sólida de 1.00 x 2.44m individual." },
    { id: 71, nombre: "Mesa Rústica / Campirana c/10 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 1400, fotos: ["img/campirana_tifanny.jpeg"], desc: "Mesa de madera maciza con 10 sillas Tiffany blancas. Incluye camino de mesa a elegir." },
    { id: 72, nombre: "Mesa Rústica / Campirana c/10 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 1500, fotos: ["img/campirana_tifanny.jpeg"], desc: "Mesa de madera maciza con 10 sillas Tiffany doradas. Incluye camino de mesa a elegir." },
    { id: 73, nombre: "Mesa Rústica / Campirana c/10 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 1600, fotos: ["img/campirana_tifanny.jpeg"], desc: "Mesa de madera maciza con 10 sillas Tiffany negras. Incluye camino de mesa a elegir." },
    { id: 74, nombre: "Mesa Rústica / Campirana c/10 Sillas Avant Garden", categoria: "Mesas y Sillas", precio: 1500, fotos: ["img/Mesa_campirana.jpeg", "img/Mesa_campirana2.jpeg"], desc: "Mesa rústica con 10 sillas Avant Garden. Incluye camino de mesa a elegir." },
    { id: 75, nombre: "Mesa Rústica / Campirana c/10 Sillas Crossback", categoria: "Mesas y Sillas", precio: 1700, fotos: ["img/campirana_crossback.jpeg"], desc: "Mesa rústica con 10 sillas Crossback. Incluye camino de mesa a elegir." },

    // --- Mesas Vintage ---
    { id: 80, nombre: "Mesa Vintage Rectangular 12p (1.22x2.44m) c/Tiffany Blanca", categoria: "Mesas y Sillas", precio: 1400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 1.22x2.44m para 12 personas con sillas Tiffany blancas." },
    { id: 81, nombre: "Mesa Vintage Rectangular 12p (1.22x2.44m) c/Tiffany Dorada", categoria: "Mesas y Sillas", precio: 1500, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 1.22x2.44m para 12 personas con sillas Tiffany doradas." },
    { id: 82, nombre: "Mesa Vintage Rectangular 12p (1.22x2.44m) c/Tiffany Negra", categoria: "Mesas y Sillas", precio: 1600, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 1.22x2.44m para 12 personas con sillas Tiffany negras." },
    { id: 83, nombre: "Mesa Vintage Cuadrada 12p (1.70x1.70m) c/Tiffany Blanca", categoria: "Mesas y Sillas", precio: 1400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage cuadrada para 12 personas con sillas Tiffany blancas." },
    { id: 84, nombre: "Mesa Vintage Cuadrada 12p (1.70x1.70m) c/Tiffany Dorada", categoria: "Mesas y Sillas", precio: 1500, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage cuadrada para 12 personas con sillas Tiffany doradas." },
    { id: 85, nombre: "Mesa Vintage Cuadrada 12p (1.70x1.70m) c/Tiffany Negra", categoria: "Mesas y Sillas", precio: 1600, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage cuadrada para 12 personas con sillas Tiffany negras." },
    { id: 86, nombre: "Mesa Vintage Rectangular 10p (0.75x2.44m) c/Tiffany Blanca", categoria: "Mesas y Sillas", precio: 1200, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 0.75x2.44m para 10 personas con sillas Tiffany blancas." },
    { id: 87, nombre: "Mesa Vintage Rectangular 10p (0.75x2.44m) c/Tiffany Dorada", categoria: "Mesas y Sillas", precio: 1300, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 0.75x2.44m para 10 personas con sillas Tiffany doradas." },
    { id: 88, nombre: "Mesa Vintage Rectangular 10p (0.75x2.44m) c/Tiffany Negra", categoria: "Mesas y Sillas", precio: 1400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa vintage de 0.75x2.44m para 10 personas con sillas Tiffany negras." },

    // --- Mesas Periqueras ---
    { id: 90, nombre: "Mesa Periquera Sola (4p - 60x60cm)", categoria: "Mesas y Sillas", precio: 350, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa alta individual de 60x60cm para 4 personas." },
    { id: 91, nombre: "Mesa Periquera Sola (6 u 8p - 1.60x0.65m)", categoria: "Mesas y Sillas", precio: 500, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa alta periquera de 1.60x0.65m para 6 u 8 personas." },
    { id: 92, nombre: "Banco para Periquera Solo", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/periqueraCN.jpeg"], desc: "Banco alto individual para mesa periquera." },
    { id: 93, nombre: "Mesa Periquera Vintage / Campirana (4 personas)", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa periquera rústica con 4 bancos incluidos." },
    { id: 94, nombre: "Mesa Periquera Negra (4 personas)", categoria: "Mesas y Sillas", precio: 700, fotos: ["img/Periquera_negra.jpeg"], desc: "Mesa periquera alta negra con 4 bancos." },
    { id: 95, nombre: "Mesa Periquera Vintage / Campirana (6 personas)", categoria: "Mesas y Sillas", precio: 750, fotos: ["img/Periquera_vintage.jpeg"], desc: "Mesa periquera de madera con 6 bancos incluidos." },
    { id: 96, nombre: "Mesa Periquera Negra (6 personas)", categoria: "Mesas y Sillas", precio: 1000, fotos: ["img/Periquera_negra.jpeg", "img/Periquera_negra2.jpeg"], desc: "Juego de mesa alta acabado negro con 6 bancos." },
    { id: 97, nombre: "Mesa Periquera Vintage / Campirana (8 personas)", categoria: "Mesas y Sillas", precio: 900, fotos: ["img/periqueraCN.jpeg"], desc: "Mesa periquera con 8 bancos de madera." },
    { id: 98, nombre: "Mesa Periquera Negra (8 personas)", categoria: "Mesas y Sillas", precio: 1200, fotos: ["img/Periquera_negra3.jpeg"], desc: "Mesa periquera alta acabado negro con 8 bancos." },

    // --- Mesas Bar y Bridge ---
    { id: 100, nombre: "Mesa Bar Sola (80cm de diámetro)", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa tipo bar redonda individual de 80cm de diámetro." },
    { id: 101, nombre: "Mesa Bar Redonda c/4 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 200, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa bar redonda con 4 sillas acojinadas." },
    { id: 102, nombre: "Mesa Bar Redonda c/4 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa bar redonda con 4 sillas Tiffany blancas." },
    { id: 103, nombre: "Mesa Bar Redonda c/4 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 500, fotos: ["img/tiffanyDorada.jpeg"], desc: "Mesa bar redonda con 4 sillas Tiffany doradas." },
    { id: 104, nombre: "Mesa Bar Redonda c/4 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa bar redonda con 4 sillas Tiffany negras." },
    { id: 105, nombre: "Mesa Bridge Sola", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa cuadrada tipo bridge sola." },
    { id: 106, nombre: "Mesa Bridge Cuadrada c/4 Sillas Acojinadas", categoria: "Mesas y Sillas", precio: 220, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mesa bridge cuadrada con 4 sillas acojinadas." },
    { id: 107, nombre: "Mesa Bridge Cuadrada c/4 Sillas Tiffany Blanca", categoria: "Mesas y Sillas", precio: 400, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa bridge cuadrada con 4 sillas Tiffany blancas." },
    { id: 108, nombre: "Mesa Bridge Cuadrada c/4 Sillas Tiffany Dorada", categoria: "Mesas y Sillas", precio: 500, fotos: ["img/tiffanyDorada.jpeg"], desc: "Mesa bridge cuadrada con 4 sillas Tiffany doradas." },
    { id: 109, nombre: "Mesa Bridge Cuadrada c/4 Sillas Tiffany Negra", categoria: "Mesas y Sillas", precio: 600, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mesa bridge cuadrada con 4 sillas Tiffany negras." },

    // --- Mesas Infantiles ---
    { id: 115, nombre: "Tabloncito Infantil c/10 Sillas Acojinadas o Plásticas", categoria: "Mesas y Sillas", precio: 250, fotos: ["img/infantil_tifany.jpeg"], desc: "Mesa infantil baja con 10 sillitas para niños." },
    { id: 116, nombre: "Tabloncito Infantil c/10 Sillas Tiffany", categoria: "Mesas y Sillas", precio: 400, fotos: ["img/infantil_tifany.jpeg"], desc: "Mesa infantil baja con 10 sillitas Tiffany." },
    { id: 117, nombre: "Silla Infantil Sola", categoria: "Mesas y Sillas", precio: 10, fotos: ["img/infantil_tifany.jpeg"], desc: "Sillita individual para niños (acojinada o plástica)." },
    { id: 118, nombre: "Silla Tiffany Infantil (pza)", categoria: "Mesas y Sillas", precio: 35, fotos: ["img/infantil_tifany.jpeg"], desc: "Sillita individual Tiffany tamaño infantil." },

    // --- Sillas Solas ---
    { id: 120, nombre: "Silla Acojinada", categoria: "Mesas y Sillas", precio: 25, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Precio por pieza. Silla plegable con asiento y respaldo acojinado." },
    { id: 121, nombre: "Silla Tiffany Blanca", categoria: "Mesas y Sillas", precio: 45, fotos: ["img/vintage_tiffany.jpeg"], desc: "Precio por pieza. Silla Tiffany blanca incluye cojín." },
    { id: 122, nombre: "Silla Tiffany Dorada", categoria: "Mesas y Sillas", precio: 60, fotos: ["img/Silla_tiffany_dorada.jpeg", "img/tiffanyDorada.jpeg"], desc: "Precio por pieza. Silla Tiffany dorada incluye cojín." },
    { id: 123, nombre: "Silla Tiffany Negra", categoria: "Mesas y Sillas", precio: 80, fotos: ["img/vintage_tiffany.jpeg"], desc: "Precio por pieza. Silla Tiffany negra de gala incluye cojín." },
    { id: 124, nombre: "Silla Avant Garden", categoria: "Mesas y Sillas", precio: 60, fotos: ["img/avant_garden.jpeg"], desc: "Precio por pieza. Silla plegable de madera blanca con cojín." },
    { id: 125, nombre: "Silla Crossback", categoria: "Mesas y Sillas", precio: 100, fotos: ["img/Silla_crossback.jpeg"], desc: "Precio por pieza. Silla de madera rústica con respaldo cruzado en X." },

    // ==================== 3. SALA LOUNGE ====================
    { id: 130, nombre: "Sala Lounge (10 piezas)", categoria: "Sala Lounge", precio: 1500, fotos: ["img/lounge.jpg", "img/lounge (1).jpg", "img/lounge (2).jpg", "img/lounge (3).jpg", "img/lounge (4).jpg", "img/lounge (5).jpg"], desc: "Juego completo tipo lounge para 10 personas con sillones modulares, taburetes y mesa de centro iluminada." },

    // ==================== 4. LONAS ====================
    { id: 1, nombre: "Lona Blanca 5 x 6 m", categoria: "Lonas", precio: 1000, fotos: ["img/lona (12).jpg"], desc: "Lona blanca uso rudo impermeable de 5x6m. Incluye estructura y montaje." },
    { id: 2, nombre: "Lona Blanca 8 x 7 m", categoria: "Lonas", precio: 1500, fotos: ["img/lona (14).jpg"], desc: "Lona blanca impermeable de 8x7m. Estructura y montaje incluidos." },
    { id: 3, nombre: "Lona Blanca 10 x 6 m", categoria: "Lonas", precio: 1900, fotos: ["img/lona (13).jpg"], desc: "Lona blanca impermeable de 10x6m para eventos." },
    { id: 4, nombre: "Lona Blanca 10 x 8 m", categoria: "Lonas", precio: 2000, fotos: ["img/lona (15).jpg"], desc: "Lona blanca impermeable de 10x8m. Excelente cobertura." },
    { id: 5, nombre: "Lona Blanca 10 x 10 m", categoria: "Lonas", precio: 2200, fotos: ["img/lona (18).jpg"], desc: "Lona blanca de 10x10m (100 m² de sombra)." },
    { id: 6, nombre: "Lona Blanca 10 x 12 m", categoria: "Lonas", precio: 3200, fotos: ["img/lona (21).jpg"], desc: "Lona blanca de gran formato 10x12m." },
    { id: 7, nombre: "Lona Blanca 10 x 15 m", categoria: "Lonas", precio: 3500, fotos: ["img/lona (25).jpg"], desc: "Lona blanca máxima capacidad de 10x15m (150 m²)." },

    // ==================== 5. MANTELERÍA ====================
    { id: 140, nombre: "Mantel Blanco Tablón", categoria: "Mantelería", precio: 50, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel rectangular blanco para tablón de 2.40m." },
    { id: 141, nombre: "Mantel Blanco Redondo", categoria: "Mantelería", precio: 60, fotos: ["img/redonda_acojinada.jpeg"], desc: "Mantel blanco circular para mesa redonda." },
    { id: 142, nombre: "Cubremantel", categoria: "Mantelería", precio: 40, fotos: ["img/redondatiffany.jpeg"], desc: "Cubremantel cuadrado para sobreponer (varios colores a elegir)." },
    { id: 143, nombre: "Mantel de Color Tablón", categoria: "Mantelería", precio: 60, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel rectangular en diversos colores." },
    { id: 144, nombre: "Mantel de Color Redondo", categoria: "Mantelería", precio: 70, fotos: ["img/redondatiffany.jpeg"], desc: "Mantel circular en diversos colores." },
    { id: 145, nombre: "Mantel Versalles", categoria: "Mantelería", precio: 150, fotos: ["img/vintage_tiffany.jpeg"], desc: "Mantel con diseño y textura fina de gala." },
    { id: 146, nombre: "Servilleta de Tela (pza)", categoria: "Mantelería", precio: 8, fotos: ["img/cubiertos.jpeg"], desc: "Servilleta de tela lavada y planchada." },
    { id: 147, nombre: "Bambalinas", categoria: "Mantelería", precio: 200, fotos: ["img/tabloon_acojina.jpeg"], desc: "Faldón perimetral decorativo para mesas principales." },
    { id: 148, nombre: "Funda para Silla", categoria: "Mantelería", precio: 15, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Funda de tela blanca adaptable a silla." },
    { id: 149, nombre: "Banda / Moño para Sillas", categoria: "Mantelería", precio: 10, fotos: ["img/Silla_Acojinada.jpeg"], desc: "Banda de color para respaldo de silla." },
    { id: 150, nombre: "Camino para Mesa", categoria: "Mantelería", precio: 50, fotos: ["img/campirana_crossback.jpeg"], desc: "Tira central decorativa de tela para mesas." },
    { id: 151, nombre: "Mantel Mesa Bar", categoria: "Mantelería", precio: 50, fotos: ["img/tabloon_acojina.jpeg"], desc: "Mantel ajustable especial para mesa coctelera o de bar." },

    // ==================== 6. CRISTALERÍA (POR PIEZA) ====================
    { id: 160, nombre: "Platos (Trinche / Postre / Pastelero / Hondo)", categoria: "Cristalería", precio: 13, fotos: ["img/Plato_trinche.jpeg"], desc: "Precio por pieza a elegir en losa blanca de gala." },
    { id: 161, nombre: "Plato Base Plateado", categoria: "Cristalería", precio: 12, fotos: ["img/Plato_trinche.jpeg"], desc: "Plato base decorativo plateado para montaje de mesas." },
    { id: 162, nombre: "Cubiertos Plateados (Tenedor / Cuchara / Cuchillo / Cucharita)", categoria: "Cristalería", precio: 6, fotos: ["img/cubiertos.jpeg"], desc: "Precio por pieza en acero inoxidable." },
    { id: 163, nombre: "Cubiertos Dorados (Tenedor / Cuchara / Cuchillo / Cucharita)", categoria: "Cristalería", precio: 12, fotos: ["img/cubiertos_dorados.jpeg"], desc: "Precio por pieza individual con fino acabado oro." },
    { id: 164, nombre: "Vaso de Vidrio (pza)", categoria: "Cristalería", precio: 8, fotos: ["img/vaso.jpeg"], desc: "Vaso de vidrio cristalino estándar." },
    { id: 165, nombre: "Vaso Old Fashion (pza)", categoria: "Cristalería", precio: 15, fotos: ["img/Caso_oldfashon.jpeg"], desc: "Vaso bajo tipo rocas para whisky o licores." },
    { id: 166, nombre: "Copas para Vino (pza)", categoria: "Cristalería", precio: 18, fotos: ["img/Copa_Globo.jpeg"], desc: "Copa de cristal tradicional para agua o vino." },
    { id: 167, nombre: "Copa de Color (Azul / Verde / Humo / Amarillo / Rosa)", categoria: "Cristalería", precio: 30, fotos: ["img/copa_color_Rosa_Purpura.jpeg", "img/copa_color_Rosa_Purpura2.jpeg", "img/copa_color_Humo.jpeg", "img/copa_color.jpeg"], desc: "Copa labrada en cristal de color a elegir (azul, verde, humo, amarillo o rosa)." },
    { id: 168, nombre: "Plato y Taza para Café", categoria: "Cristalería", precio: 25, fotos: ["img/Taza_con_plato.jpeg"], desc: "Juego de taza de cerámica con plato cafetero." },
    { id: 169, nombre: "Porta Sobres (pza)", categoria: "Cristalería", precio: 15, fotos: ["img/vaso.jpeg"], desc: "Recipiente para sobres de azúcar y té." },
    { id: 170, nombre: "Ceniceros (pza)", categoria: "Cristalería", precio: 10, fotos: ["img/vaso.jpeg"], desc: "Cenicero de cristal grueso para mesas." },
    { id: 171, nombre: "Chafer / Bufetera (pza)", categoria: "Cristalería", precio: 300, fotos: ["img/Plato_trinche.jpeg"], desc: "Mantenedor térmico de alimentos a baño maría con quemadores." },
    { id: 172, nombre: "Charola de Servicio", categoria: "Cristalería", precio: 50, fotos: ["img/cubiertos.jpeg"], desc: "Charola antiderrapante para mesero." },
    { id: 173, nombre: "Cafetera Industrial", categoria: "Cristalería", precio: 350, fotos: ["img/Taza_con_plato.jpeg"], desc: "Cafetera percoladora de alta capacidad." },
    { id: 174, nombre: "Tijeras para Charola", categoria: "Cristalería", precio: 25, fotos: ["img/cubiertos.jpeg"], desc: "Soporte tipo tijera plegable para charola de mesero." },

    // ==================== 7. TEMPLETES Y PISOS ====================
    { id: 180, nombre: "Tarima de Madera (por m²)", categoria: "Templetes", precio: 120, fotos: ["img/Mesa_California.jpeg"], desc: "Tarima de madera nivelada para piso firme (precio por m²)." },
    { id: 181, nombre: "Pista Iluminada LED (por m²)", categoria: "Templetes", precio: 350, fotos: ["img/bodaxv.jpeg"], desc: "Pista de baile acrílica con iluminación LED programable (precio por m²)." },
    { id: 182, nombre: "Templete (Altura 50 cm - por m²)", categoria: "Templetes", precio: 300, fotos: ["img/Mesa_California.jpeg"], desc: "Estructura de templete o escenario a 50 cm de altura (precio por m²)." },

    // ==================== 8. OTROS (EQUIPO Y SERVICIOS) ====================
    { id: 190, nombre: "Calentador Ambiental", categoria: "Otros", precio: 1300, fotos: ["img/calentador.jpg", "img/calentador2.jpg", "img/calentador3.jpg", "img/calentador4.jpg", "img/calentador5.jpg"], desc: "Calentador tipo hongo a gas para jardín o terraza." },
    { id: 191, nombre: "Sombrilla Individual", categoria: "Otros", precio: 180, fotos: ["img/sombrilla.jpg", "img/sombrilla 2.jpg"], desc: "Sombrilla para intemperie individual." },
    { id: 192, nombre: "Hielera Grande", categoria: "Otros", precio: 250, fotos: [], desc: "Hielera térmica de gran capacidad para enfriar bebidas." },
    { id: 193, nombre: "Reflector de Iluminación", categoria: "Otros", precio: 200, fotos: [], desc: "Reflector LED de alta potencia para exteriores." },
    { id: 194, nombre: "Bocina Bluetooth", categoria: "Otros", precio: 800, fotos: [], desc: "Bafle de audio amplificado con tripié y conectividad Bluetooth." },
    { id: 195, nombre: "Meseros (x 5 horas)", categoria: "Otros", precio: 600, fotos: [], desc: "Personal de servicio capacitado y uniformado por 5 horas de evento." },
    { id: 196, nombre: "Asador Grande", categoria: "Otros", precio: 600, fotos: ["img/asadorG.jpg", "img/asadorG2.jpg"], desc: "Asador amplio para parrilladas y eventos." },
    { id: 197, nombre: "Mesa de Futbolito", categoria: "Otros", precio: 1000, fotos: [], desc: "Mesa de futbolito profesional para entretenimiento de invitados." },
    { id: 198, nombre: "Guirnalda de Luces", categoria: "Otros", precio: 300, fotos: [], desc: "Tira decorativa con focos de luz cálida para ambientación." },
    { id: 199, nombre: "Inflable (3 x 4 m)", categoria: "Otros", precio: 600, fotos: [], desc: "Juego inflable infantil de 3x4m incluye motor y montaje." }
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
            btn.className = "cat-btn active bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm";
        } else {
            btn.className = "cat-btn bg-stone-200 text-stone-700 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap hover:bg-stone-300 transition";
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
      <div onclick="abrirDetalle(${prod.id})" class="rounded-xl shadow-xs border border-[#E3DDD1] overflow-hidden hover:shadow-md transition cursor-pointer flex flex-col justify-between group" style="background-color: #FAF8F5;">
        <div class="relative overflow-hidden h-48 flex items-center justify-center p-2" style="background-color: #EBE5D8;">
          <img src="${fotoPrincipal}" alt="${prod.nombre}" class="w-full h-full object-contain group-hover:scale-105 transition duration-300" onerror="this.src='https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&q=80'">
          <span class="absolute top-2 right-2 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
            ${prod.categoria}
          </span>
          ${prod.fotos && prod.fotos.length > 1 ? `
            <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded-md flex items-center gap-1">
              <i class="fas fa-images"></i> ${prod.fotos.length}
            </span>
          ` : ''}
        </div>
        <div class="p-4 text-center">
          <h4 class="font-bold text-stone-800 text-sm leading-tight group-hover:text-blue-900 transition">${prod.nombre}</h4>
          <p class="text-blue-950 font-extrabold text-base mt-2">$${prod.precio.toLocaleString()} MXN</p>
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