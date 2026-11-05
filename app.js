/* ==========================================================
   PRODUCTOS CON CORRELACIÓN REAL DE CAFETERÍA COLOMBIANA
========================================================== */
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80',
    name: 'Tinto Campesino',
    desc: 'Café negro colombiano recién colado en taza, con toque de panela.',
    price: 1800,
    cat: 'Bebidas calientes',
    available: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80',
    name: 'Café con Leche',
    desc: 'Espresso suave con leche entera o cremada caliente.',
    price: 2500,
    cat: 'Bebidas calientes',
    available: true
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=300&q=80',
    name: 'Aromática de Frutas',
    desc: 'Infusión caliente en vaso de cristal con yerbabuena, manzana y canela.',
    price: 1500,
    cat: 'Bebidas calientes',
    available: true
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80',
    name: 'Capuchino Vainilla',
    desc: 'Espresso doble con espuma densa de leche vaporizada y canela en polvo.',
    price: 3800,
    cat: 'Bebidas calientes',
    available: true
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80',
    name: 'Chocolate Caliente',
    desc: 'Taza de chocolate de cacao colombiano tradicional bien caliente.',
    price: 2800,
    cat: 'Bebidas calientes',
    available: true
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80',
    name: 'Jugo de Lulo Natural',
    desc: 'Vaso de jugo natural de pulpa de lulo servido bien frío con hielo.',
    price: 2500,
    cat: 'Bebidas frías',
    available: true
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
    name: 'Jugo de Maracuyá',
    desc: 'Maracuyá fresco, dulce y refrescante con hielo triturado.',
    price: 2500,
    cat: 'Bebidas frías',
    available: true
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80',
    name: 'Limonada de Coco',
    desc: 'Cremosa y fría, elaborada con crema de coco natural y limón fresco.',
    price: 3500,
    cat: 'Bebidas frías',
    available: true
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
    name: 'Avena Fría con Canela',
    desc: 'Avena cremosa batida con leche y un toque de canela aromática.',
    price: 2200,
    cat: 'Bebidas frías',
    available: true
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
    name: 'Almuerzo Ejecutivo del Día',
    desc: 'Plato completo con arroz, proteína a la plancha, ensalada fresca y jugo.',
    price: 9500,
    cat: 'Almuerzos',
    available: true
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
    name: 'Bowl de Pollo y Ensalada',
    desc: 'Pechuga desmechada con lechuga, maíz tierno, tomates cherry y aderezo.',
    price: 8000,
    cat: 'Almuerzos',
    available: true
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=300&q=80',
    name: 'Cazuela de Frijoles',
    desc: 'Cazuela casera de frijoles rojos con plátano maduro y arroz.',
    price: 8500,
    cat: 'Almuerzos',
    available: false
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1628106235474-0f2c418ce1c9?auto=format&fit=crop&w=300&q=80',
    name: 'Empanadas de Carne o Pollo (x2)',
    desc: 'Empanadas doradas y crocantes de maíz colombiano con ají picante.',
    price: 3500,
    cat: 'Snacks',
    available: true
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80',
    name: 'Pan de Bono Caliente',
    desc: 'Pandebono recién horneado con queso costeño y almidón de yuca.',
    price: 2000,
    cat: 'Snacks',
    available: true
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=300&q=80',
    name: 'Buñuelo Tradicional',
    desc: 'Buñuelo redondo, crocante por fuera y suave esponjoso por dentro.',
    price: 1600,
    cat: 'Snacks',
    available: true
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80',
    name: 'Arepa de Choclo con Queso',
    desc: 'Arepa dulce de maíz tierno asada con mantequilla y queso derretido.',
    price: 3200,
    cat: 'Snacks',
    available: true
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80',
    name: 'Brownie Artesanal',
    desc: 'Porción melcochuda de brownie de chocolate semiamargo con nueces.',
    price: 3500,
    cat: 'Postres',
    available: true
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80',
    name: 'Postre de Tres Leches',
    desc: 'Torta húmeda tradicional bañada en salsa de tres leches.',
    price: 3800,
    cat: 'Postres',
    available: true
  }
];

/* ==========================================================
   ESTADO GLOBAL Y LOGÍSTICA
========================================================== */
let currentUser = null;
let userStrikes = parseInt(localStorage.getItem('cg_strikes') || '0');
let userStrikeUntil = parseInt(localStorage.getItem('cg_strike_until') || '0');
let userStrikeReason = localStorage.getItem('cg_strike_reason') || '';
let kitchenPaused = localStorage.getItem('cg_kitchen_paused') === 'true';

// Tiempo configurado por el personal de cocina: número fijo o 'auto'
let kitchenWaitSetting = localStorage.getItem('cg_kitchen_wait_setting') || '15';

let products = DEFAULT_PRODUCTS;
let favorites = JSON.parse(localStorage.getItem('cg_favs') || '[]');
let cart = JSON.parse(localStorage.getItem('cg_cart') || '[]');
let orders = JSON.parse(localStorage.getItem('cg_orders') || 'null') || [
  {
    id: 'CGO-0001',
    date: 'Hoy, 09:20 AM',
    student: 'Estudiante Demo',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Efectivo en caja',
    nequiRef: '',
    proofImage: '',
    items: [
      { name: 'Café con Leche', qty: 1, price: 2500, details: 'Regular · Entera' },
      { name: 'Pan de Bono Caliente', qty: 2, price: 2000, details: '' }
    ],
    total: 6500,
    status: 'entregado',
    token: 'tok_demo1',
    readyAt: null,
    expiresAt: null
  }
];

if (Array.isArray(orders)) {
  orders.forEach(o => {
    if (o.student && (o.student.toLowerCase().includes('charris') || o.student.toLowerCase().includes('jhonnas'))) {
      o.student = 'Estudiante Demo';
    }
  });
}

let currentCategory = 'Todos';
let currentRole = 'student';
let orderType = 'takeaway';
let paymentMethod = 'cash'; // 'cash' | 'transfer'

