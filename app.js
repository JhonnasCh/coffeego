const DEFAULT_PRODUCTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80',
    name: 'Tinto Campesino',
    desc: 'Café negro colombiano recién colado en taza, con toque de panela.',
    price: 1800,
    cat: 'Bebidas calientes',
    available: true,
    prepTime: 3
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=300&q=80',
    name: 'Café con Leche',
    desc: 'Espresso suave con leche entera o cremada caliente.',
    price: 2500,
    cat: 'Bebidas calientes',
    available: true,
    prepTime: 4
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=300&q=80',
    name: 'Aromática de Frutas',
    desc: 'Infusión caliente en vaso de cristal con yerbabuena, manzana y canela.',
    price: 1500,
    cat: 'Bebidas calientes',
    available: true,
    prepTime: 3
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=300&q=80',
    name: 'Capuchino Vainilla',
    desc: 'Espresso doble con espuma densa de leche vaporizada y canela en polvo.',
    price: 3800,
    cat: 'Bebidas calientes',
    available: true,
    prepTime: 5
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=300&q=80',
    name: 'Chocolate Caliente',
    desc: 'Taza de chocolate de cacao colombiano tradicional bien caliente.',
    price: 2800,
    cat: 'Bebidas calientes',
    available: true,
    prepTime: 4
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80',
    name: 'Jugo de Lulo Natural',
    desc: 'Vaso de jugo natural de pulpa de lulo servido bien frío con hielo.',
    price: 2500,
    cat: 'Bebidas frías',
    available: true,
    prepTime: 5
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
    name: 'Jugo de Maracuyá',
    desc: 'Maracuyá fresco, dulce y refrescante con hielo triturado.',
    price: 2500,
    cat: 'Bebidas frías',
    available: true,
    prepTime: 5
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=300&q=80',
    name: 'Limonada de Coco',
    desc: 'Cremosa y fría, elaborada con crema de coco natural y limón fresco.',
    price: 3500,
    cat: 'Bebidas frías',
    available: true,
    prepTime: 6
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80',
    name: 'Avena Fría con Canela',
    desc: 'Avena cremosa batida con leche y un toque de canela aromática.',
    price: 2200,
    cat: 'Bebidas frías',
    available: true,
    prepTime: 4
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80',
    name: 'Almuerzo Ejecutivo del Día',
    desc: 'Plato completo con arroz, proteína a la plancha, ensalada fresca y jugo.',
    price: 9500,
    cat: 'Almuerzos',
    available: true,
    prepTime: 18
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80',
    name: 'Bowl de Pollo y Ensalada',
    desc: 'Pechuga desmechada con lechuga, maíz tierno, tomates cherry y aderezo.',
    price: 8000,
    cat: 'Almuerzos',
    available: true,
    prepTime: 15
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=300&q=80',
    name: 'Cazuela de Frijoles',
    desc: 'Cazuela casera de frijoles rojos con plátano maduro y arroz.',
    price: 8500,
    cat: 'Almuerzos',
    available: false,
    prepTime: 20
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80',
    name: 'Empanadas de Carne o Pollo (x2)',
    desc: 'Empanadas doradas y crocantes de maíz colombiano con ají picante.',
    price: 3500,
    cat: 'Snacks',
    available: true,
    prepTime: 6
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80',
    name: 'Pan de Bono Caliente',
    desc: 'Pandebono recién horneado con queso costeño y almidón de yuca.',
    price: 2000,
    cat: 'Snacks',
    available: true,
    prepTime: 2
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=300&q=80',
    name: 'Buñuelo Tradicional',
    desc: 'Buñuelo redondo, crocante por fuera y suave esponjoso por dentro.',
    price: 1600,
    cat: 'Snacks',
    available: true,
    prepTime: 2
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80',
    name: 'Arepa de Choclo con Queso',
    desc: 'Arepa dulce de maíz tierno asada con mantequilla y queso derretido.',
    price: 3200,
    cat: 'Snacks',
    available: true,
    prepTime: 8
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80',
    name: 'Brownie Artesanal',
    desc: 'Porción melcochuda de brownie de chocolate semiamargo con nueces.',
    price: 3500,
    cat: 'Postres',
    available: true,
    prepTime: 2
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80',
    name: 'Postre de Tres Leches',
    desc: 'Torta húmeda tradicional bañada en salsa de tres leches.',
    price: 3800,
    cat: 'Postres',
    available: true,
    prepTime: 2
  }
];

const MAX_ACTIVE_ORDERS = 2;

function getLocalDateISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

let currentUser = null;
let userStrikes = parseInt(localStorage.getItem('cg_strikes') || '0');
let userStrikeUntil = parseInt(localStorage.getItem('cg_strike_until') || '0');
let userStrikeReason = localStorage.getItem('cg_strike_reason') || '';
let kitchenPaused = localStorage.getItem('cg_kitchen_paused') === 'true';
let kitchenWaitSetting = localStorage.getItem('cg_kitchen_wait_setting') || '15';
let products = DEFAULT_PRODUCTS;
let favorites = JSON.parse(localStorage.getItem('cg_favs') || '[]');
let cart = JSON.parse(localStorage.getItem('cg_cart') || '[]');

let orders = JSON.parse(localStorage.getItem('cg_orders') || 'null') || [
  {
    id: 'CGO-0003',
    isoDate: getLocalDateISO(0),
    date: 'Hoy, 10:15 AM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Nequi',
    cashBill: null,
    cashChange: 0,
    nequiRef: 'M7829104',
    proofImage: '',
    items: [
      { name: 'Empanadas de Carne o Pollo (x2)', qty: 1, price: 3500, details: '' },
      { name: 'Jugo de Lulo Natural', qty: 1, price: 2500, details: '' }
    ],
    total: 6000,
    status: 'preparando',
    token: 'tok_demo3',
    readyAt: null,
    expiresAt: null,
    rejectionReason: null
  },
  {
    id: 'CGO-0002',
    isoDate: getLocalDateISO(0),
    date: 'Hoy, 09:50 AM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Efectivo en caja',
    cashBill: 10000,
    cashChange: 6200,
    nequiRef: '',
    proofImage: '',
    items: [
      { name: 'Capuchino Vainilla', qty: 1, price: 3800, details: 'Regular · Entera' }
    ],
    total: 3800,
    status: 'recibido',
    token: 'tok_demo2',
    readyAt: null,
    expiresAt: null,
    rejectionReason: null
  },
  {
    id: 'CGO-0001',
    isoDate: getLocalDateISO(0),
    date: 'Hoy, 09:20 AM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Efectivo en caja',
    cashBill: 'exact',
    cashChange: 0,
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
    expiresAt: null,
    rejectionReason: null
  },
  {
    id: 'CGO-9999',
    isoDate: getLocalDateISO(-1),
    date: 'Ayer, 11:30 AM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'En 30 minutos',
    paymentMethod: 'Nequi',
    cashBill: null,
    cashChange: 0,
    nequiRef: 'M4481920',
    proofImage: '',
    items: [
      { name: 'Brownie Artesanal', qty: 1, price: 3500, details: '' }
    ],
    total: 3500,
    status: 'rechazado',
    token: 'tok_demo_rej',
    readyAt: null,
    expiresAt: null,
    rejectionReason: 'El comprobante enviado no corresponde con el valor de la orden'
  },
  {
    id: 'CGO-9998',
    isoDate: getLocalDateISO(-1),
    date: 'Ayer, 01:10 PM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'dinein',
    tableNumber: 'Mesa 4',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Efectivo en caja',
    cashBill: 20000,
    cashChange: 10500,
    nequiRef: '',
    proofImage: '',
    items: [
      { name: 'Almuerzo Ejecutivo del Día', qty: 1, price: 9500, details: '' }
    ],
    total: 9500,
    status: 'entregado',
    token: 'tok_demo_ent',
    readyAt: null,
    expiresAt: null,
    rejectionReason: null
  },
  {
    id: 'CGO-9997',
    isoDate: getLocalDateISO(-1),
    date: 'Ayer, 04:15 PM',
    student: 'Estudiante Demo',
    studentCode: '20240001',
    orderType: 'takeaway',
    tableNumber: '',
    pickupTime: 'Lo antes posible',
    paymentMethod: 'Efectivo en caja',
    cashBill: 'exact',
    cashChange: 0,
    nequiRef: '',
    proofImage: '',
    items: [
      { name: 'Avena Fría con Canela', qty: 2, price: 2200, details: '' }
    ],
    total: 4400,
    status: 'no_reclamado',
    token: 'tok_demo_noshow',
    readyAt: null,
    expiresAt: null,
    rejectionReason: 'Superó los 15 minutos de tolerancia para retirar en barra'
  }
];

if (Array.isArray(orders)) {
  orders.forEach(o => {
    if (!o.isoDate) o.isoDate = getLocalDateISO(0);
    if (!o.studentCode) o.studentCode = '20240001';
    if (!o.sede) o.sede = 'Sede 1';
    if (o.student && (o.student.toLowerCase().includes('charris') || o.student.toLowerCase().includes('jhonnas'))) {
      o.student = 'Estudiante Demo';
    }
    if (Array.isArray(o.items)) {
      o.items.forEach(i => {
        if (!i.image) {
          const p = products.find(prod => prod.name === i.name);
          if (p) i.image = p.image;
        }
      });
    }
  });
}

