// ── CURSOR (solo en PC con mouse) ──
const cursor = document.getElementById('cursor');
const esPC = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (esPC && cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 7 + 'px';
    cursor.style.top = e.clientY - 7 + 'px';
  });
  document.addEventListener('mousedown', () => cursor.style.transform = 'scale(2)');
  document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
} else if (cursor) {
  cursor.remove();
}

// ── MENÚ MÓVIL ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', abierto);
    navToggle.setAttribute('aria-expanded', abierto);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// ── PRODUCTOS DATA ──
const nombres410 = [
  "ADIDAS","ADIDAS","ADIDAS","ADIDAS","ADIDAS","ADIDAS",
  "ADIDAS","ADIDAS","ADIDAS","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","Tenis Adidas","Tenis Adidas","Tenis Adidas",
  "Tenis Adidas","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","Tenis adidas",
  "Tenis adidas","Tenis adidas","Tenis adidas","Tenis adidas","Zapatos Reebok","Zapatos Reebok",
  "Zapatos Reebok","Zapatos Reebok","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER",
  "Converse All Start","Converse All Start","Converse All Start","Converse All Start","Converse All Start",
  "Zapatos Gasp brillantes","Zapatos Gasp","Zapatos Gasp","Zapatos Gasp","Zapatos Gasp","Tenis New balance",
  "Tenis New balance","Tenis New balance","Tenis New balance","Zapatos Deportivas Vans","Zapatos Deportivas Vans","Zapatos Deportivas Vans",
  "Nike Dunk","Nike Dunk","Nike Dunk","Nike Dunk","Tenis Superstar Adidas","Tenis Superstar Adidas",
  "Tenis Superstar Adidas","Tenis Superstar Adidas","Zapatos Skechers Uno","Zapatos Skechers Uno","Zapatos Skechers Uno","Zapatos Skechers Uno",
  "Zapatos Skechers Uno","Zapatos Skechers Uno","Tenis New Balance","Tenis New Balance","Tenis Suede Charles F. Stead V | PUMA","Tenis New Balance",
  "Tenis New Balance","Tenis New Balance","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA",
  "Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™",
  "Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger",
  "Zapatillas con plataforma | Negro | Tommy Hilfiger","Tenis Deals Tênis Lindos Tênis Adidas","Tenis Deals Tênis Lindos Tênis Adidas","ADIDAS","Tenis Deals Tênis Lindos Tênis Adidas","Tenis Deals Tênis Lindos Tênis Adidas",
  "ADIDAS","ADIDAS","Reebok Court Advance","ADIDAS","New Balance","Reebok Court Advance",
  "Reebok Court Advance","Reebok Court Advance","New Balance","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","New Balance","New Balance","New Balance",
  "Chaussures Homme Baskets Louis Vuitton","Chaussures Homme Baskets Louis Vuitton","Converse All Start","Chaussures Homme Baskets Louis Vuitton","Converse All Start","Converse All Start",
  "Converse All Start","New Balance","New Balance","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","New Balance","New Balance","Skechers BA",
  "New Balance","Skechers BA","Skechers BA","Tenis Fila","Tenis Fila","Tenis Fila","Tenis Fila","Tenis Fila",
  "Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger",
  "Tenis Adidas","Tenis Adidas","Tenis Adidas","Tenis Adidas","Tenis Adidas","TENIS LACOSTE","TENIS LACOSTE","TENIS LACOSTE","TENIS LACOSTE",
  "New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker",
  "Tenis Adidas","Tenis Adidas","Tenis Adidas","New Canvas Shoes Sneaker","Tenis Adidas","Tenis Adidas",
  "Nike Dunk","Nike Dunk","Nike Dunk","Nike Dunk","Converse Talón Abierto","Converse Talón Abierto","Converse Talón Abierto","TENIS LACOSTE",
  "Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB",
  "Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers",
  "Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers",
  "TENIS PUMA","TENIS PUMA","TENIS PUMA","TENIS PUMA",
  "Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running",
  "New Balance","New Balance","New Balance","New Balance","New Balance","New Balance","New Balance","New Balance",
  "Beib Shoes","TOMMY HILFIGER","Puma","Mc QUEEN","Adidas","Puma","Puma","Vans Ward Canvas","Tenis River Blanco","Tenis River Blanco","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","Tenis Lacoste","Converse","Reebok Classic Leather","Lacoste",
  "Reebok Classic Leather","Lacoste","Lacoste","TENIS TOMMY HILFIGER","PUMA","PUMA","PUMA","PUMA","PUMA","PUMA","TENIS TOMMY HILFIGER","Reebok Classic Leather","Reebok Classic Leather","Reebok Classic Leather","PUMA","Reebok Classic Leather",
  "Reebok modelo Ramble","Reebok Royal Glide Ripple","Reebok Royal Glide Ripple","Converse Chuck Taylor All Star","Tommy Hilfiger","Reebok Classic Leather",
  "Reebok modelo Classic Leather","Converse","Tommy Hilfiger","Lacoste","Adidas Samba OG","Adidas Samba OG","Adidas Samba OG","Adidas Samba OG","Polo Club","Polo Club","Polo Club","Polo Club","Sneaker","Adidas Samba OG",
  "Adidas Samba OG","Sneaker","Adidas Grand Court 3.0 Leopard","Adidas Samba","Maple Shoes","GAMIRA","Sneaker","Sneaker","Sneaker","Skechers","Skechers","Reebok","Reebok","Skechers","Skechers",
  "Skechers","Converse Chuck Taylor All Star","Converse Chuck Taylor All Star","Myki","Converse Chuck Taylor All Star","Converse Chuck Taylor All Star0",
  "Reebok","Adidas Samba Originals","Adidas Samba","Adidas Samba Originals","Adidas","Adidas Samba","Adidas Samba","PUMA Smash",
  "Puma","Puma Suede","Puma Suede Classic XXI","Adidas Nightform","Adidas Upac","Adidas","Adidas","Adidas","PUMA Suede XL",
  "Beverly Hills Polo Club","PUMA Vikky V3 Cuero","Reebok","BOSS","Reebok","Reebok","BOSS","BOSS","BOSS","BOSS","Lacoste","Lacoste","Adidas Samba",
  "Converse All Star","Polo Club","Polo Club","Polo Club","Adidas","Reebok","Reebok","Reebok","Reebok","Reebok","Puma","Reebok","Puma","Puma","Puma","Adidas","Vizzano","Vizzano","Adidas",
  "Adidas Barreda","Adidas","Adidas","Adidas","Adidas","Adidas Samba OG"," Royal Country Berkshire Polo Club","Adidas"," Royal Country Berkshire Polo Club"," Royal Country Berkshire Polo Club"," Royal Country Berkshire Polo Club","Adidas","Adidas","Adidas",
  "Adidas","Adidas","Adidas","Adidas","Adidas","Adidas","Nike Cortez Basic SE","Nike Cortez Basic SE","Nike Cortez Basic SE","Nike Cortez Basic SE","Nike Cortez Basic SE","Nike Cortez Basic SE","Nike Cortez Basic",
  "Nike Cortez Basic","Tommy Hilfiger","Tommy Hilfiger","Tommy Hilfiger","Tommy Hilfiger","Tommy Hilfiger","Tommy Hilfiger","Puma","Adidas","Adidas","Adidas","Puma Wild Rider Rollin","Puma Wild Rider Layers","Puma",
  "Nike Classic Cortez","Puma Wild Rider Rollin","Nike Cortez","Nike Cortez","Reebok","Reebok","Nike Cortez","Nike Cortez"
];
 