// Estado del comprobante Nequi subido en carrito
let currentUploadedProofDataUrl = '';
let targetStrikeOrderId = null;

// Modal producto
let modalProduct = null;
let modalQty = 1;
let modalExtraPrice = 0;
let modalSelectedSize = 'Regular';

// Temporizador activo en pantalla de ticket
let activeTimerInterval = null;

/* ==========================================================
   AUTENTICACIÓN Y SESIÓN
========================================================== */
function initAuth() {
  // Limpiar cualquier sesión residual anterior
  try {
    const saved = localStorage.getItem('cg_session');
    if (saved && (saved.includes('jhonnas') || saved.includes('charris'))) {
      localStorage.removeItem('cg_session');
    }
  } catch (e) {}

  currentUser = null;
  // Iniciar siempre desde la pantalla de login institucional
  showLoginView();
}

function showLoginView() {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  const roleSelect = document.getElementById('login-role');
  if (emailInput) emailInput.value = '';
  if (passInput) passInput.value = '';
  if (roleSelect) roleSelect.value = 'student';
  document.getElementById('view-login').classList.add('active');
  document.getElementById('authenticated-app').style.display = 'none';
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const role = document.getElementById('login-role').value;

  let name = 'Estudiante Demo';
  let code = '20240001';

  if (email.toLowerCase().includes('cafeteria') || email.toLowerCase().includes('personal') || role === 'staff') {
    name = 'Personal Cafetería';
    code = 'STAFF-01';
  } else if (email.toLowerCase().includes('demo') || email.toLowerCase().includes('estudiante')) {
    name = 'Estudiante Demo';
    code = '20240001';
  } else if (email.includes('@')) {
    const prefix = email.split('@')[0].replace(/[._-]/g, ' ');
    name = prefix.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    code = '2024' + Math.floor(1000 + Math.random() * 9000);
  }

  const session = { email, name, code, role };
  currentUser = session;
  localStorage.setItem('cg_session', JSON.stringify(session));
  applyUserSession(session);
  showToast('Bienvenido, ' + name);
}

function fillQuickLogin(role) {
  if (role === 'student') {
    document.getElementById('login-email').value = 'estudiante.demo@unisimon.edu.co';
    document.getElementById('login-password').value = 'DemoEstudiante2026*';
    document.getElementById('login-role').value = 'student';
  } else {
    document.getElementById('login-email').value = 'cafeteria.demo@unisimon.edu.co';
    document.getElementById('login-password').value = 'DemoPersonal2026*';
    document.getElementById('login-role').value = 'staff';
  }
}

function applyUserSession(user) {
  currentRole = user.role;
  document.getElementById('view-login').classList.remove('active');
  document.getElementById('authenticated-app').style.display = 'flex';

  document.getElementById('display-user-name').textContent = user.name;
  document.getElementById('display-user-sub').textContent = user.role === 'staff' ? 'Personal Cafetería' : 'Cód. ' + user.code;

  checkStrikeActiveStatus();
  renderReputationBadge();
  updateRoleUI();
  updateKitchenWaitUI();
  renderProducts();
  renderCart();
  renderOrders();
  updateCartBadge();
  renderStaticNequiQR();

  if (currentRole === 'staff') {
    switchView('staff');
  } else {
    switchView('menu');
  }
}

function logoutSession() {
  currentUser = null;
  localStorage.removeItem('cg_session');
  showLoginView();
  showToast('Sesión cerrada');
}

function toggleRoleFromBadge() {
  currentRole = currentRole === 'student' ? 'staff' : 'student';
  if (currentUser) {
    currentUser.role = currentRole;
    localStorage.setItem('cg_session', JSON.stringify(currentUser));
  }
  updateRoleUI();
  if (currentRole === 'staff') {
    switchView('staff');
    showToast('Modo Personal de Cafetería');
  } else {
    switchView('menu');
    showToast('Modo Estudiante');
  }
}

function updateRoleUI() {
  const isStaff = currentRole === 'staff';
  document.getElementById('role-badge-text').textContent = isStaff ? 'Personal Cafetería' : 'Estudiante';
  document.getElementById('tab-staff').style.display = isStaff ? 'flex' : 'none';
}

/* ==========================================================
   CONTROL DE SANCIONES / STRIKES TEMPORALES
========================================================== */
function checkStrikeActiveStatus() {
  const now = Date.now();
  const banner = document.getElementById('user-strike-banner');
  const bannerText = document.getElementById('strike-banner-text');

  if (userStrikeUntil > now) {
    const diffMs = userStrikeUntil - now;
    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const durationStr = diffHours <= 24 ? `${diffHours} horas` : `${diffDays} días`;

    banner.style.display = 'block';
    bannerText.textContent = `Sanción activa por ${durationStr} (${userStrikeReason || 'Falta disciplinaria'}). Pagos Nequi suspendidos.`;
  } else {
    banner.style.display = 'none';
  }
}

function renderReputationBadge() {
  const repEl = document.getElementById('display-reputation');
  const now = Date.now();
  const isSanctioned = userStrikeUntil > now;

  if (isSanctioned) {
    repEl.className = 'reputation-badge danger';
    repEl.textContent = `Sancionado (${userStrikes} Faltas)`;
  } else if (userStrikes === 0) {
    repEl.className = 'reputation-badge';
    repEl.textContent = 'Fiabilidad 100% · 0 Faltas';
  } else if (userStrikes === 1) {
    repEl.className = 'reputation-badge warning';
    repEl.textContent = '1 Falta (Historial registrado)';
  } else {
    repEl.className = 'reputation-badge danger';
    repEl.textContent = `${userStrikes} Faltas`;
  }
}