let strikeHistory = JSON.parse(localStorage.getItem('cg_strike_history') || 'null') || [
  {
    orderId: 'CGO-9999',
    student: 'Estudiante Demo (20240001)',
    reason: 'Comprobante falso o editado',
    duration: '24 Horas',
    date: 'Ayer, 11:32 AM',
    status: 'perdonado'
  }
];

let currentCategory = 'Todos';
let currentRole = 'student';
let orderType = 'takeaway';
let paymentMethod = 'cash';
let selectedCashBill = 'exact';
let currentUploadedProofDataUrl = '';
let targetStrikeOrderId = null;
let modalProduct = null;
let modalQty = 1;
let modalExtraPrice = 0;
let modalSelectedSize = 'Regular';
let activeTimerInterval = null;
let staffSortMode = 'arrival';
let currentStaffSubtab = 'queue';
let selectedCalendarDate = getLocalDateISO(0);
let selectedCalendarFilter = 'all';
let lastNotifiedOrderId = null;
let selectedRatingStars = 5;
let selectedRateTags = [];
let viewHistory = [];
let isNavigatingBack = false;

const CLOUD_SYNC_TOPIC = 'coffeesimon_unisimon_sync_live_prod';
const CLOUD_SYNC_URL = 'https://ntfy.sh/' + CLOUD_SYNC_TOPIC;
let syncDeviceId = localStorage.getItem('cg_device_id');
if (!syncDeviceId) {
  syncDeviceId = 'dev_' + Math.random().toString(36).slice(2, 10);
  localStorage.setItem('cg_device_id', syncDeviceId);
}
let syncEventSource = null;

function initCloudSync() {
  try {
    if (syncEventSource) {
      syncEventSource.close();
    }
    syncEventSource = new EventSource(CLOUD_SYNC_URL + '/sse');
    syncEventSource.onmessage = function (e) {
      try {
        const payload = JSON.parse(e.data);
        if (payload && payload.event === 'message' && payload.message) {
          const msg = JSON.parse(payload.message);
          handleCloudSyncMessage(msg);
        }
      } catch (err) {}
    };
    syncEventSource.onerror = function () {};
  } catch (err) {}

  fetchCloudOrders();
}

function fetchCloudOrders() {
  fetch(CLOUD_SYNC_URL + '/json?poll=1')
    .then(res => res.text())
    .then(text => {
      if (!text) return;
      const lines = text.trim().split('\n');
      for (let i = lines.length - 1; i >= 0; i--) {
        try {
          const json = JSON.parse(lines[i]);
          if (json && json.message) {
            const msg = JSON.parse(json.message);
            if (msg && msg.type === 'SYNC_ORDERS' && Array.isArray(msg.orders)) {
              mergeCloudOrders(msg.orders, msg.senderDeviceId);
              break;
            }
          }
        } catch (e) {}
      }
    })
    .catch(() => {});
}

function broadcastCloudSync() {
  try {
    const payload = JSON.stringify({
      type: 'SYNC_ORDERS',
      senderDeviceId: syncDeviceId,
      orders: orders,
      timestamp: Date.now()
    });
    fetch(CLOUD_SYNC_URL, {
      method: 'POST',
      body: payload
    }).catch(() => {});
  } catch (e) {}
}

function handleCloudSyncMessage(msg) {
  if (!msg || msg.type !== 'SYNC_ORDERS' || !Array.isArray(msg.orders)) return;
  if (msg.senderDeviceId === syncDeviceId) return;
  mergeCloudOrders(msg.orders, msg.senderDeviceId);
}

function mergeCloudOrders(incomingOrders) {
  if (!Array.isArray(incomingOrders)) return;
  const myCurrentOrder = orders.find(o => o.student === (currentUser ? currentUser.name : 'Estudiante Demo') && (o.status === 'recibido' || o.status === 'preparando' || o.status === 'listo'));
  orders = incomingOrders;
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  if (myCurrentOrder) {
    const updated = orders.find(o => o.id === myCurrentOrder.id);
    if (updated && updated.status !== myCurrentOrder.status) {
      triggerStudentNotification(updated, updated.status, `Tu pedido ${updated.id} ahora está: ${updated.status.toUpperCase()}`);
    }
  }
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  if (currentRole === 'staff') {
    renderStaffPanel();
  }
}

function playNotificationSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(587.33, now);
    osc.frequency.setValueAtTime(880, now + 0.12);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.start(now);
    osc.stop(now + 0.45);
  } catch (e) {}
}

function triggerStudentNotification(order, newStatus, message) {
  playNotificationSound();
  if ('vibrate' in navigator) {
    try { navigator.vibrate([200, 100, 200]); } catch (e) {}
  }
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(`CoffeeSimon · ${order.id}`, {
        body: message,
        icon: 'logo.jpg',
        badge: 'favicon.jpg',
        tag: `order-${order.id}-${newStatus}`
      });
    } catch (e) {}
  }
  showStudentNotifToast(order.id, `Pedido ${order.id}`, message, newStatus);
}

function showStudentNotifToast(orderId, title, message, status) {
  lastNotifiedOrderId = orderId;
  const el = document.getElementById('student-notif-toast');
  if (!el) return;
  document.getElementById('snt-title').textContent = title;
  document.getElementById('snt-body').textContent = message;
  el.className = 'student-notif-toast';
  if (status === 'rechazado' || status === 'sancionado' || status === 'no_reclamado') {
    el.classList.add('danger');
  } else if (status === 'pendiente_pago') {
    el.classList.add('warning');
  }
  el.style.display = 'flex';
  clearTimeout(window._studentNotifTimeout);
  window._studentNotifTimeout = setTimeout(() => {
    closeStudentNotif();
  }, 7000);
}

function closeStudentNotif() {
  const el = document.getElementById('student-notif-toast');
  if (el) el.style.display = 'none';
}

function handleNotificationToastClick() {
  closeStudentNotif();
  if (lastNotifiedOrderId) {
    viewOrderTicket(lastNotifiedOrderId);
  } else {
    switchView('orders');
  }
}

function togglePushNotifications() {
  if (!('Notification' in window)) {
    showToast('Tu dispositivo reproduce alertas de sonido y en pantalla.');
    playNotificationSound();
    return;
  }
  if (Notification.permission === 'granted') {
    showToast('Notificaciones ya autorizadas en este navegador.');
    playNotificationSound();
    updateNotificationBellUI();
  } else if (Notification.permission === 'denied') {
    showToast('Notificaciones del sistema bloqueadas en ajustes del navegador.');
  } else {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showToast('Notificaciones activadas para móvil y computador.');
        playNotificationSound();
        try {
          new Notification('CoffeeSimon · Notificaciones Activas', {
            body: 'Te avisaremos cuando tu orden esté en preparación o lista.',
            icon: 'logo.jpg'
          });
        } catch (e) {}
      } else {
        showToast('No se otorgó permiso de notificación.');
      }
      updateNotificationBellUI();
    });
  }
}

function updateNotificationBellUI() {
  const bellBtn = document.getElementById('btn-notif-bell');
  if (!bellBtn) return;
  if ('Notification' in window && Notification.permission === 'granted') {
    bellBtn.style.color = 'var(--primary)';
  } else {
    bellBtn.style.color = '';
  }
}

function initAuth() {
  try {
    const saved = localStorage.getItem('cg_session');
    if (saved) {
      if (saved.includes('jhonnas') || saved.includes('charris')) {
        localStorage.removeItem('cg_session');
      } else {
        const session = JSON.parse(saved);
        if (session && session.email) {
          currentUser = session;
          const savedSede = localStorage.getItem('cg_sede') || session.sede || '';
          if (savedSede) {
            currentUser.sede = savedSede;
            applyUserSession(session);
            updateNotificationBellUI();
            return;
          } else {
            showLocationView();
            updateNotificationBellUI();
            return;
          }
        }
      }
    }
  } catch (e) {}
  currentUser = null;
  showLoginView();
  updateNotificationBellUI();
}

function showLoginView() {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  const roleSelect = document.getElementById('login-role');
  if (emailInput) emailInput.value = '';
  if (passInput) passInput.value = '';
  if (roleSelect) roleSelect.value = 'student';
  const locView = document.getElementById('view-location');
  if (locView) locView.style.display = 'none';
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
  const session = { email, name, code, role, sede: '' };
  currentUser = session;
  localStorage.setItem('cg_session', JSON.stringify(session));
  showToast('Bienvenido, ' + name);
  showLocationView();
  if (role === 'student' && 'Notification' in window && Notification.permission === 'default') {
    setTimeout(togglePushNotifications, 1500);
  }
}

function showLocationView() {
  document.getElementById('view-login').classList.remove('active');
  document.getElementById('authenticated-app').style.display = 'none';
  const locView = document.getElementById('view-location');
  if (locView) {
    locView.style.display = 'flex';
    highlightCurrentSedeCard();
  }
}

function highlightCurrentSedeCard() {
  const current = (currentUser && currentUser.sede) || localStorage.getItem('cg_sede') || 'Sede 1';
  document.querySelectorAll('.location-card').forEach(card => {
    const isCurrent = card.dataset.sede === current;
    card.classList.toggle('selected', isCurrent);
  });
}