const productos = nombres410.map((nombre, i) => ({
  id: i,
  nombre,
  descripcion: "Zapatilla deportiva cómoda y resistente. Ideal para uso diario, entrenamiento y caminatas. Disponible en múltiples colores y tallas.",
  imagen: `img/${i + 1}.jpeg`
}));
 
// ── BRANDS ──
const brandColors = {
  'ADIDAS': '#FF3C00', 'Nike': '#FF3C00', 'New Balance': '#FFB300',
  'PUMA': '#00E5FF', 'Converse': '#FF6B35', 'TOMMY HILFIGER': '#E91E63',
  'LACOSTE': '#4CAF50', 'Reebok': '#9C27B0', 'Skechers': '#2196F3',
  'Vans': '#FF9800', 'Fila': '#00BCD4', 'Louis Vuitton': '#795548'
};
 
const brands = [...new Set(nombres410.map(n => marcaDe(n)).filter(Boolean))];
 
// Detecta la marca de un nombre de producto
function marcaDe(nombre) {
  const n = nombre.toLowerCase();
  if (n.includes('adidas')) return 'ADIDAS';
  if (n.includes('nike')) return 'Nike';
  if (n.includes('new balance')) return 'New Balance';
  if (n.includes('puma')) return 'PUMA';
  if (n.includes('converse')) return 'Converse';
  if (n.includes('tommy')) return 'TOMMY HILFIGER';
  if (n.includes('lacoste')) return 'LACOSTE';
  if (n.includes('reebok')) return 'Reebok';
  if (n.includes('skecher')) return 'Skechers';
  if (n.includes('vans')) return 'Vans';
  if (n.includes('fila')) return 'Fila';
  if (n.includes('louis')) return 'Louis Vuitton';
  return null;
}

