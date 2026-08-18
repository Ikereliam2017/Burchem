// ── CURSOR ──
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 7 + 'px';
  cursor.style.top = e.clientY - 7 + 'px';
});
document.addEventListener('mousedown', () => cursor.style.transform = 'scale(2)');
document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');
 
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
 
const brands = [...new Set(nombres410.map(n => {
  if (n.toLowerCase().includes('adidas')) return 'ADIDAS';
  if (n.toLowerCase().includes('nike')) return 'Nike';
  if (n.toLowerCase().includes('new balance')) return 'New Balance';
  if (n.toLowerCase().includes('puma')) return 'PUMA';
  if (n.toLowerCase().includes('converse')) return 'Converse';
  if (n.toLowerCase().includes('tommy')) return 'TOMMY HILFIGER';
  if (n.toLowerCase().includes('lacoste')) return 'LACOSTE';
  if (n.toLowerCase().includes('reebok')) return 'Reebok';
  if (n.toLowerCase().includes('skecher')) return 'Skechers';
  if (n.toLowerCase().includes('vans')) return 'Vans';
  if (n.toLowerCase().includes('fila')) return 'Fila';
  if (n.toLowerCase().includes('louis')) return 'Louis Vuitton';
  return null;
}).filter(Boolean))];
 
// Build brands
const brandsContainer = document.getElementById('brandsContainer');
brands.forEach(b => {
  const pill = document.createElement('div');
  pill.className = 'brand-pill';
  pill.textContent = b;
  pill.addEventListener('click', () => {
    activeBrand = activeBrand === b.toLowerCase() ? '' : b.toLowerCase();
    document.querySelectorAll('.filter-btn').forEach(el => el.classList.remove('active'));
    filtrarProductos();
  });
  brandsContainer.appendChild(pill);
});
 
// ── FILTER BAR ──
const filtersData = ['Todos', 'Adidas', 'Nike', 'New Balance', 'Puma', 'Converse', 'Tommy', 'Lacoste', 'Reebok', 'Skechers'];
const filterBar = document.getElementById('filterBar');
let activeFilter = 'Todos';
let activeBrand = '';
 
filtersData.forEach(f => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn' + (f === 'Todos' ? ' active' : '');
  btn.textContent = f;
  btn.onclick = () => {
    activeFilter = f;
    document.querySelectorAll('.filter-btn').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    productosMostrados = 24;
    filtrarProductos();
  };
  filterBar.appendChild(btn);
});
 
// ── RENDER ──
let productosMostrados = 24;
let productosFiltrados = [...productos];
 
function getBadge(nombre) {
  if (nombre.toLowerCase().includes('nike')) return 'Nike';
  if (nombre.toLowerCase().includes('adidas')) return 'Adidas';
  if (nombre.toLowerCase().includes('puma')) return 'Puma';
  if (nombre.toLowerCase().includes('new balance')) return 'NB';
  if (nombre.toLowerCase().includes('converse')) return 'Converse';
  if (nombre.toLowerCase().includes('tommy')) return 'Tommy';
  if (nombre.toLowerCase().includes('lacoste')) return 'Lacoste';
  if (nombre.toLowerCase().includes('reebok')) return 'Reebok';
  if (nombre.toLowerCase().includes('vans')) return 'Vans';
  return '★';
}
 
function filtrarProductos() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const f = activeFilter.toLowerCase();
 
  productosFiltrados = productos.filter(p => {
    const matchSearch = p.nombre.toLowerCase().includes(q);
    const matchFilter = f === 'todos' || p.nombre.toLowerCase().includes(f);
    return matchSearch && matchFilter;
  });
 
  productosMostrados = 24;
  renderProductos();
}
 
function renderProductos() {
  const lista = document.getElementById('listaProductos');
  const mostrar = productosFiltrados.slice(0, productosMostrados);
 
  lista.innerHTML = mostrar.map((p, i) => {
    const idx = productos.indexOf(p);
    return `
      <div class="producto" style="animation-delay: ${(i % 24) * 0.04}s">
        <div class="producto-img-wrap">
          <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" onerror="this.src='https://via.placeholder.com/240x200/16161F/FF3C00?text=👟'">
          <span class="producto-badge">${getBadge(p.nombre)}</span>
          <span class="producto-num">#${String(idx+1).padStart(3,'0')}</span>
        </div>
        <div class="producto-body">
          <h3 title="${p.nombre}">${p.nombre}</h3>
          <div class="producto-prices">
            <span>T.34 <span class="price">$18</span></span>
            <span>T.35+ <span class="price">$20</span></span>
          </div>
          <div class="producto-btns">
            <button class="btn-details" onclick="verDetalles(${idx})">Ver Detalles</button>
            <a href="${p.imagen}" download class="btn-download">⬇</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
 
  document.getElementById('counterNum').textContent = mostrar.length;
  document.getElementById('counterTotal').textContent = productosFiltrados.length;
 
  const btnMore = document.getElementById('btnLoadMore');
  btnMore.style.display = productosMostrados >= productosFiltrados.length ? 'none' : 'inline-block';
}
 
function cargarMas() {
  productosMostrados += 24;
  renderProductos();
  document.getElementById('listaProductos').scrollIntoView({ behavior: 'smooth', block: 'end' });
}
 
// ── MODAL ──
function verDetalles(index) {
  const p = productos[index];
  document.getElementById('modalImg').src = p.imagen;
  document.getElementById('modalTitulo').textContent = p.nombre;
  document.getElementById('modalDescripcion').textContent = p.descripcion;
 
  const msg = encodeURIComponent(`Hola 👋 Estoy interesado en: ${p.nombre}\n- Hasta talla 34: $18\n- Desde talla 35: $20`);
  document.getElementById('btnWa1').href = `https://wa.me/593968806312?text=${msg}`;
  document.getElementById('btnWa2').href = `https://wa.me/593991216329?text=${msg}`;
 
  document.getElementById('modal').classList.add('activo');
  document.body.style.overflow = 'hidden';
}
 
function cerrarModal() {
  document.getElementById('modal').classList.remove('activo');
  document.body.style.overflow = '';
}
 
document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) cerrarModal();
});
 
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });
 
// ── WA MENU ──
function toggleWaMenu() {
  document.getElementById('waMenu').classList.toggle('open');
}
 
// ── INIT ──
renderProductos();
 
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