function selectSede(sedeName) {
  if (currentUser) {
    currentUser.sede = sedeName;
    localStorage.setItem('cg_session', JSON.stringify(currentUser));
  }
  localStorage.setItem('cg_sede', sedeName);
  const locView = document.getElementById('view-location');
  if (locView) locView.style.display = 'none';
  if (currentUser) {
    applyUserSession(currentUser);
    showToast('Ubicación: ' + sedeName);
  } else {
    showLoginView();
  }
}

function openLocationSelection() {
  showLocationView();
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
  const userSede = user.sede || localStorage.getItem('cg_sede') || 'Sede 1';
  user.sede = userSede;
  document.getElementById('view-login').classList.remove('active');
  const locView = document.getElementById('view-location');
  if (locView) locView.style.display = 'none';
  document.getElementById('authenticated-app').style.display = 'flex';
  document.getElementById('display-user-name').textContent = user.name;
  document.getElementById('display-user-sub').textContent = user.role === 'staff' ? 'Personal Cafetería' : 'Cód. ' + user.code;
  const sedeText = document.getElementById('display-sede-text');
  if (sedeText) sedeText.textContent = userSede;
  checkStrikeActiveStatus();
  renderReputationBadge();
  updateRoleUI();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  renderProducts();
  renderCart();
  renderOrders();
  updateCartBadge();
  renderStaticNequiQR();
  updateNotificationBellUI();
  if (currentRole === 'staff') {
    switchView('staff');
  } else {
    switchView('menu');
    setTimeout(checkRatingPromptProbability, 3500);
  }
}