// ── ESTADO ──
const POR_PAGINA = 24;
let productosMostrados = 0;
let productosFiltrados = [...productos];
let activeFilter = 'Todos';

// Build brands (al tocar una marca se filtra el catálogo y se baja a productos)
const brandsContainer = document.getElementById('brandsContainer');
brands.forEach(b => {
  const pill = document.createElement('button');
  pill.type = 'button';
  pill.className = 'brand-pill';
  pill.textContent = b;
  pill.addEventListener('click', () => {
    aplicarFiltro(b);
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  });
  brandsContainer.appendChild(pill);
});

// ── FILTER BAR ──
const filtersData = ['Todos', 'Adidas', 'Nike', 'New Balance', 'Puma', 'Converse', 'Tommy', 'Lacoste', 'Reebok', 'Skechers', 'Vans', 'Fila'];
const filterBar = document.getElementById('filterBar');

filtersData.forEach(f => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'filter-btn' + (f === 'Todos' ? ' active' : '');
  btn.textContent = f;
  btn.dataset.filtro = f;
  btn.onclick = () => aplicarFiltro(f);
  filterBar.appendChild(btn);
});

function aplicarFiltro(f) {
  // Normaliza nombres de marca a los filtros (ej. "TOMMY HILFIGER" -> "Tommy")
  const clave = f.toLowerCase().includes('tommy') ? 'tommy'
              : f.toLowerCase().includes('skecher') ? 'skecher'
              : f.toLowerCase();
  activeFilter = clave === 'todos' ? 'Todos' : clave;
  document.querySelectorAll('.filter-btn').forEach(el => {
    const k = el.dataset.filtro.toLowerCase();
    el.classList.toggle('active', k === clave || (clave === 'skecher' && k === 'skechers'));
  });
  filtrarProductos();
}

// ── RENDER ──
function getBadge(nombre) {
  const n = nombre.toLowerCase();
  if (n.includes('nike')) return 'Nike';
  if (n.includes('adidas')) return 'Adidas';
  if (n.includes('puma')) return 'Puma';
  if (n.includes('new balance')) return 'NB';
  if (n.includes('converse')) return 'Converse';
  if (n.includes('tommy')) return 'Tommy';
  if (n.includes('lacoste')) return 'Lacoste';
  if (n.includes('reebok')) return 'Reebok';
  if (n.includes('vans')) return 'Vans';
  if (n.includes('skecher')) return 'Skechers';
  if (n.includes('fila')) return 'Fila';
  return '★';
}

const PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="200"><rect width="100%" height="100%" fill="#1C1C28"/><text x="50%" y="55%" font-size="60" text-anchor="middle">👟</text></svg>'
);

function escapar(t) {
  return t.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
}

