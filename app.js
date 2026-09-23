// Configuración del Negocio
const PHONE_NUMBER = "5215542721803";

// Arreglo dinámico cargado desde data/productos.json
let productos = [];

let categoriaActual = "Todos";
let productoModalActual = null;
let indiceFotoActual = 0;

// Inicialización asíncrona
document.addEventListener("DOMContentLoaded", async () => {
    await cargarProductos();
});

async function cargarProductos() {
    try {
        // Enfoque recomendado: leer la lista completa generada o el listado de archivos
        const respuesta = await fetch("data/productos.json");
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const data = await respuesta.json();
        productos = data.items || [];
        renderCatalog();
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}
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
    if (!grid) return;

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
          <p class="text-blue-950 font-extrabold text-base mt-2">
            ${prod.precio > 0 ? `$${prod.precio.toLocaleString()} MXN` : 'Precio a Cotizar'}
          </p>
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
    document.getElementById("modal-price").textContent = prod.precio > 0 ? `$${prod.precio.toLocaleString()} MXN` : "Precio a Cotizar";

    const descEl = document.getElementById("modal-desc");
    if (prod.desc && prod.desc.includes("\n")) {
        const lineas = prod.desc.split("\n").filter(l => l.trim() !== "");
        descEl.innerHTML = `
            <div class="flex flex-col gap-1.5 text-xs max-h-64 overflow-y-auto pr-1">
                ${lineas.map(linea => {
            const partes = linea.split(" - ");
            if (partes.length >= 3) {
                const [nombre, medida, precio] = partes;
                return `
                    <div class="flex items-center justify-between p-2 rounded-lg bg-stone-100/80 border border-stone-200">
                        <div class="text-left">
                            <span class="font-bold text-stone-800">${nombre}</span>
                            <span class="text-stone-500 font-medium ml-1">(${medida})</span>
                        </div>
                        <span class="font-extrabold ${precio.includes('cotizar') ? 'text-amber-700' : 'text-blue-950'} whitespace-nowrap ml-2">
                            ${precio}
                        </span>
                    </div>
                `;
            }
            return `<div class="p-1 text-stone-600">${linea}</div>`;
        }).join('')}
            </div>
        `;
    } else {
        descEl.textContent = prod.desc || "Consulta disponibilidad, medidas y flete por WhatsApp.";
    }

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