function logoutSession() {
  currentUser = null;
  localStorage.removeItem('cg_session');
  localStorage.removeItem('cg_sede');
  const locView = document.getElementById('view-location');
  if (locView) locView.style.display = 'none';
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
  updateStudentSpendingUI();
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

function calculateStudentSpending() {
  const studentName = currentUser ? currentUser.name : 'Estudiante Demo';
  return orders
    .filter(o => o.student === studentName && o.status !== 'rechazado' && o.status !== 'sancionado')
    .reduce((acc, o) => acc + o.total, 0);
}

function updateStudentSpendingUI() {
  const spendingEl = document.getElementById('display-spending');
  if (!spendingEl) return;
  if (currentRole === 'student') {
    const total = calculateStudentSpending();
    spendingEl.textContent = `Gasto acumulado: ${fmtCOP(total)}`;
    spendingEl.style.display = 'inline-block';
  } else {
    spendingEl.style.display = 'none';
  }
}

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

function renderStaticNequiQR() {
  const container = document.getElementById('nequi-static-qr');
  if (!container || container.innerHTML) return;
  try {
    new QRCode(container, {
      text: 'nequi://pay?phone=3000000000&name=CafeteriaUnisimon',
      width: 76,
      height: 76,
      colorDark: '#0a6b35',
      colorLight: '#ffffff'
    });
  } catch (e) {}
}

function getActiveOrderCount() {
  const studentName = currentUser ? currentUser.name : '';
  return orders.filter(o => o.student === studentName && (o.status === 'recibido' || o.status === 'preparando' || o.status === 'listo' || o.status === 'pendiente_pago')).length;
}

function selectCashBill(val) {
  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  if (val !== 'exact' && val < subtotal) {
    showToast(`El billete de ${fmtCOP(val)} no cubre el total de ${fmtCOP(subtotal)}`);
    return;
  }
  selectedCashBill = val;
  updateCashBillUI();
}

function updateCashBillUI() {
  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const cardExact = document.getElementById('opt-bill-exact');
  const card10k = document.getElementById('opt-bill-10k');
  const card20k = document.getElementById('opt-bill-20k');
  const card50k = document.getElementById('opt-bill-50k');
  const feedback = document.getElementById('cash-bill-feedback');

  if (cardExact) cardExact.classList.toggle('selected', selectedCashBill === 'exact');
  if (card10k) {
    card10k.classList.toggle('selected', selectedCashBill === 10000);
    card10k.style.opacity = (subtotal > 10000 && subtotal > 0) ? '0.4' : '1';
  }
  if (card20k) {
    card20k.classList.toggle('selected', selectedCashBill === 20000);
    card20k.style.opacity = (subtotal > 20000 && subtotal > 0) ? '0.4' : '1';
  }
  if (card50k) {
    card50k.classList.toggle('selected', selectedCashBill === 50000);
    card50k.style.opacity = (subtotal > 50000 && subtotal > 0) ? '0.4' : '1';
  }

  if (feedback) {
    if (selectedCashBill === 'exact') {
      feedback.textContent = 'Pagarás el valor exacto en barra (sin cambio necesario).';
      feedback.style.color = 'var(--primary)';
    } else {
      const change = Math.max(0, selectedCashBill - subtotal);
      feedback.textContent = `Pagas con billete de ${fmtCOP(selectedCashBill)} · Cambio a recibir: ${fmtCOP(change)}`;
      feedback.style.color = 'var(--accent)';
    }
  }
}

function renderCart() {
  const wrapper = document.getElementById('cart-items-wrapper');
  const empty = document.getElementById('cart-empty-message');
  const checkout = document.getElementById('cart-checkout-section');
  const warning = document.getElementById('cart-active-order-warning');
  const confirmBtn = document.getElementById('btn-confirm-order');
  const activeCount = getActiveOrderCount();
  const hasReachedLimit = activeCount >= MAX_ACTIVE_ORDERS;
  if (cart.length === 0) {
    wrapper.innerHTML = '';
    empty.style.display = 'block';
    checkout.style.display = 'none';
    warning.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  checkout.style.display = 'block';
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
  if (hasReachedLimit) {
    warning.style.display = 'block';
    warning.innerHTML = `<strong>Límite de pedidos activos:</strong> Ya tienes ${activeCount} pedido(s) en proceso (máximo ${MAX_ACTIVE_ORDERS}). Retira o espera a que se completen antes de hacer otro.`;
    confirmBtn.disabled = true;
    confirmBtn.textContent = `Máximo ${MAX_ACTIVE_ORDERS} pedidos activos alcanzado`;
  } else if (kitchenPaused) {
    warning.style.display = 'block';
    warning.innerHTML = 'Aviso: La cocina está en pausa momentánea. Por favor espera unos minutos para confirmar tu orden.';
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
  updateCashBillUI();
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
  const cashBox = document.getElementById('cash-bill-box');
  const policyNote = document.getElementById('payment-policy-note');
  if (method === 'transfer') {
    nequiBox.style.display = 'block';
    if (cashBox) cashBox.style.display = 'none';
    policyNote.textContent = '* Para pagos con Nequi: Cocina iniciará la preparación cuando el personal valide la captura de tu transferencia.';
  } else {
    nequiBox.style.display = 'none';
    if (cashBox) cashBox.style.display = 'block';
    policyNote.textContent = '* Para pago en efectivo: Cuentas con 15 minutos para reclamar tu orden una vez lista en barra.';
    updateCashBillUI();
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
  ctx.fillStyle = '#200020';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.roundRect ? ctx.roundRect(16, 20, 328, 440, 16) : ctx.fillRect(16, 20, 328, 440);
  ctx.fill();
  ctx.fillStyle = '#200020';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('¡Envío exitoso!', 36, 60);
  ctx.fillStyle = '#6b7280';
  ctx.font = '12px sans-serif';
  ctx.fillText(dateStr, 36, 80);
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(36, 95);
  ctx.lineTo(324, 95);
  ctx.stroke();
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(fmtCOP(total), 36, 140);
  ctx.fillStyle = '#4b5563';
  ctx.font = '13px sans-serif';
  ctx.fillText('Para: Cafetería Central Unisimón', 36, 175);
  ctx.fillText('Número: 300 000 0000', 36, 198);
  ctx.fillText('Desde: ' + (currentUser ? currentUser.name : 'Estudiante'), 36, 221);
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

function estimateOrderPrepTime(order) {
  let maxPrepTime = 0;
  order.items.forEach(item => {
    const product = products.find(p => p.name === item.name);
    const itemPrepTime = product ? product.prepTime : 5;
    if (itemPrepTime > maxPrepTime) maxPrepTime = itemPrepTime;
  });
  return maxPrepTime;
}

function getPrepTimeLabel(mins) {
  if (mins <= 3) return { text: 'Rápido (~' + mins + ' min)', cls: 'prep-fast' };
  if (mins <= 8) return { text: 'Medio (~' + mins + ' min)', cls: 'prep-medium' };
  return { text: 'Demorado (~' + mins + ' min)', cls: 'prep-slow' };
}

function getQueuePosition(orderId) {
  const activeStatuses = ['pendiente_pago', 'recibido', 'preparando'];
  const activeOrders = orders.filter(o => activeStatuses.includes(o.status));
  const position = activeOrders.findIndex(o => o.id === orderId) + 1;
  return { position, total: activeOrders.length };
}

function confirmOrder() {
  if (cart.length === 0) return;
  if (kitchenPaused) {
    showToast('La cocina está temporalmente pausada por alta demanda');
    return;
  }
  const activeCount = getActiveOrderCount();
  if (activeCount >= MAX_ACTIVE_ORDERS) {
    showToast(`Ya tienes ${MAX_ACTIVE_ORDERS} pedidos activos. Retira uno primero.`);
    return;
  }
  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  let nequiRef = '';
  let initialStatus = 'recibido';
  let proofImage = '';
  let cashBill = null;
  let cashChange = 0;

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
  } else {
    cashBill = selectedCashBill;
    cashChange = (selectedCashBill === 'exact' ? 0 : Math.max(0, selectedCashBill - total));
  }

  const orderNum = orders.length + 1;
  const id = 'CGO-' + String(orderNum).padStart(4, '0');
  const table = orderType === 'dinein' ? (document.getElementById('table-number-input').value.trim() || 'En mesa') : '';
  const pickupTime = document.getElementById('cart-pickup-time').value;
  const studentName = currentUser ? currentUser.name : 'Estudiante Demo';
  const studentCode = currentUser ? currentUser.code : '20240001';

  const newOrder = {
    id,
    isoDate: getLocalDateISO(0),
    date: 'Hoy, ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    student: studentName,
    studentCode: studentCode,
    sede: (currentUser && currentUser.sede) || localStorage.getItem('cg_sede') || 'Sede 1',
    orderType,
    tableNumber: table,
    pickupTime,
    paymentMethod: paymentMethod === 'transfer' ? 'Nequi' : 'Efectivo en caja',
    cashBill,
    cashChange,
    nequiRef,
    proofImage,
    items: [...cart],
    total,
    status: initialStatus,
    token: 'tok_' + Math.random().toString(36).slice(2, 8),
    readyAt: null,
    expiresAt: null,
    rejectionReason: null
  };
  orders.unshift(newOrder);
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  broadcastCloudSync();
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
  updateStudentSpendingUI();
  showTicket(newOrder);
  switchView('ticket');
  if (initialStatus === 'pendiente_pago') {
    showToast('Orden enviada con comprobante. Cocina verificará la transferencia.');
  } else {
    showToast('Orden ' + id + ' enviada a cocina');
  }
  checkRatingPromptProbability();
}

function showTicket(order) {
  document.getElementById('tk-code').textContent = order.id;
  document.getElementById('tk-student').textContent = order.student;
  const studentCodeEl = document.getElementById('tk-student-code');
  if (studentCodeEl) studentCodeEl.textContent = 'Cód. ' + (order.studentCode || (currentUser ? currentUser.code : '20240001'));
  const tkSedeEl = document.getElementById('tk-sede');
  if (tkSedeEl) tkSedeEl.textContent = order.sede || 'Sede 1';
  document.getElementById('tk-type').textContent = order.orderType === 'dinein' ? `Consumo en mesa (${order.tableNumber || 'Sin número'})` : 'Para llevar';
  document.getElementById('tk-time').textContent = order.pickupTime;
  document.getElementById('tk-pay').textContent = order.paymentMethod;
  document.getElementById('tk-date').textContent = order.date;
  document.getElementById('tk-total').textContent = fmtCOP(order.total);

  const cashChangeRow = document.getElementById('tk-cash-change-row');
  const cashChangeDetail = document.getElementById('tk-cash-change-detail');
  if (cashChangeRow && cashChangeDetail) {
    if (order.paymentMethod.toLowerCase().includes('efectivo') && order.cashBill) {
      cashChangeRow.style.display = 'block';
      cashChangeDetail.textContent = order.cashBill === 'exact' ? 'Pago exacto (sin cambio)' : `Paga con ${fmtCOP(order.cashBill)} (Cambio a recibir: ${fmtCOP(order.cashChange || 0)})`;
    } else {
      cashChangeRow.style.display = 'none';
    }
  }

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
  const queueInfo = document.getElementById('tk-queue-info');
  const rejectionBox = document.getElementById('tk-rejection-box');
  if (activeTimerInterval) clearInterval(activeTimerInterval);

  const queueData = getQueuePosition(order.id);
  if (queueData.position > 0 && order.status !== 'entregado' && order.status !== 'no_reclamado' && order.status !== 'sancionado' && order.status !== 'rechazado') {
    queueInfo.style.display = 'block';
    queueInfo.textContent = `Eres el pedido #${queueData.position} de ${queueData.total} en cola`;
  } else {
    queueInfo.style.display = 'none';
  }

  if (order.rejectionReason && (order.status === 'rechazado' || order.status === 'sancionado')) {
    rejectionBox.style.display = 'block';
    rejectionBox.innerHTML = `<strong>Motivo del rechazo:</strong> ${order.rejectionReason}`;
  } else {
    rejectionBox.style.display = 'none';
  }

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
    const statusLabels = {
      recibido: 'RECIBIDO',
      preparando: 'PREPARANDO',
      listo: 'LISTO',
      entregado: 'ENTREGADO',
      no_reclamado: 'NO RECLAMADO',
      sancionado: 'SANCIONADO',
      rechazado: 'RECHAZADO'
    };
    sb.textContent = statusLabels[order.status] || order.status.toUpperCase();
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
  } else if (order.status === 'rechazado') {
    timerBox.style.display = 'block';
    timerBox.className = 'pickup-timer-box expired';
    timerTitle.textContent = 'Pedido rechazado por cocina';
    timerVal.textContent = 'RECHAZADO';
    timerDesc.textContent = order.rejectionReason || 'El personal de cocina rechazó este pedido.';
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

function generateReceiptHTML(order, studentCode) {
  const isCash = order.paymentMethod.toLowerCase().includes('efectivo');
  let cashDetail = '';
  if (isCash && order.cashBill) {
    if (order.cashBill === 'exact') {
      cashDetail = '<div><strong>Modalidad Efectivo:</strong> Pago exacto en barra (sin cambio)</div>';
    } else {
      cashDetail = `<div><strong>Paga con:</strong> ${fmtCOP(order.cashBill)} · <strong>Cambio a devolver:</strong> ${fmtCOP(order.cashChange || 0)}</div>`;
    }
  }

  const itemsRows = order.items.map(i => `
    <tr>
      <td style="padding: 6px 0; border-bottom: 1px dashed #ccc;">${i.name} ${i.details ? `<br><small style="color:#666">${i.details}</small>` : ''}</td>
      <td style="padding: 6px 0; text-align:center; border-bottom: 1px dashed #ccc;">${i.qty}</td>
      <td style="padding: 6px 0; text-align:right; border-bottom: 1px dashed #ccc;">${fmtCOP(i.price * i.qty)}</td>
    </tr>
  `).join('');

  const qrImgSrc = document.querySelector('#tk-qr img')?.src || '';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ticket ${order.id} · CoffeeSimon</title>
  <style>
    @page { size: 80mm auto; margin: 6mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace; max-width: 360px; margin: 0 auto; color: #111; padding: 12px; font-size: 13px; line-height: 1.4; }
    .header { text-align: center; border-bottom: 2px dashed #333; padding-bottom: 10px; margin-bottom: 12px; }
    .brand { font-size: 20px; font-weight: 800; color: #0a6b35; margin: 0; }
    .sub { font-size: 11px; color: #555; margin: 2px 0 6px; }
    .order-id { font-size: 22px; font-weight: 800; margin: 6px 0; letter-spacing: 0.5px; }
    .badge { display: inline-block; padding: 3px 10px; background: #eaf5ed; color: #0a6b35; font-size: 11px; font-weight: 700; border-radius: 99px; }
    .meta { font-size: 12px; margin: 12px 0; border-bottom: 1px dashed #ccc; padding-bottom: 10px; }
    .meta-line { margin: 3px 0; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin: 10px 0; }
    th { text-align: left; border-bottom: 1px solid #333; padding: 4px 0; font-size: 11px; text-transform: uppercase; }
    .total-box { display: flex; justify-content: space-between; font-size: 16px; font-weight: 800; border-top: 2px solid #111; padding-top: 8px; margin-top: 6px; }
    .qr-area { text-align: center; margin: 16px 0 10px; }
    .qr-area img { width: 130px; height: 130px; }
    .footer { text-align: center; font-size: 10px; color: #666; border-top: 2px dashed #333; padding-top: 10px; margin-top: 14px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand">CoffeeSimon</div>
    <div class="sub">Universidad Simón Bolívar · Cafetería Central</div>
    <div class="order-id">${order.id}</div>
    <span class="badge">${order.status.toUpperCase()}</span>
  </div>
  <div class="meta">
    <div class="meta-line"><strong>Estudiante:</strong> ${order.student}</div>
    <div class="meta-line"><strong>Código Institucional:</strong> Cód. ${studentCode}</div>
    <div class="meta-line"><strong>Sede:</strong> ${order.sede || 'Sede 1'}</div>
    <div class="meta-line"><strong>Fecha:</strong> ${order.date}</div>
    <div class="meta-line"><strong>Modalidad:</strong> ${order.orderType === 'dinein' ? `En mesa (${order.tableNumber || 'Sin número'})` : 'Para llevar'}</div>
    <div class="meta-line"><strong>Método de pago:</strong> ${order.paymentMethod}</div>
    ${cashDetail ? `<div class="meta-line">${cashDetail}</div>` : ''}
    ${order.nequiRef ? `<div class="meta-line"><strong>Ref Nequi:</strong> ${order.nequiRef}</div>` : ''}
  </div>
  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th style="text-align:center;">Cant.</th>
        <th style="text-align:right;">Total</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
    </tbody>
  </table>
  <div class="total-box">
    <span>TOTAL PAGADO</span>
    <span>${fmtCOP(order.total)}</span>
  </div>
  ${qrImgSrc ? `
    <div class="qr-area">
      <div style="font-size:11px; font-weight:700; margin-bottom:6px;">TOKEN DE SEGURIDAD PARA RETIRAR:</div>
      <img src="${qrImgSrc}" alt="QR Retiro" />
      <div style="font-size:10px; color:#555; margin-top:4px;">Presenta este código en la barra de entrega</div>
    </div>
  ` : ''}
  <div class="footer">
    Comprobante digital válido de retiro en cafetería.<br>
    Universidad Simón Bolívar · CoffeeSimon · ODS 9
  </div>
</body>
</html>`;
}

function downloadCurrentTicketPDF() {
  const code = document.getElementById('tk-code').textContent.trim();
  const o = orders.find(x => x.id === code) || (orders.length > 0 ? orders[0] : null);
  if (!o) return;
  const studentCode = o.studentCode || (currentUser ? currentUser.code : '20240001');
  const htmlContent = generateReceiptHTML(o, studentCode);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  } else {
    showToast('Permite ventanas emergentes para generar el comprobante PDF');
  }
}

function downloadOrderPDF(orderId) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;
  const studentCode = o.studentCode || (currentUser ? currentUser.code : '20240001');
  const htmlContent = generateReceiptHTML(o, studentCode);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  } else {
    showToast('Permite ventanas emergentes para generar el comprobante PDF');
  }
}

function reorderFromHistory(orderId) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;
  const activeCount = getActiveOrderCount();
  if (activeCount >= MAX_ACTIVE_ORDERS) {
    showToast(`Ya tienes ${MAX_ACTIVE_ORDERS} pedidos activos. Retira uno primero.`);
    return;
  }
  o.items.forEach(item => {
    const product = products.find(p => p.name === item.name);
    if (product && product.available) {
      const existing = cart.find(c => c.name === item.name && c.details === item.details);
      if (existing) {
        existing.qty += item.qty;
      } else {
        cart.push({
          id: product.id,
          image: product.image,
          name: item.name,
          price: item.price,
          qty: item.qty,
          details: item.details || ''
        });
      }
    }
  });
  saveCart();
  updateCartBadge();
  renderCart();
  switchView('cart');
  showToast('Productos del pedido ' + orderId + ' agregados al carrito');
}

function getItemImage(item) {
  if (item.image) return item.image;
  const p = products.find(x => x.name === item.name || x.id === item.id);
  return p ? p.image : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80';
}

function renderOrderItemsCards(items, showPrices = true) {
  return `
    <div class="order-items-list">
      ${items.map(i => {
        const img = getItemImage(i);
        const itemTotal = (i.price || 0) * (i.qty || 1);
        return `
          <div class="order-item-card">
            <img src="${img}" alt="${i.name}" class="order-item-img" loading="lazy" />
            <div class="order-item-info">
              <div class="order-item-name">
                <span>${i.name}</span>
                <span class="order-item-qty">×${i.qty}</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
                <span class="order-item-details">${i.details || 'Regular'}</span>
                ${showPrices && i.price ? `<span style="font-size:11px; font-weight:700; color:var(--text-muted);">${fmtCOP(itemTotal)}</span>` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

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
    sancionado: 'Anulado por sanción',
    rechazado: 'Rechazado por cocina'
  };
  container.innerHTML = orders.map(o => {
    const isFinished = o.status === 'entregado' || o.status === 'no_reclamado' || o.status === 'sancionado' || o.status === 'rechazado';
    const isActive = !isFinished;
    const queueData = isActive ? getQueuePosition(o.id) : null;

    let queueHtml = '';
    if (queueData && queueData.position > 0) {
      queueHtml = `<div class="queue-position-badge">Posición en cola: #${queueData.position} de ${queueData.total}</div>`;
    }

    let rejectionHtml = '';
    if (o.rejectionReason && (o.status === 'rechazado' || o.status === 'sancionado')) {
      rejectionHtml = `<div style="font-size:11px; color:var(--danger); background:var(--danger-bg); padding:6px 10px; border-radius:var(--radius-sm); margin-bottom:8px"><strong>Motivo:</strong> ${o.rejectionReason}</div>`;
    }

    let reorderBtn = '';
    if (isFinished && o.status !== 'sancionado') {
      reorderBtn = `<button class="btn-pill" style="background:var(--accent-light); color:var(--primary); border:1px solid var(--primary);" onclick="reorderFromHistory('${o.id}')">
        <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
        Repetir pedido
      </button>`;
    }

    return `
    <div class="order-entry">
      <div class="order-entry-head">
        <span style="font-size:14px; font-weight:700">${o.id} · ${o.date} · <span style="color:var(--primary); font-size:12px;">${o.sede || 'Sede 1'}</span></span>
        <span class="order-status-badge st-${o.status}">${statusNames[o.status] || o.status}</span>
      </div>
      ${queueHtml}
      ${rejectionHtml}
      ${renderOrderItemsCards(o.items, true)}
      <div class="order-meta-grid">
        <span class="order-meta-pill">
          <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${o.pickupTime}
        </span>
        <span class="order-meta-pill">
          <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${o.sede || 'Sede 1'}
        </span>
        <span class="order-meta-pill">
          <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
          ${o.paymentMethod}${o.cashBill ? ` (${o.cashBill === 'exact' ? 'Exacto' : 'Paga ' + fmtCOP(o.cashBill) + ' · Cambio ' + fmtCOP(o.cashChange || 0)})` : ''}
        </span>
        <span class="order-meta-pill">
          ${o.orderType === 'dinein' ? `Mesa: ${o.tableNumber || 'Sin número'}` : 'Para llevar'}
        </span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap; padding-top:6px; border-top:1px solid var(--border-subtle);">
        <span style="font-size:14px; font-weight:800; color:var(--text);">${fmtCOP(o.total)}</span>
        <div style="display:flex; gap:6px; flex-wrap:wrap">
          <button type="button" class="btn-pill" onclick="viewOrderTicket('${o.id}')">Ver Ticket</button>
          <button type="button" class="btn-pill" style="background:var(--surface); border-color:var(--border);" onclick="downloadOrderPDF('${o.id}')">PDF</button>
          <button type="button" class="btn-pill" style="background:var(--surface-subtle); border-color:var(--border); display:flex; align-items:center; gap:4px;" onclick="toggleOrderOptions('${o.id}')">
            <span>Opciones</span>
            <svg class="icon-svg" style="width:11px; height:11px" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
      <div class="order-options-drawer" id="order-options-${o.id}" style="display:none;">
        <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">Opciones de ${o.id}:</div>
        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:6px;">
          <button type="button" class="btn-pill" style="justify-content:center; padding:7px 10px; background:var(--accent-light); color:var(--primary); border-color:var(--primary);" onclick="reorderFromHistory('${o.id}')">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            <span>Repetir (Nueva)</span>
          </button>
          <button type="button" class="btn-pill" style="justify-content:center; padding:7px 10px;" onclick="viewOrderTicket('${o.id}')">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <span>Ver QR</span>
          </button>
          <button type="button" class="btn-pill" style="justify-content:center; padding:7px 10px;" onclick="downloadOrderPDF('${o.id}')">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>Descargar PDF</span>
          </button>
          ${(o.status === 'recibido' || o.status === 'pendiente_pago') ? `
          <button type="button" class="btn-pill" style="justify-content:center; padding:7px 10px; color:var(--warning); border-color:var(--warning);" onclick="cancelStudentOrder('${o.id}')">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span>Cancelar</span>
          </button>
          ` : ''}
          <button type="button" class="btn-pill" style="justify-content:center; padding:7px 10px; color:var(--danger); border-color:var(--danger);" onclick="deleteSingleOrderFromHistory('${o.id}')">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            <span>Borrar orden</span>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function toggleOrderOptions(orderId) {
  const drawer = document.getElementById('order-options-' + orderId);
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none';
  document.querySelectorAll('.order-options-drawer').forEach(d => d.style.display = 'none');
  drawer.style.display = isHidden ? 'block' : 'none';
}

function cancelStudentOrder(orderId) {
  const o = orders.find(x => x.id === orderId);
  if (!o) return;
  o.status = 'rechazado';
  o.rejectionReason = 'Cancelado por el estudiante';
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  broadcastCloudSync();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  if (currentRole === 'staff') renderStaffPanel();
  showToast('Pedido ' + orderId + ' cancelado');
}

function deleteSingleOrderFromHistory(orderId) {
  orders = orders.filter(x => x.id !== orderId);
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  broadcastCloudSync();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  if (currentRole === 'staff') renderStaffPanel();
  showToast('Orden ' + orderId + ' eliminada del historial');
}

function confirmClearOrderHistory() {
  const modal = document.getElementById('modal-clear-history');
  if (modal) modal.classList.add('open');
}

function executeClearHistory() {
  const studentName = currentUser ? currentUser.name : 'Estudiante Demo';
  const finishedStatuses = ['entregado', 'no_reclamado', 'sancionado', 'rechazado'];
  orders = orders.filter(o => !(o.student === studentName && finishedStatuses.includes(o.status)));
  localStorage.setItem('cg_orders', JSON.stringify(orders));
  broadcastCloudSync();
  const modal = document.getElementById('modal-clear-history');
  if (modal) modal.classList.remove('open');
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  if (currentRole === 'staff') renderStaffPanel();
  showToast('Historial terminado eliminado con éxito');
}

function viewOrderTicket(id) {
  const o = orders.find(x => x.id === id);
  if (o) {
    showTicket(o);
    switchView('ticket');
  }
}

function setStaffSort(mode) {
  staffSortMode = mode;
  const btnArrival = document.getElementById('sort-arrival');
  const btnPriority = document.getElementById('sort-priority');
  const btnSlowest = document.getElementById('sort-slowest');
  if (btnArrival) btnArrival.classList.toggle('active', mode === 'arrival');
  if (btnPriority) btnPriority.classList.toggle('active', mode === 'priority');
  if (btnSlowest) btnSlowest.classList.toggle('active', mode === 'slowest');
  renderStaffPanel();
}

function switchStaffSubtab(tabName) {
  currentStaffSubtab = tabName;
  document.querySelectorAll('.staff-subnav-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById('staff-subtab-' + tabName);
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.staff-subview').forEach(view => view.style.display = 'none');
  const view = document.getElementById('staff-subview-' + tabName);
  if (view) view.style.display = 'block';

  if (tabName === 'queue') {
    renderStaffPanel();
  } else if (tabName === 'calendar') {
    renderCalendarOrders();
  } else if (tabName === 'strikes') {
    renderStrikesPanel();
  } else if (tabName === 'settings') {
    updateKitchenWaitUI();
  }
}

function renderStaffPanel() {
  const activeOrders = orders.filter(o => o.status !== 'entregado' && o.status !== 'no_reclamado' && o.status !== 'sancionado' && o.status !== 'rechazado');
  const readyOrders = orders.filter(o => o.status === 'listo');
  const todayISO = getLocalDateISO(0);
  const totalToday = orders.filter(o => o.status === 'entregado' && (o.isoDate === todayISO || !o.isoDate)).reduce((acc, o) => acc + o.total, 0);

  const statActive = document.getElementById('stat-active-count');
  if (statActive) statActive.textContent = activeOrders.length;
  const statReady = document.getElementById('stat-ready-count');
  if (statReady) statReady.textContent = readyOrders.length;
  const statTotal = document.getElementById('stat-total-today');
  if (statTotal) statTotal.textContent = fmtCOP(totalToday);

  const badgeQueue = document.getElementById('staff-badge-queue');
  if (badgeQueue) badgeQueue.textContent = activeOrders.length;

  updateKitchenWaitUI();

  let sortedOrders = [...activeOrders];
  if (staffSortMode === 'priority') {
    sortedOrders.sort((a, b) => estimateOrderPrepTime(a) - estimateOrderPrepTime(b));
  } else if (staffSortMode === 'slowest') {
    sortedOrders.sort((a, b) => estimateOrderPrepTime(b) - estimateOrderPrepTime(a));
  }

  const container = document.getElementById('staff-orders-list');
  if (sortedOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:36px 18px; color:var(--text-muted)">
        <p style="font-weight:700">No hay órdenes pendientes en este momento.</p>
        <p style="font-size:12px; margin-top:4px">La cocina se encuentra al día.</p>
      </div>`;
  } else {
    container.innerHTML = sortedOrders.map(o => {
      const prepTime = estimateOrderPrepTime(o);
      const prepLabel = getPrepTimeLabel(prepTime);

      if (o.status === 'pendiente_pago') {
        return `
          <div class="order-entry" style="background:var(--warning-bg); border:1px solid var(--warning); border-radius:var(--radius-sm); margin:10px 18px;">
            <div class="order-entry-head">
              <div>
                <strong style="font-size:15px; color:var(--warning);">${o.id}</strong>
                <span style="font-size:12px; color:var(--text-muted)">(${o.student} · ${o.sede || 'Sede 1'})</span>
              </div>
              <span class="order-status-badge st-pendiente_pago">POR VALIDAR NEQUI</span>
            </div>
            <div style="display:flex; gap:6px; align-items:center; margin:4px 0 8px;">
              <span class="prep-time-badge ${prepLabel.cls}">${prepLabel.text}</span>
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
            ${renderOrderItemsCards(o.items, false)}
            <div class="order-meta-grid">
              <span class="order-meta-pill">
                <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${o.pickupTime}
              </span>
              <span class="order-meta-pill">
                <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${o.sede || 'Sede 1'}
              </span>
              <span class="order-meta-pill">
                ${o.orderType === 'dinein' ? `Mesa: ${o.tableNumber || 'Sin número'}` : 'Para llevar'}
              </span>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
              <button class="btn-action" style="margin-top:0; padding:8px 12px; font-size:12px; background:var(--primary); color:#fff; flex:1;" onclick="verifyNequiAndStartPrep('${o.id}')">
                Aprobar Pago y Empezar a Cocinar
              </button>
              <button class="btn-secondary-action" style="margin-top:0; padding:8px 12px; font-size:12px; width:auto; color:var(--warning); border-color:var(--warning);" onclick="openRejectModal('${o.id}', '${o.student}')">
                Rechazar
              </button>
              <button class="btn-secondary-action" style="margin-top:0; padding:8px 12px; font-size:12px; width:auto; color:var(--danger); border-color:var(--danger);" onclick="openStrikeModal('${o.id}', '${o.student}')">
                Sancionar
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
              <span style="font-size:12px; color:var(--text-muted)">(${o.student} · ${o.sede || 'Sede 1'})</span>
            </div>
            <span class="order-status-badge st-${o.status}">${o.status.toUpperCase()}</span>
          </div>
          <div style="display:flex; gap:6px; align-items:center; margin:4px 0 8px;">
            <span class="prep-time-badge ${prepLabel.cls}">${prepLabel.text}</span>
          </div>
          ${renderOrderItemsCards(o.items, false)}
          <div class="order-meta-grid">
            <span class="order-meta-pill">
              <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${o.pickupTime}
            </span>
            <span class="order-meta-pill">
              <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${o.sede || 'Sede 1'}
            </span>
            <span class="order-meta-pill">
              <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              ${o.paymentMethod}${o.cashBill ? ` (${o.cashBill === 'exact' ? 'Exacto' : 'Paga ' + fmtCOP(o.cashBill) + ' · Cambio ' + fmtCOP(o.cashChange || 0)})` : ''}
            </span>
            <span class="order-meta-pill">
              ${o.orderType === 'dinein' ? `Mesa: ${o.tableNumber || 'Sin número'}` : 'Para llevar'}
            </span>
            <span class="order-meta-pill">
              <strong style="color:var(--text);">${fmtCOP(o.total)}</strong>
            </span>
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

  if (currentStaffSubtab === 'calendar') renderCalendarOrders();
  if (currentStaffSubtab === 'strikes') renderStrikesPanel();
}

function selectCalendarDate(type) {
  document.getElementById('cal-btn-today').classList.toggle('active', type === 'today');
  document.getElementById('cal-btn-yesterday').classList.toggle('active', type === 'yesterday');
  document.getElementById('cal-btn-all').classList.toggle('active', type === 'all');
  const picker = document.getElementById('calendar-date-picker');
  const label = document.getElementById('calendar-current-selection-label');
  if (type === 'today') {
    selectedCalendarDate = getLocalDateISO(0);
    if (picker) picker.value = selectedCalendarDate;
    if (label) label.textContent = 'Hoy (' + selectedCalendarDate + ')';
  } else if (type === 'yesterday') {
    selectedCalendarDate = getLocalDateISO(-1);
    if (picker) picker.value = selectedCalendarDate;
    if (label) label.textContent = 'Ayer (' + selectedCalendarDate + ')';
  } else {
    selectedCalendarDate = 'all';
    if (picker) picker.value = '';
    if (label) label.textContent = 'Todos los registros históricos';
  }
  renderCalendarOrders();
}

function onCalendarDatePicked(val) {
  if (!val) {
    selectCalendarDate('all');
    return;
  }
  selectedCalendarDate = val;
  document.getElementById('cal-btn-today').classList.remove('active');
  document.getElementById('cal-btn-yesterday').classList.remove('active');
  document.getElementById('cal-btn-all').classList.remove('active');
  const label = document.getElementById('calendar-current-selection-label');
  if (label) label.textContent = val;
  renderCalendarOrders();
}

function setCalendarFilter(filter) {
  selectedCalendarFilter = filter;
  document.getElementById('cal-fil-all').classList.toggle('active', filter === 'all');
  document.getElementById('cal-fil-cancelled').classList.toggle('active', filter === 'cancelled');
  document.getElementById('cal-fil-delivered').classList.toggle('active', filter === 'delivered');
  renderCalendarOrders();
}

function renderCalendarOrders() {
  const container = document.getElementById('calendar-orders-list');
  if (!container) return;
  const picker = document.getElementById('calendar-date-picker');
  if (picker && !picker.value && selectedCalendarDate !== 'all') {
    picker.value = selectedCalendarDate;
  }

  let dateOrders = orders;
  if (selectedCalendarDate !== 'all') {
    dateOrders = orders.filter(o => o.isoDate === selectedCalendarDate);
  }

  const totalCount = dateOrders.length;
  const deliveredOrders = dateOrders.filter(o => o.status === 'entregado');
  const deliveredIncome = deliveredOrders.reduce((acc, o) => acc + o.total, 0);
  const cancelledOrders = dateOrders.filter(o => o.status === 'rechazado' || o.status === 'sancionado' || o.status === 'no_reclamado');

  document.getElementById('cal-stat-total').textContent = totalCount;
  document.getElementById('cal-stat-income').textContent = fmtCOP(deliveredIncome);
  document.getElementById('cal-stat-cancelled').textContent = cancelledOrders.length;

  let displayOrders = [...dateOrders];
  if (selectedCalendarFilter === 'cancelled') {
    displayOrders = displayOrders.filter(o => o.status === 'rechazado' || o.status === 'sancionado' || o.status === 'no_reclamado');
  } else if (selectedCalendarFilter === 'delivered') {
    displayOrders = displayOrders.filter(o => o.status === 'entregado');
  }

  const titleEl = document.getElementById('calendar-results-title');
  if (titleEl) {
    if (selectedCalendarFilter === 'cancelled') {
      titleEl.textContent = `Pedidos Cancelados / Rechazados (${displayOrders.length})`;
    } else if (selectedCalendarFilter === 'delivered') {
      titleEl.textContent = `Pedidos Entregados (${displayOrders.length})`;
    } else {
      titleEl.textContent = `Pedidos de la fecha (${displayOrders.length})`;
    }
  }

  if (displayOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:32px 18px; color:var(--text-muted)">
        <p style="font-weight:700">No hay pedidos con el filtro seleccionado</p>
        <p style="font-size:12px; margin-top:4px">Prueba seleccionando otra fecha o cambiando el filtro.</p>
      </div>`;
    return;
  }

  const statusNames = {
    pendiente_pago: 'Pendiente Nequi',
    recibido: 'Recibido',
    preparando: 'Preparando',
    listo: 'Listo para reclamar',
    entregado: 'Entregado',
    no_reclamado: 'No reclamado / Vencido',
    sancionado: 'Anulado por sanción',
    rechazado: 'Rechazado'
  };

  container.innerHTML = displayOrders.map(o => {
    const isCancelled = o.status === 'rechazado' || o.status === 'sancionado' || o.status === 'no_reclamado';
    return `
      <div class="order-entry" style="background:var(--surface); ${isCancelled ? 'border-left: 4px solid var(--danger);' : ''}">
        <div class="order-entry-head">
          <div>
            <strong style="font-size:14px">${o.id}</strong>
            <span style="font-size:12px; color:var(--text-muted)">(${o.student} · ${o.sede || 'Sede 1'})</span>
          </div>
          <span class="order-status-badge st-${o.status}">${statusNames[o.status] || o.status}</span>
        </div>
        ${o.rejectionReason ? `
          <div style="background:var(--danger-bg); color:var(--danger); font-size:11px; padding:6px 10px; border-radius:var(--radius-sm); margin:6px 0 8px;">
            <strong>Motivo:</strong> ${o.rejectionReason}
          </div>
        ` : ''}
        ${renderOrderItemsCards(o.items, false)}
        <div class="order-meta-grid">
          <span class="order-meta-pill">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${o.date}
          </span>
          <span class="order-meta-pill">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${o.sede || 'Sede 1'}
          </span>
          <span class="order-meta-pill">
            <svg class="icon-svg" style="width:12px; height:12px" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            ${o.paymentMethod}${o.cashBill ? ` (${o.cashBill === 'exact' ? 'Exacto' : 'Paga ' + fmtCOP(o.cashBill) + ' · Cambio ' + fmtCOP(o.cashChange || 0)})` : ''}
          </span>
          <span class="order-meta-pill">
            <strong style="color:var(--text);">${fmtCOP(o.total)}</strong>
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function renderStrikesPanel() {
  const container = document.getElementById('staff-strike-history-cards');
  if (!container) return;
  const now = Date.now();
  const hasActiveSanction = userStrikeUntil > now;
  const activeCount = (hasActiveSanction ? 1 : 0) + strikeHistory.filter(s => s.status === 'activa').length;

  document.getElementById('kpi-active-strikes').textContent = activeCount;
  document.getElementById('kpi-total-strikes').textContent = strikeHistory.length + (userStrikes > 0 ? userStrikes : 0);

  const badgeStrikes = document.getElementById('staff-badge-strikes');
  if (badgeStrikes) {
    if (activeCount > 0) {
      badgeStrikes.textContent = activeCount;
      badgeStrikes.style.display = 'block';
    } else {
      badgeStrikes.style.display = 'none';
    }
  }

  if (strikeHistory.length === 0 && !hasActiveSanction) {
    container.innerHTML = `
      <div style="text-align:center; padding:36px 18px; color:var(--text-muted)">
        <p style="font-weight:700">Sin sanciones registradas</p>
        <p style="font-size:12px; margin-top:4px">Todos los estudiantes tienen fiabilidad al 100%.</p>
      </div>`;
    return;
  }

  let html = '';
  if (hasActiveSanction) {
    const diffMs = userStrikeUntil - now;
    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
    html += `
      <div class="strike-card-entry active-strike">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <strong style="font-size:14px; color:var(--danger)">Estudiante Demo (20240001)</strong>
          <span class="order-status-badge st-sancionado">SANCIÓN ACTIVA (~${diffHours}h restantes)</span>
        </div>
        <div style="font-size:12px; margin-bottom:4px"><strong>Motivo:</strong> ${userStrikeReason || 'Falta disciplinaria'}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-bottom:10px">Pagos Nequi suspendidos actualmente para este estudiante.</div>
        <button type="button" class="btn-pill" style="background:var(--success); color:#fff; border-color:var(--success);" onclick="liftSanction('current')">
          Levantar Sanción / Perdonar
        </button>
      </div>
    `;
  }

  html += strikeHistory.map((s, idx) => {
    const isPardoned = s.status === 'perdonado';
    return `
      <div class="strike-card-entry ${isPardoned ? 'pardoned-strike' : 'active-strike'}">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <strong style="font-size:14px">${s.student}</strong>
          <span class="order-status-badge ${isPardoned ? 'st-entregado' : 'st-sancionado'}">
            ${isPardoned ? 'PERDONADA' : 'REGISTRADA'}
          </span>
        </div>
        <div style="font-size:12px; margin-bottom:2px"><strong>Orden:</strong> ${s.orderId}</div>
        <div style="font-size:12px; margin-bottom:2px"><strong>Motivo:</strong> ${s.reason}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-bottom:8px">Fecha: ${s.date} · Duración: ${s.duration}</div>
        ${!isPardoned ? `
          <button type="button" class="btn-pill" style="background:var(--success); color:#fff; border-color:var(--success);" onclick="liftSanction(${idx})">
            Levantar Sanción / Perdonar
          </button>
        ` : '<span style="font-size:11px; color:var(--success); font-weight:700">Sanción perdonada por administración</span>'}
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

function liftSanction(target) {
  userStrikes = 0;
  userStrikeUntil = 0;
  userStrikeReason = '';
  localStorage.setItem('cg_strikes', 0);
  localStorage.setItem('cg_strike_until', 0);
  localStorage.setItem('cg_strike_reason', '');
  if (typeof target === 'number' && strikeHistory[target]) {
    strikeHistory[target].status = 'perdonado';
    localStorage.setItem('cg_strike_history', JSON.stringify(strikeHistory));
  } else if (strikeHistory.length > 0) {
    strikeHistory.forEach(s => s.status = 'perdonado');
    localStorage.setItem('cg_strike_history', JSON.stringify(strikeHistory));
  }
  checkStrikeActiveStatus();
  renderReputationBadge();
  renderStrikesPanel();
  renderStaffPanel();
  renderCart();
  showToast('Sanción levantada. El estudiante ha sido rehabilitado.');
}

function openManualStrikeModal() {
  targetStrikeOrderId = 'MANUAL-' + Math.floor(1000 + Math.random() * 9000);
  const targetLabel = document.getElementById('modal-strike-target');
  if (targetLabel) targetLabel.textContent = 'Registro disciplinario directo';
  const field = document.getElementById('strike-student-field');
  if (field) field.style.display = 'block';
  document.getElementById('modal-strike').classList.add('open');
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
    broadcastCloudSync();
    triggerStudentNotification(o, 'preparando', '¡Tu pago Nequi fue validado! Tu pedido ha entrado en preparación en cocina.');
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    showToast(`Pago verificado para ${id}. ¡Iniciando preparación en cocina!`);
  }
}

function openRejectModal(orderId, studentName) {
  document.getElementById('modal-reject-target').textContent = `Orden: ${orderId} · Estudiante: ${studentName}`;
  document.getElementById('modal-reject').dataset.orderId = orderId;
  document.getElementById('reject-reason-input').value = '';
  document.getElementById('modal-reject').classList.add('open');
}

function confirmRejectOrder() {
  const modal = document.getElementById('modal-reject');
  const orderId = modal.dataset.orderId;
  const reason = document.getElementById('reject-reason-input').value.trim();
  if (!reason) {
    showToast('Escribe el motivo del rechazo');
    return;
  }
  const o = orders.find(x => x.id === orderId);
  if (o) {
    o.status = 'rechazado';
    o.rejectionReason = reason;
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    broadcastCloudSync();
    triggerStudentNotification(o, 'rechazado', `Pago Nequi rechazado por cocina: ${reason}`);
  }
  modal.classList.remove('open');
  renderStaffPanel();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  showToast(`Orden ${orderId} rechazada: ${reason}`);
}

function openStrikeModal(orderId, studentName) {
  targetStrikeOrderId = orderId;
  document.getElementById('modal-strike-target').textContent = `Orden: ${orderId} · Estudiante: ${studentName}`;
  const field = document.getElementById('strike-student-field');
  if (field) field.style.display = 'none';
  document.getElementById('modal-strike').classList.add('open');
}

function confirmApplyStrike() {
  const durationSelect = document.getElementById('strike-duration-select').value;
  const reason = document.getElementById('strike-reason-select').value;
  let durationMs = 12 * 60 * 60 * 1000;
  const durationLabels = { '12h': '12 Horas', '24h': '24 Horas', '3d': '3 Días', '7d': '7 Días', '14d': '14 Días' };
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

  let studentName = 'Estudiante Demo (20240001)';
  const manualInput = document.getElementById('strike-manual-student-input');
  if (manualInput && manualInput.value.trim()) {
    studentName = manualInput.value.trim();
    manualInput.value = '';
  }

  const o = orders.find(x => x.id === targetStrikeOrderId);
  if (o) {
    studentName = o.student;
    o.status = 'sancionado';
    o.rejectionReason = reason;
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    broadcastCloudSync();
    triggerStudentNotification(o, 'sancionado', `Sanción disciplinaria aplicada: ${reason}`);
  }

  strikeHistory.unshift({
    orderId: targetStrikeOrderId || ('SAN-' + Math.floor(1000 + Math.random() * 9000)),
    student: studentName,
    reason: reason,
    duration: durationLabels[durationSelect] || durationSelect,
    date: 'Hoy, ' + new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    status: 'activa'
  });
  localStorage.setItem('cg_strike_history', JSON.stringify(strikeHistory));

  document.getElementById('modal-strike').classList.remove('open');
  const field = document.getElementById('strike-student-field');
  if (field) field.style.display = 'none';
  checkStrikeActiveStatus();
  renderReputationBadge();
  renderStaffPanel();
  renderStrikesPanel();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  showToast(`Sanción aplicada (${durationSelect}) y orden cancelada.`);
}

function advanceOrderStatus(id, newStatus) {
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = newStatus;
    if (newStatus === 'listo') {
      o.readyAt = Date.now();
      o.expiresAt = Date.now() + 15 * 60 * 1000;
      triggerStudentNotification(o, 'listo', '¡Tu pedido ya está LISTO en barra! Tienes 15 minutos para reclamarlo.');
    } else if (newStatus === 'preparando') {
      triggerStudentNotification(o, 'preparando', '¡Tu pedido ha entrado en preparación en cocina!');
    } else if (newStatus === 'entregado') {
      triggerStudentNotification(o, 'entregado', '¡Tu pedido fue entregado en barra! Gracias por tu compra.');
    }
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    broadcastCloudSync();
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    updateStudentSpendingUI();
    showToast(`Orden ${id} actualizada a: ${newStatus.toUpperCase()}`);
  }
}

function markOrderNoShow(id) {
  const o = orders.find(x => x.id === id);
  if (o) {
    o.status = 'no_reclamado';
    o.rejectionReason = 'Superó el plazo de 15 minutos para retirar en barra';
    localStorage.setItem('cg_orders', JSON.stringify(orders));
    broadcastCloudSync();
    userStrikes++;
    localStorage.setItem('cg_strikes', userStrikes);
    triggerStudentNotification(o, 'no_reclamado', 'Tu pedido fue cancelado por no reclamo dentro del tiempo límite.');
    renderReputationBadge();
    renderStaffPanel();
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    updateStudentSpendingUI();
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
  broadcastCloudSync();
  input.value = '';
  triggerStudentNotification(o, 'entregado', `¡Tu orden ${code} fue entregada en barra con éxito!`);
  renderStaffPanel();
  renderOrders();
  renderCart();
  updateKitchenWaitUI();
  updateStudentSpendingUI();
  showToast(`${code} entregada con éxito`);
}

function setRatingStars(val) {
  selectedRatingStars = val;
  document.querySelectorAll('#rate-stars-container .btn-star').forEach(btn => {
    const bVal = parseInt(btn.dataset.val);
    btn.classList.toggle('active', bVal <= val);
  });
}

function toggleRateTag(btn) {
  btn.classList.toggle('active');
  const tagText = btn.textContent.trim();
  if (selectedRateTags.includes(tagText)) {
    selectedRateTags = selectedRateTags.filter(t => t !== tagText);
  } else {
    selectedRateTags.push(tagText);
  }
}

function checkRatingPromptProbability() {
  if (currentRole !== 'student') return;
  const lastRated = parseInt(localStorage.getItem('cg_has_rated') || '0');
  const now = Date.now();
  if (now - lastRated < 12 * 60 * 60 * 1000) return;
  if (Math.random() < 0.40) {
    setTimeout(() => {
      openRateModal();
    }, 2000);
  }
}

function openRateModal() {
  setRatingStars(5);
  selectedRateTags = [];
  document.querySelectorAll('#modal-rate .tag-chip').forEach(c => c.classList.remove('active'));
  const input = document.getElementById('rate-feedback-input');
  if (input) input.value = '';
  const modal = document.getElementById('modal-rate');
  if (modal) modal.classList.add('open');
}

function dismissRateModal() {
  const modal = document.getElementById('modal-rate');
  if (modal) modal.classList.remove('open');
  localStorage.setItem('cg_has_rated', Date.now());
}

function submitRating() {
  const comment = (document.getElementById('rate-feedback-input')?.value || '').trim();
  const ratingRecord = {
    stars: selectedRatingStars,
    tags: [...selectedRateTags],
    comment,
    student: currentUser ? currentUser.name : 'Estudiante Demo',
    date: new Date().toLocaleString('es-CO')
  };
  const history = JSON.parse(localStorage.getItem('cg_ratings_history') || '[]');
  history.unshift(ratingRecord);
  localStorage.setItem('cg_ratings_history', JSON.stringify(history));
  localStorage.setItem('cg_has_rated', Date.now());
  const modal = document.getElementById('modal-rate');
  if (modal) modal.classList.remove('open');
  playNotificationSound();
  showToast('¡Muchas gracias por calificar CoffeeSimon!');
}

function switchView(name) {
  const currentActive = document.querySelector('.view.active');
  const currentName = currentActive ? currentActive.id.replace('view-', '') : '';
  if (!isNavigatingBack && currentName && currentName !== name) {
    viewHistory.push(currentName);
  }
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
  updateBackButtonVisibility(name);
}

function goBack() {
  if (viewHistory.length === 0) {
    switchView('menu');
    return;
  }
  isNavigatingBack = true;
  const prev = viewHistory.pop();
  switchView(prev);
  isNavigatingBack = false;
}

function updateBackButtonVisibility(viewName) {
  const backBtn = document.getElementById('btn-back');
  if (!backBtn) return;
  if (viewName === 'menu') {
    backBtn.style.display = 'none';
  } else {
    backBtn.style.display = 'flex';
  }
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

window.addEventListener('storage', (e) => {
  if (e.key === 'cg_orders') {
    const updatedList = JSON.parse(e.newValue || '[]');
    if (Array.isArray(updatedList) && orders) {
      const activeMineOld = orders.find(o => o.student === (currentUser ? currentUser.name : 'Estudiante Demo') && (o.status === 'recibido' || o.status === 'preparando' || o.status === 'pendiente_pago'));
      if (activeMineOld) {
        const matchingNew = updatedList.find(o => o.id === activeMineOld.id);
        if (matchingNew && matchingNew.status !== activeMineOld.status) {
          triggerStudentNotification(matchingNew, matchingNew.status, `Tu pedido ${matchingNew.id} ahora está: ${matchingNew.status.toUpperCase()}`);
        }
      }
    }
    orders = updatedList;
    renderOrders();
    renderCart();
    updateKitchenWaitUI();
    updateStudentSpendingUI();
    if (currentRole === 'staff') renderStaffPanel();
  } else if (e.key === 'cg_strikes' || e.key === 'cg_strike_until') {
    userStrikes = parseInt(localStorage.getItem('cg_strikes') || '0');
    userStrikeUntil = parseInt(localStorage.getItem('cg_strike_until') || '0');
    userStrikeReason = localStorage.getItem('cg_strike_reason') || '';
    checkStrikeActiveStatus();
    renderReputationBadge();
  }
});

let lastTouchEndTime = 0;
document.addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTouchEndTime <= 300) {
    if (!e.target.closest('button, a, input, select, textarea, .btn-pill, .btn-qty, .btn-action, .btn-secondary-action, .ktc-chip, .radio-card, .location-card, .tag-chip, .btn-star')) {
      e.preventDefault();
    }
  }
  lastTouchEndTime = now;
}, { passive: false });

initAuth();
initCloudSync();