function tarjetaHTML(p, i) {
  const idx = p.id;
  const nombre = escapar(p.nombre.trim());
  return `
    <div class="producto" style="animation-delay: ${(i % POR_PAGINA) * 0.03}s">
      <div class="producto-img-wrap" onclick="verDetalles(${idx})">
        <img src="${p.imagen}" alt="${nombre}" loading="lazy" onerror="this.onerror=null;this.src=PLACEHOLDER">
        <span class="producto-badge">${getBadge(p.nombre)}</span>
        <span class="producto-num">#${String(idx + 1).padStart(3, '0')}</span>
      </div>
      <div class="producto-body">
        <h3 title="${nombre}">${nombre}</h3>
        <div class="producto-prices">
          <span>T.34 <span class="price">$18</span></span>
          <span>T.35+ <span class="price">$20</span></span>
        </div>
        <div class="producto-btns">
          <button type="button" class="btn-details" onclick="verDetalles(${idx})">Ver Detalles</button>
          <a href="${p.imagen}" download class="btn-download" aria-label="Descargar foto">⬇</a>
        </div>
      </div>
    </div>`;
}

function filtrarProductos() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const f = activeFilter.toLowerCase();

  productosFiltrados = productos.filter(p => {
    const n = p.nombre.toLowerCase();
    const matchSearch = !q || n.includes(q);
    const matchFilter = f === 'todos' || n.includes(f);
    return matchSearch && matchFilter;
  });

  // Reinicia la lista y muestra la primera página
  document.getElementById('listaProductos').innerHTML = '';
  productosMostrados = 0;
  mostrarSiguientes();
}

// Agrega los siguientes productos DEBAJO de los que ya se ven (sin borrar ni saltar)
function mostrarSiguientes() {
  const lista = document.getElementById('listaProductos');
  const desde = productosMostrados;
  const hasta = Math.min(desde + POR_PAGINA, productosFiltrados.length);
  const nuevos = productosFiltrados.slice(desde, hasta);

  lista.insertAdjacentHTML('beforeend', nuevos.map((p, i) => tarjetaHTML(p, i)).join(''));
  productosMostrados = hasta;

  const vacio = document.getElementById('sinResultados');
  vacio.style.display = productosFiltrados.length === 0 ? 'block' : 'none';

  document.getElementById('counterNum').textContent = productosMostrados;
  document.getElementById('counterTotal').textContent = productosFiltrados.length;

  const btnMore = document.getElementById('btnLoadMore');
  const restantes = productosFiltrados.length - productosMostrados;
  if (restantes > 0) {
    btnMore.style.display = 'inline-block';
    btnMore.textContent = `Cargar más productos (${restantes} restantes) ↓`;
  } else {
    btnMore.style.display = 'none';
  }
}

function cargarMas() {
  mostrarSiguientes();
}

// ── MODAL ──
function verDetalles(index) {
  const p = productos[index];
  document.getElementById('modalImg').src = p.imagen;
  document.getElementById('modalTitulo').textContent = p.nombre.trim();
  document.getElementById('modalDescripcion').textContent = p.descripcion;
 
  const msg = encodeURIComponent(`Hola 👋 Estoy interesado en: ${p.nombre}\n- Hasta talla 34: $18\n- Desde talla 35: $20`);
  document.getElementById('btnWa1').href = `https://wa.me/593968806312?text=${msg}`;
  document.getElementById('btnWa2').href = `https://wa.me/593991216329?text=${msg}`;
 
  document.getElementById('modal').classList.add('activo');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('modal-abierto');
}
 
function cerrarModal() {
  document.getElementById('modal').classList.remove('activo');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-abierto');
}
 
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) cerrarModal();
});
 
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });
 
// ── WA MENU ──
function toggleWaMenu() {
  document.getElementById('waMenu').classList.toggle('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.wa-float-container')) {
    document.getElementById('waMenu').classList.remove('open');
  }
});
 
// ── INIT ──
filtrarProductos();
 
// Intersection observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.feature-box, .nosotros-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