/* ==========================================================
   CONFIGURACIÓN DINÁMICA DEL TIEMPO DE ESPERA POR COCINA
========================================================== */
function calculateEffectiveWaitTime() {
  const activeOrdersCount = orders.filter(o => o.status === 'recibido' || o.status === 'preparando' || o.status === 'pendiente_pago').length;

  if (kitchenWaitSetting === 'auto') {
    const calc = Math.max(8, 8 + activeOrdersCount * 3);
    return { mins: calc, isAuto: true, count: activeOrdersCount };
  } else {
    const fixedMins = parseInt(kitchenWaitSetting) || 15;
    return { mins: fixedMins, isAuto: false, count: activeOrdersCount };
  }
}

function updateKitchenWaitUI() {
  const waitInfo = calculateEffectiveWaitTime();
  const ksDot = document.getElementById('ks-dot');
  const ksText = document.getElementById('ks-text');
  const ksSummary = document.getElementById('ks-active-summary');
  const staffWaitBadge = document.getElementById('staff-current-wait-badge');
  const optPickupAsap = document.getElementById('opt-pickup-asap');

  if (kitchenPaused) {
    ksDot.className = 'ks-dot ks-paused';
    ksText.textContent = 'Cocina: Pausa temporal de pedidos';
    ksSummary.textContent = `${waitInfo.count} órdenes en cocina`;
  } else if (waitInfo.mins >= 30 || waitInfo.count >= 8) {
    ksDot.className = 'ks-dot ks-busy';
    ksText.textContent = `Cocina: Alta demanda · Espera estimada ~${waitInfo.mins} min`;
    ksSummary.textContent = `${waitInfo.count} órdenes en cocina`;
  } else {
    ksDot.className = 'ks-dot ks-normal';
    ksText.textContent = `Cocina: Espera estimada ~${waitInfo.mins} min`;
    ksSummary.textContent = `${waitInfo.count} órdenes en cocina`;
  }

  if (optPickupAsap) {
    optPickupAsap.textContent = `Lo antes posible (~${waitInfo.mins} min)`;
  }

  if (staffWaitBadge) {
    staffWaitBadge.textContent = waitInfo.isAuto ? `Auto (~${waitInfo.mins} min)` : `Fijado: ~${waitInfo.mins} min`;
  }

  document.querySelectorAll('.ktc-chip').forEach(chip => {
    const chipText = chip.textContent.trim();
    if (kitchenWaitSetting === 'auto' && chip.id === 'btn-calc-auto') {
      chip.classList.add('active');
    } else if (chipText === `${kitchenWaitSetting} min`) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

function setKitchenWaitTime(mins) {
  kitchenWaitSetting = String(mins);
  localStorage.setItem('cg_kitchen_wait_setting', kitchenWaitSetting);
  updateKitchenWaitUI();
  const info = calculateEffectiveWaitTime();
  showToast(mins === 'auto' ? `Modo automático activado (~${info.mins} min por cola)` : `Tiempo de espera fijado en ${mins} min`);
}

function applyCustomWaitTime() {
  const input = document.getElementById('input-custom-wait');
  const val = parseInt(input.value);
  if (!val || val <= 0) {
    showToast('Ingresa un tiempo válido en minutos');
    return;
  }
  setKitchenWaitTime(val);
  input.value = '';
}

function toggleKitchenPause() {
  kitchenPaused = !kitchenPaused;
  localStorage.setItem('cg_kitchen_paused', kitchenPaused);
  const staffPauseStatus = document.getElementById('staff-pause-status');
  const btnTogglePause = document.getElementById('btn-toggle-pause');

  if (kitchenPaused) {
    if (staffPauseStatus) staffPauseStatus.textContent = 'Pausada: No se reciben nuevos pedidos';
    if (btnTogglePause) {
      btnTogglePause.className = 'pause-toggle-btn active';
      btnTogglePause.textContent = 'Reanudar Recepción';
    }
    showToast('Recepción de pedidos pausada');
  } else {
    if (staffPauseStatus) staffPauseStatus.textContent = 'Cocina recibiendo pedidos normalmente';
    if (btnTogglePause) {
      btnTogglePause.className = 'pause-toggle-btn';
      btnTogglePause.textContent = 'Pausar Nuevos Pedidos';
    }
    showToast('Recepción de pedidos reanudada');
  }
  updateKitchenWaitUI();
}

/* ==========================================================
   MENÚ DE PRODUCTOS
========================================================== */
function renderProducts() {
  const query = (document.getElementById('search-box')?.value || '').toLowerCase().trim();
  const container = document.getElementById('products-container');
  const label = document.getElementById('cat-header-label');

  let list = products.filter(p => {
    if (currentCategory === 'Favoritos') return favorites.includes(p.id);
    if (currentCategory !== 'Todos' && p.cat !== currentCategory) return false;
    return true;
  });

  if (query) {
    list = list.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query));
  }

  label.textContent = currentCategory === 'Todos' ? (query ? 'Resultados de búsqueda' : 'Todos los productos') : currentCategory;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 16px; color: var(--text-muted)">
        <p style="font-size:14px; font-weight:700">No encontramos productos en esta sección</p>
        <p style="font-size:12px; margin-top:4px">Intenta buscando con otro término o categoría.</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map(p => {
    const isFav = favorites.includes(p.id);
    return `
      <div class="product-row ${p.available ? '' : 'disabled'}" onclick="${p.available ? `openProductModal(${p.id})` : ''}">
        <div class="product-img-box">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-details">
          <div class="product-meta">
            <span class="product-title">${p.name}</span>
            <span class="product-price">${fmtCOP(p.price)}</span>
          </div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-badge-row">
            <span class="mini-badge">${p.cat}</span>
            ${!p.available ? '<span class="mini-badge out">Agotado</span>' : '<span class="mini-badge" style="color:var(--success)">Disponible</span>'}
          </div>
        </div>
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(event, ${p.id})" title="Favorito">
          <svg class="icon-svg" style="width:16px; height:16px" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

function setCategory(cat, el) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  renderProducts();
}

function onSearchInput() {
  renderProducts();
}

function toggleFav(e, id) {
  e.stopPropagation();
  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
  } else {
    favorites.push(id);
    showToast('Guardado en favoritos');
  }
  localStorage.setItem('cg_favs', JSON.stringify(favorites));
  renderProducts();
}

/* ==========================================================
   MODAL DE PRODUCTO
========================================================== */
function openProductModal(id) {
  modalProduct = products.find(p => p.id === id);
  if (!modalProduct || !modalProduct.available) return;

  modalQty = 1;
  modalExtraPrice = 0;
  modalSelectedSize = 'Regular';

  document.getElementById('modal-p-img').src = modalProduct.image;
  document.getElementById('modal-p-name').textContent = modalProduct.name;
  document.getElementById('modal-p-desc').textContent = modalProduct.desc;
  document.getElementById('modal-p-price').textContent = fmtCOP(modalProduct.price);
  document.getElementById('modal-qty-val').textContent = 1;
  document.getElementById('modal-note-input').value = '';

  const isCoffee = modalProduct.cat === 'Bebidas calientes';
  document.getElementById('group-size').style.display = isCoffee ? 'block' : 'none';
  document.getElementById('group-milk').style.display = isCoffee ? 'block' : 'none';
  document.getElementById('group-sweet').style.display = (isCoffee || modalProduct.cat === 'Bebidas frías') ? 'block' : 'none';

  document.getElementById('opt-size-std').classList.add('selected');
  document.getElementById('opt-size-lg').classList.remove('selected');

  updateModalTotal();
  document.getElementById('modal-product').classList.add('open');
}

function selectSize(size, extra) {
  modalSelectedSize = size;
  modalExtraPrice = extra;
  document.getElementById('opt-size-std').classList.toggle('selected', size === 'Regular');
  document.getElementById('opt-size-lg').classList.toggle('selected', size === 'Grande');
  updateModalTotal();
}

function updateModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modal-qty-val').textContent = modalQty;
  updateModalTotal();
}

function updateModalTotal() {
  if (!modalProduct) return;
  const unit = modalProduct.price + modalExtraPrice;
  document.getElementById('modal-btn-total').textContent = fmtCOP(unit * modalQty);
}

function addModalItemToCart() {
  if (!modalProduct) return;

  const isCoffee = modalProduct.cat === 'Bebidas calientes';
  const milk = isCoffee ? document.getElementById('modal-milk-select').value : '';
  const sugar = document.getElementById('modal-sugar-select').value;
  const note = document.getElementById('modal-note-input').value.trim();

  let detailsList = [];
  if (isCoffee) detailsList.push(modalSelectedSize);
  if (isCoffee && milk && milk !== 'Sin leche') detailsList.push(milk);
  if (sugar && sugar !== 'Normal') detailsList.push(sugar);
  if (note) detailsList.push('Nota: ' + note);

  const details = detailsList.join(' · ');
  const unitPrice = modalProduct.price + modalExtraPrice;

  const existing = cart.find(i => i.id === modalProduct.id && i.details === details);
  if (existing) {
    existing.qty += modalQty;
  } else {
    cart.push({
      id: modalProduct.id,
      image: modalProduct.image,
      name: modalProduct.name,
      price: unitPrice,
      qty: modalQty,
      details
    });
  }

  saveCart();
  updateCartBadge();
  document.getElementById('modal-product').classList.remove('open');
  showToast('Agregado al pedido');
}

function closeModalOnBackdrop(e, id) {
  if (e.target.id === id) {
    document.getElementById(id).classList.remove('open');
  }
}

/* ==========================================================
   CARRITO Y FLUJO NEQUI CON COMPROBANTE
========================================================== */
function renderStaticNequiQR() {
  const container = document.getElementById('nequi-static-qr');
  if (!container || container.innerHTML) return;
  try {
    new QRCode(container, {
      text: 'nequi://pay?phone=3145558920&name=CafeteriaUnisimon',
      width: 76,
      height: 76,
      colorDark: '#0a6b35',
      colorLight: '#ffffff'
    });
  } catch (e) {}
}

function renderCart() {
  const wrapper = document.getElementById('cart-items-wrapper');
  const empty = document.getElementById('cart-empty-message');
  const checkout = document.getElementById('cart-checkout-section');
  const warning = document.getElementById('cart-active-order-warning');
  const confirmBtn = document.getElementById('btn-confirm-order');

  const studentName = currentUser ? currentUser.name : '';
  const hasActiveOrder = orders.some(o => o.student === studentName && (o.status === 'recibido' || o.status === 'preparando' || o.status === 'listo' || o.status === 'pendiente_pago'));

  if (cart.length === 0) {
    wrapper.innerHTML = '';
    empty.style.display = 'block';
    checkout.style.display = 'none';
    warning.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  checkout.style.display = 'block';

  // Verificar si tiene sanción activa para Nequi
  const now = Date.now();
  const isSanctioned = userStrikeUntil > now;
  const nequiOptionCard = document.getElementById('opt-pay-transfer');

  if (isSanctioned) {
    nequiOptionCard.style.opacity = '0.4';
    nequiOptionCard.style.pointerEvents = 'none';
    if (paymentMethod === 'transfer') setPaymentMethod('cash');
  } else {
    nequiOptionCard.style.opacity = '1';
    nequiOptionCard.style.pointerEvents = 'auto';
  }

  if (hasActiveOrder) {
    warning.style.display = 'block';
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Debes retirar tu pedido anterior primero';
  } else if (kitchenPaused) {
    warning.style.display = 'block';
    warning.textContent = 'Aviso: La cocina está en pausa momentánea. Por favor espera unos minutos para confirmar tu orden.';
    confirmBtn.disabled = true;
    confirmBtn.textContent = 'Cocina pausada por alta demanda';
  } else {
    warning.style.display = 'none';
    confirmBtn.disabled = false;
    confirmBtn.textContent = 'Confirmar y Generar Código QR';
  }

  let subtotal = 0;
  wrapper.innerHTML = cart.map((item, idx) => {
    subtotal += item.price * item.qty;
    return `
      <div class="cart-item-row">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          ${item.details ? `<div class="cart-item-options">${item.details}</div>` : ''}
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            <button class="qty-btn" style="margin-left:6px; color:var(--danger)" onclick="removeCartItem(${idx})">
              <svg class="icon-svg" style="width:13px; height:13px" viewBox="0 0 24 24">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
        <div style="font-weight:700; font-size:14px">${fmtCOP(item.price * item.qty)}</div>
      </div>
    `;
  }).join('');

  document.getElementById('sum-subtotal').textContent = fmtCOP(subtotal);
  document.getElementById('sum-total').textContent = fmtCOP(subtotal);
  document.getElementById('nequi-transfer-amount').textContent = fmtCOP(subtotal);
}

function updateCartQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart();
  renderCart();
  updateCartBadge();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  saveCart();
  renderCart();
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('cg_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((acc, i) => acc + i.qty, 0);
  const dot = document.getElementById('cart-badge-dot');
  if (total > 0) {
    dot.textContent = total;
    dot.style.display = 'flex';
  } else {
    dot.style.display = 'none';
  }
}

function setOrderType(type) {
  orderType = type;
  document.getElementById('opt-takeaway').classList.toggle('selected', type === 'takeaway');
  document.getElementById('opt-dinein').classList.toggle('selected', type === 'dinein');
  document.getElementById('table-number-row').style.display = type === 'dinein' ? 'block' : 'none';
}

function setPaymentMethod(method) {
  paymentMethod = method;
  document.getElementById('opt-pay-cash').classList.toggle('selected', method === 'cash');
  document.getElementById('opt-pay-transfer').classList.toggle('selected', method === 'transfer');

  const nequiBox = document.getElementById('nequi-info-box');
  const policyNote = document.getElementById('payment-policy-note');

  if (method === 'transfer') {
    nequiBox.style.display = 'block';
    policyNote.textContent = '* Para pagos con Nequi: Cocina iniciará la preparación cuando el personal valide la captura de tu transferencia.';
  } else {
    nequiBox.style.display = 'none';
    policyNote.textContent = '* Para pago en efectivo: Cuentas con 15 minutos para reclamar tu orden una vez lista en barra.';
  }
}

function toggleNequiStep2(isChecked) {
  const step2Box = document.getElementById('nequi-step2-box');
  step2Box.style.display = isChecked ? 'block' : 'none';
  if (!isChecked) {
    currentUploadedProofDataUrl = '';
    const prev = document.getElementById('nequi-proof-preview');
    prev.style.display = 'none';
    prev.src = '';
  }
}

function handleProofFileSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    currentUploadedProofDataUrl = e.target.result;
    const preview = document.getElementById('nequi-proof-preview');
    preview.src = currentUploadedProofDataUrl;
    preview.style.display = 'block';
    showToast('Captura de transferencia cargada con éxito');
  };
  reader.readAsDataURL(file);
}

function generateSimulatedNequiProof() {
  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const ref = 'M' + Math.floor(1000000 + Math.random() * 9000000);
  const dateStr = new Date().toLocaleString('es-CO');

  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 480;
  const ctx = canvas.getContext('2d');

  // Fondo Nequi morado/oscuro característico
  ctx.fillStyle = '#200020';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Tarjeta de comprobante
  ctx.fillStyle = '#ffffff';
  ctx.roundRect ? ctx.roundRect(16, 20, 328, 440, 16) : ctx.fillRect(16, 20, 328, 440);
  ctx.fill();

  // Encabezado
  ctx.fillStyle = '#200020';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('¡Envío exitoso!', 36, 60);

  ctx.fillStyle = '#6b7280';
  ctx.font = '12px sans-serif';
  ctx.fillText(dateStr, 36, 80);

  // Línea
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(36, 95);
  ctx.lineTo(324, 95);
  ctx.stroke();

  // Valor
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(fmtCOP(total), 36, 140);

  ctx.fillStyle = '#4b5563';
  ctx.font = '13px sans-serif';
  ctx.fillText('Para: Cafetería Central Unisimón', 36, 175);
  ctx.fillText('Número: 314 555 8920', 36, 198);
  ctx.fillText('Desde: ' + (currentUser ? currentUser.name : 'Estudiante'), 36, 221);

  // Recuadro de referencia
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(36, 250, 288, 54);
  ctx.fillStyle = '#6b7280';
  ctx.font = '11px sans-serif';
  ctx.fillText('NÚMERO DE APROBACIÓN / REF', 46, 270);
  ctx.fillStyle = '#200020';
  ctx.font = 'bold 16px monospace';
  ctx.fillText(ref, 46, 292);

  ctx.fillStyle = '#059669';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Transferencia bancaria completada', 36, 340);

  currentUploadedProofDataUrl = canvas.toDataURL('image/jpeg');
  const preview = document.getElementById('nequi-proof-preview');
  preview.src = currentUploadedProofDataUrl;
  preview.style.display = 'block';

  document.getElementById('nequi-ref-input').value = ref;
  showToast('Captura Nequi simulada generada: ' + ref);
}

function confirmOrder() {
  if (cart.length === 0) return;
  if (kitchenPaused) {
    showToast('La cocina está temporalmente pausada por alta demanda');
    return;
  }

  const studentName = currentUser ? currentUser.name : 'Estudiante';
  const hasActiveOrder = orders.some(o => o.student === studentName && (o.status === 'recibido' || o.status === 'preparando' || o.status === 'listo' || o.status === 'pendiente_pago'));
  if (hasActiveOrder) {
    showToast('Ya tienes una orden en proceso. Retírala primero.');
    return;
  }

  let nequiRef = '';
  let initialStatus = 'recibido';
  let proofImage = '';

  if (paymentMethod === 'transfer') {
    const chkSent = document.getElementById('chk-nequi-sent').checked;
    if (!chkSent) {
      showToast('Debes marcar el Paso 1: Ya envié el dinero en Nequi');
      return;
    }

    if (!currentUploadedProofDataUrl) {
      showToast('Por favor adjunta la captura del comprobante de transferencia');
      return;
    }

    nequiRef = document.getElementById('nequi-ref-input').value.trim().toUpperCase() || ('REF-' + Math.floor(100000 + Math.random() * 900000));
    proofImage = currentUploadedProofDataUrl;
    initialStatus = 'pendiente_pago';
  }

  const orderNum = orders.length + 1;
  const id = 'CGO-' + String(orderNum).padStart(4, '0');
  const table = orderType === 'dinein' ? (document.getElementById('table-number-input').value.trim() || 'En mesa') : '';
  const pickupTime = document.getElementById('cart-pickup-time').value;

  const newOrder = {
    id,
    date: 'Hoy, ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    student: studentName,
    orderType,
    tableNumber: table,
    pickupTime,
    paymentMethod: paymentMethod === 'transfer' ? 'Nequi' : 'Efectivo en caja',
    nequiRef,
    proofImage,
    items: [...cart],
    total: cart.reduce((acc, i) => acc + i.price * i.qty, 0),
    status: initialStatus,
    token: 'tok_' + Math.random().toString(36).slice(2, 8),
    readyAt: null,
    expiresAt: null
  };

  orders.unshift(newOrder);
  localStorage.setItem('cg_orders', JSON.stringify(orders));

  // Reset del carrito
  cart = [];
  currentUploadedProofDataUrl = '';
  document.getElementById('chk-nequi-sent').checked = false;
  document.getElementById('nequi-step2-box').style.display = 'none';
  document.getElementById('nequi-proof-preview').style.display = 'none';
  document.getElementById('nequi-ref-input').value = '';

  saveCart();
  updateCartBadge();
  renderCart();
  updateKitchenWaitUI();

  showTicket(newOrder);
  switchView('ticket');

  if (initialStatus === 'pendiente_pago') {
    showToast('Orden enviada con comprobante. Cocina verificará la transferencia.');
  } else {
    showToast('Orden ' + id + ' enviada a cocina');
  }
}

/* ==========================================================
   TICKET Y RECIBO
========================================================== */
function showTicket(order) {
  document.getElementById('tk-code').textContent = order.id;
  document.getElementById('tk-student').textContent = order.student;
  document.getElementById('tk-type').textContent = order.orderType === 'dinein' ? `Consumo en mesa (${order.tableNumber || 'Sin número'})` : 'Para llevar';
  document.getElementById('tk-time').textContent = order.pickupTime;
  document.getElementById('tk-pay').textContent = order.paymentMethod;
  document.getElementById('tk-date').textContent = order.date;
  document.getElementById('tk-total').textContent = fmtCOP(order.total);

  const nequiMetaRow = document.getElementById('tk-nequi-meta-row');
  if (order.nequiRef) {
    nequiMetaRow.style.display = 'block';
    document.getElementById('tk-nequi-meta').textContent = order.nequiRef;
  } else {
    nequiMetaRow.style.display = 'none';
  }

  const sb = document.getElementById('tk-status-badge');
  const nequiNotice = document.getElementById('tk-nequi-notice');
  const timerBox = document.getElementById('tk-timer-box');
  const timerTitle = document.getElementById('pt-timer-title');
  const timerVal = document.getElementById('pt-timer-val');
  const timerDesc = document.getElementById('pt-timer-desc');
  const proofHolder = document.getElementById('tk-proof-img-holder');

  if (activeTimerInterval) clearInterval(activeTimerInterval);

  if (order.status === 'pendiente_pago') {
    sb.className = 'order-status-badge st-pendiente_pago';
    sb.textContent = 'POR VALIDAR NEQUI';
    nequiNotice.style.display = 'block';
    document.getElementById('tk-nequi-ref-val').textContent = order.nequiRef || 'Pendiente';
    timerBox.style.display = 'none';

    if (order.proofImage) {
      proofHolder.innerHTML = `
        <div style="font-size:11px; margin-top:6px; color:var(--text-muted)">Captura adjunta enviada:</div>
        <img src="${order.proofImage}" alt="Comprobante" style="max-height:90px; border-radius:4px; border:1px solid var(--border); margin-top:4px;" />
      `;
    } else {
      proofHolder.innerHTML = '';
    }
  } else {
    nequiNotice.style.display = 'none';
    sb.className = 'order-status-badge st-' + order.status;
    sb.textContent = order.status === 'no_reclamado' ? 'NO RECLAMADO' : (order.status === 'sancionado' ? 'SANCIONADO' : order.status.toUpperCase());
  }

  if (order.status === 'listo' && order.expiresAt) {
    timerBox.style.display = 'block';
    timerBox.className = 'pickup-timer-box';
    timerTitle.textContent = 'Tiempo restante para retirar en barra';

    function updateCountdown() {
      const remainingMs = order.expiresAt - Date.now();
      if (remainingMs <= 0) {
        timerBox.className = 'pickup-timer-box expired';
        timerTitle.textContent = 'Plazo de retiro vencido';
        timerVal.textContent = 'EXPIRADO';
        timerDesc.textContent = 'La orden no fue retirada a tiempo y fue liberada por cafetería.';
        clearInterval(activeTimerInterval);
      } else {
        const totalSec = Math.floor(remainingMs / 1000);
        const mins = String(Math.floor(totalSec / 60)).padStart(2, '0');
        const secs = String(totalSec % 60).padStart(2, '0');
        timerVal.textContent = `${mins}:${secs}`;
      }
    }

    updateCountdown();
    activeTimerInterval = setInterval(updateCountdown, 1000);
  } else if (order.status === 'no_reclamado' || order.status === 'sancionado') {
    timerBox.style.display = 'block';
    timerBox.className = 'pickup-timer-box expired';
    timerTitle.textContent = 'Orden anulada o vencida';
    timerVal.textContent = order.status === 'sancionado' ? 'SANCIONADA' : 'VENCIDA';
    timerDesc.textContent = 'Este pedido no se procesó por sanción o abandono de la orden.';
  } else if (order.status !== 'pendiente_pago') {
    timerBox.style.display = 'none';
  }

  const qrContainer = document.getElementById('tk-qr');
  qrContainer.innerHTML = '';
  try {
    new QRCode(qrContainer, {
      text: `${order.id}|${order.token}|${order.total}`,
      width: 136,
      height: 136,
      colorDark: '#0a6b35',
      colorLight: '#ffffff'
    });
  } catch (e) {}

  const itemsContainer = document.getElementById('tk-items');
  itemsContainer.innerHTML = order.items.map(i => `
    <div class="ticket-row">
      <span>${i.name} × ${i.qty}</span>
      <span>${fmtCOP(i.price * i.qty)}</span>
    </div>
    ${i.details ? `<div style="font-size:11px; color:var(--text-muted); margin-bottom:4px">${i.details}</div>` : ''}
  `).join('');
}

/* ==========================================================
   HISTORIAL DE PEDIDOS
========================================================== */
function renderOrders() {
  const container = document.getElementById('orders-feed');
  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 18px; color:var(--text-muted)">
        <p style="font-weight:700">No hay pedidos registrados</p>
      </div>`;
    return;
  }

  const statusNames = {
    pendiente_pago: 'Pendiente de pago Nequi',
    recibido: 'En espera en cafetería',
    preparando: 'En preparación en cocina',
    listo: 'Listo para reclamar en barra',
    entregado: 'Entregado',
    no_reclamado: 'No reclamado / Vencido',
    sancionado: 'Anulado por sanción'
  };

  container.innerHTML = orders.map(o => `
    <div class="order-entry">
      <div class="order-entry-head">
        <span style="font-size:14px; font-weight:700">${o.id} · ${o.date}</span>
        <span class="order-status-badge st-${o.status}">${statusNames[o.status] || o.status}</span>
      </div>
      <div style="font-size:12px; color:var(--text-muted); margin-bottom:8px">
        ${o.items.map(i => `${i.name} ×${i.qty}`).join(' · ')}
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center">
        <span style="font-size:13px; font-weight:700">${fmtCOP(o.total)}</span>
        <button class="btn-pill" onclick="viewOrderTicket('${o.id}')">Ver Ticket QR</button>
      </div>
    </div>
  `).join('');
}

function viewOrderTicket(id) {
  const o = orders.find(x => x.id === id);
  if (o) {
    showTicket(o);
    switchView('ticket');
  }
}

/* ==========================================================
   PANEL DE CAFETERÍA (STAFF / COCINA)
========================================================== */
function renderStaffPanel() {
  const activeOrders = orders.filter(o => o.status !== 'entregado' && o.status !== 'no_reclamado' && o.status !== 'sancionado');
  const readyOrders = orders.filter(o => o.status === 'listo');
  const totalToday = orders.filter(o => o.status === 'entregado').reduce((acc, o) => acc + o.total, 0);

  document.getElementById('stat-active-count').textContent = activeOrders.length;
  document.getElementById('stat-ready-count').textContent = readyOrders.length;
  document.getElementById('stat-total-today').textContent = fmtCOP(totalToday);

  updateKitchenWaitUI();

  const container = document.getElementById('staff-orders-list');
  if (activeOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:30px 18px; color:var(--text-muted)">
        <p style="font-weight:700">No hay órdenes pendientes en este momento.</p>
      </div>`;
    return;
  }

  container.innerHTML = activeOrders.map(o => {
    // Si la orden está pendiente de validación Nequi
    if (o.status === 'pendiente_pago') {
      return `
        <div class="order-entry" style="background:var(--warning-bg); border:1px solid var(--warning); border-radius:var(--radius-sm); margin:10px 18px;">
          <div class="order-entry-head">
            <div>
              <strong style="font-size:15px; color:var(--warning);">${o.id}</strong>
              <span style="font-size:12px; color:var(--text-muted)">(${o.student})</span>
            </div>
            <span class="order-status-badge st-pendiente_pago">POR VALIDAR NEQUI</span>
          </div>

          <div style="display:flex; gap:12px; align-items:center; margin: 8px 0;">
            ${o.proofImage ? `
              <div class="proof-thumbnail-btn" onclick="openProofViewer('${o.proofImage}', '${o.id}', '${o.student}')" title="Ver captura completa">
                <img src="${o.proofImage}" alt="Comprobante" />
              </div>
            ` : '<div style="font-size:11px; color:var(--danger)">Sin captura adjunta</div>'}

            <div style="flex:1; font-size:12px; line-height:1.4;">
              <div>Ref: <strong style="font-family:monospace; background:var(--surface); padding:1px 5px; border-radius:4px;">${o.nequiRef || 'SIN REF'}</strong></div>
              <div>Monto a confirmar: <strong>${fmtCOP(o.total)}</strong></div>
              <div style="font-size:11px; color:var(--text-muted)">Toca la miniatura para inspeccionar la captura</div>
            </div>
          </div>

          <div style="font-size:12px; margin: 6px 0; color:var(--text-muted);">
            ${o.items.map(i => `• ${i.name} × ${i.qty}`).join(' · ')}
          </div>

          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
            <button class="btn-action" style="margin-top:0; padding:8px 12px; font-size:12px; background:var(--primary); color:#fff; flex:1;" onclick="verifyNequiAndStartPrep('${o.id}')">
              Aprobar Pago y Empezar a Cocinar
            </button>
            <button class="btn-secondary-action" style="margin-top:0; padding:8px 12px; font-size:12px; width:auto; color:var(--danger); border-color:var(--danger);" onclick="openStrikeModal('${o.id}', '${o.student}')">
              Reportar / Sancionar
            </button>
          </div>
        </div>
      `;
    }

    const nextStepMap = {
      recibido: { next: 'preparando', label: 'Iniciar Preparación' },
      preparando: { next: 'listo', label: 'Marcar: ¡Listo para retirar!' },
      listo: { next: 'entregado', label: 'Entregar pedido' }
    };

    return `
      <div class="order-entry" style="background:var(--surface)">
        <div class="order-entry-head">
          <div>
            <strong style="font-size:15px">${o.id}</strong>
            <span style="font-size:12px; color:var(--text-muted)">(${o.student})</span>
          </div>
          <span class="order-status-badge st-${o.status}">${o.status.toUpperCase()}</span>
        </div>
        <div style="font-size:12px; margin: 4px 0 8px; line-height:1.5;">
          ${o.items.map(i => `• <strong>${i.name} × ${i.qty}</strong> ${i.details ? `<span style="color:var(--text-muted)">(${i.details})</span>` : ''}`).join('<br>')}
        </div>
        <div style="font-size:11px; color:var(--text-muted); margin-bottom:8px">
          Hora: ${o.pickupTime} | Modalidad: ${o.orderType === 'dinein' ? `Mesa: ${o.tableNumber || 'N/A'}` : 'Para llevar'} | Pago: ${o.paymentMethod}
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap">
          <button class="btn-action" style="margin-top:0; padding:8px 14px; font-size:12px; flex:1;" onclick="advanceOrderStatus('${o.id}', '${nextStepMap[o.status].next}')">
            ${nextStepMap[o.status].label}
          </button>
          ${o.status === 'listo' ? `
            <button class="btn-secondary-action" style="margin-top:0; padding:8px 12px; font-size:12px; width:auto; color:var(--danger); border-color:var(--danger);" onclick="markOrderNoShow('${o.id}')">
              Marcar No Reclamado
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function openProofViewer(imgUrl, orderId, studentName) {
  document.getElementById('modal-viewer-img').src = imgUrl;
  document.getElementById('modal-viewer-info').textContent = `Orden ${orderId} · ${studentName}`;
  document.getElementById('modal-proof-viewer').classList.add('open');
}

function verifyNequiAndStartPrep(id) {
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = 'preparando';
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    showToast(`Pago verificado para ${id}. ¡Iniciando preparación en cocina!`);
  }
}

function openStrikeModal(orderId, studentName) {
  targetStrikeOrderId = orderId;
  document.getElementById('modal-strike-target').textContent = `Orden: ${orderId} · Estudiante: ${studentName}`;
  document.getElementById('modal-strike').classList.add('open');
}

function confirmApplyStrike() {
  const durationSelect = document.getElementById('strike-duration-select').value;
  const reason = document.getElementById('strike-reason-select').value;

  let durationMs = 12 * 60 * 60 * 1000;
  if (durationSelect === '24h') durationMs = 24 * 60 * 60 * 1000;
  if (durationSelect === '3d') durationMs = 3 * 24 * 60 * 60 * 1000;
  if (durationSelect === '7d') durationMs = 7 * 24 * 60 * 60 * 1000;
  if (durationSelect === '14d') durationMs = 14 * 24 * 60 * 60 * 1000;

  userStrikes++;
  userStrikeUntil = Date.now() + durationMs;
  userStrikeReason = reason;

  localStorage.setItem('cg_strikes', userStrikes);
  localStorage.setItem('cg_strike_until', userStrikeUntil);
  localStorage.setItem('cg_strike_reason', userStrikeReason);

  const o = orders.find(x => x.id === targetStrikeOrderId);
  if (o) {
    o.status = 'sancionado';
    localStorage.setItem('cg_orders', JSON.stringify(orders));
  }

  document.getElementById('modal-strike').classList.remove('open');
  checkStrikeActiveStatus();
  renderReputationBadge();
  renderStaffPanel();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();

  showToast(`Sanción aplicada (${durationSelect}) y orden cancelada.`);
}

function advanceOrderStatus(id, newStatus) {
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = newStatus;
    if (newStatus === 'listo') {
      o.readyAt = Date.now();
      o.expiresAt = Date.now() + 15 * 60 * 1000;
    }
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    showToast(`Orden ${id} actualizada a: ${newStatus.toUpperCase()}`);
  }
}

function markOrderNoShow(id) {
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = 'no_reclamado';
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    userStrikes++;
    localStorage.setItem('cg_strikes', userStrikes);
    renderReputationBadge();
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    showToast(`Orden ${id} marcada como NO reclamada.`);
  }
}

function quickValidateStaffCode() {
  const input = document.getElementById('staff-code-input');
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  const o = orders.find(x => x.id === code);
  if (!o) {
    showToast('Orden no encontrada');
    return;
  }
  if (o.status === 'entregado') {
    showToast('La orden ya fue entregada');
    return;
  }
  if (o.status === 'pendiente_pago') {
    showToast('Esta orden aún tiene el pago Nequi sin verificar');
    return;
  }

  o.status = 'entregado';
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  input.value = '';
  renderStaffPanel();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  showToast(`${code} entregada con éxito`);
}

/* ==========================================================
   NAVEGACIÓN ENTRE VISTAS
========================================================== */
function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + name);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('tab-' + name);
  if (btn) btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (name === 'orders') renderOrders();
  if (name === 'staff') renderStaffPanel();
  if (name === 'cart') renderCart();
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('cg_theme', newTheme);
}

if (localStorage.getItem('cg_theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

/* ==========================================================
   UTILIDADES
========================================================== */
function fmtCOP(n) {
  return '$' + Number(n).toLocaleString('es-CO');
}

let _toastTimeout;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimeout);
  _toastTimeout = setTimeout(() => el.classList.remove('show'), 2400);
}

initAuth();