
// ============ DATA ============
const DEFAULT_CATEGORIES = [
  { name: 'Plumber', icon: 'fa-wrench', color: '#3B82F6' },
  { name: 'Electrician', icon: 'fa-bolt', color: '#F59E0B' },
  { name: 'Barber', icon: 'fa-scissors', color: '#EC4899' },
  { name: 'Mechanic', icon: 'fa-car', color: '#EF4444' },
  { name: 'Painter', icon: 'fa-paint-roller', color: '#8B5CF6' },
  { name: 'RO Repair', icon: 'fa-tint', color: '#06B6D4' },
  { name: 'AC Repair', icon: 'fa-snowflake', color: '#0EA5E9' },
  { name: 'CCTV Installation', icon: 'fa-video', color: '#6366F1' },
  { name: 'Carpenter', icon: 'fa-hammer', color: '#D97706' },
  { name: 'Welder', icon: 'fa-fire', color: '#F97316' },
  { name: 'Mobile Repair', icon: 'fa-mobile-alt', color: '#10B981' },
  { name: 'Computer Repair', icon: 'fa-desktop', color: '#64748B' },
  { name: 'Tent & Decoration', icon: 'fa-campground', color: '#E11D48' },
  { name: 'E-Rickshaw', icon: 'fa-shuttle-van', color: '#16A34A' },
  { name: 'Taxi Booking', icon: 'fa-taxi', color: '#FBBF24' },
  { name: 'Water Supplier', icon: 'fa-water', color: '#0284C7' },
  { name: 'House Cleaning', icon: 'fa-broom', color: '#14B8A6' },
  { name: 'Construction', icon: 'fa-hard-hat', color: '#78716C' },
  { name: 'Agriculture Equip.', icon: 'fa-tractor', color: '#65A30D' },
  { name: 'Pandit / Puja', icon: 'fa-om', color: '#DC2626' },
];

const DEFAULT_PROVIDERS = [
  {
    id: 1, name: 'Ram Kishan Sharma', category: 'Plumber', location: 'Nandgaon Main Market',
    experience: 12, rating: 4.8, reviews: 56, phone: '9876543210', whatsapp: '9876543210',
    description: 'Expert plumber with 12+ years of experience in pipe fitting, tap repair, bathroom installations and water tank connections. Available for emergency calls.',
    availability: 'Available', charges: '₹200 - ₹500', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/plumber1/200/200', gallery: ['https://picsum.photos/seed/plumb1/400/300','https://picsum.photos/seed/plumb2/400/300'],
    addedDate: '2025-01-10'
  },
  {
    id: 2, name: 'Suresh Yadav', category: 'Electrician', location: 'Nandgaon Ward 3',
    experience: 8, rating: 4.6, reviews: 42, phone: '9876543211', whatsapp: '9876543211',
    description: 'Licensed electrician specializing in house wiring, fan installation, inverter setup, and short circuit repair. Quick and reliable service.',
    availability: 'Available', charges: '₹150 - ₹400', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/electric1/200/200', gallery: ['https://picsum.photos/seed/elect1/400/300'],
    addedDate: '2025-01-12'
  },
  {
    id: 3, name: 'Munna Lal Barber', category: 'Barber', location: 'Nandgaon Chowk',
    experience: 15, rating: 4.9, reviews: 89, phone: '9876543212', whatsapp: '9876543212',
    description: 'Most popular barber in Nandgaon. Expert in all types of haircuts, shaving, facials, and bridal grooming. Clean and hygienic shop.',
    availability: 'Available', charges: '₹50 - ₹200', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/barber1/200/200', gallery: ['https://picsum.photos/seed/barb1/400/300','https://picsum.photos/seed/barb2/400/300'],
    addedDate: '2025-01-08'
  },
  {
    id: 4, name: 'Raju Mechanic', category: 'Mechanic', location: 'Nandgaon Bus Stand Road',
    experience: 10, rating: 4.5, reviews: 38, phone: '9876543213', whatsapp: '9876543213',
    description: 'Skilled mechanic for bikes, scooters, and auto-rickshaws. Engine repair, puncture fixing, oil change, and general maintenance.',
    availability: 'Busy', charges: '₹100 - ₹800', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/mechanic1/200/200', gallery: [],
    addedDate: '2025-01-15'
  },
  {
    id: 5, name: 'Gopal Painter', category: 'Painter', location: 'Nandgaon Near Temple',
    experience: 7, rating: 4.3, reviews: 25, phone: '9876543214', whatsapp: '9876543214',
    description: 'Professional painter for homes, shops, and temples. Uses quality paints. Interior and exterior painting with clean finishing.',
    availability: 'Available', charges: '₹5,000 - ₹20,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/painter1/200/200', gallery: ['https://picsum.photos/seed/paint1/400/300'],
    addedDate: '2025-01-18'
  },
  {
    id: 6, name: 'Ramesh RO Service', category: 'RO Repair', location: 'Nandgaon Market',
    experience: 5, rating: 4.4, reviews: 31, phone: '9876543215', whatsapp: '9876543215',
    description: 'RO water purifier installation, repair, filter change, and annual maintenance. All brands serviced. Genuine parts used.',
    availability: 'Available', charges: '₹300 - ₹2,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/ro1/200/200', gallery: [],
    addedDate: '2025-01-20'
  },
  {
    id: 7, name: 'Anil AC Technician', category: 'AC Repair', location: 'Nandgaon Ward 5',
    experience: 6, rating: 4.7, reviews: 28, phone: '9876543216', whatsapp: '9876543216',
    description: 'AC installation, gas filling, deep cleaning, and repair for all brands. Window AC and split AC specialist. Summer special packages available.',
    availability: 'Available', charges: '₹300 - ₹1,500', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/ac1/200/200', gallery: ['https://picsum.photos/seed/acr1/400/300'],
    addedDate: '2025-02-01'
  },
  {
    id: 8, name: 'Vikram CCTV Wala', category: 'CCTV Installation', location: 'Nandgaon Main Road',
    experience: 4, rating: 4.2, reviews: 18, phone: '9876543217', whatsapp: '9876543217',
    description: 'CCTV camera installation for homes, shops, and offices. HD cameras, DVR setup, WiFi cameras, and remote viewing configuration.',
    availability: 'Available', charges: '₹3,000 - ₹15,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/cctv1/200/200', gallery: [],
    addedDate: '2025-02-05'
  },
  {
    id: 9, name: 'Kallu Carpenter', category: 'Carpenter', location: 'Nandgaon Lohar Mohalla',
    experience: 20, rating: 4.8, reviews: 67, phone: '9876543218', whatsapp: '9876543218',
    description: 'Master carpenter with 20 years experience. Furniture making, door/window fitting, kitchen cabinets, and wood polish work.',
    availability: 'Busy', charges: '₹500 - ₹5,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/carp1/200/200', gallery: ['https://picsum.photos/seed/carpw1/400/300','https://picsum.photos/seed/carpw2/400/300'],
    addedDate: '2025-02-08'
  },
  {
    id: 10, name: 'Dinesh Welder', category: 'Welder', location: 'Nandgaon Industrial Area',
    experience: 9, rating: 4.1, reviews: 22, phone: '9876543219', whatsapp: '9876543219',
    description: 'Expert welding services for gates, grills, frames, and structural work. Arc welding, MIG welding, and gas welding available.',
    availability: 'Available', charges: '₹200 - ₹3,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/weld1/200/200', gallery: [],
    addedDate: '2025-02-10'
  },
  {
    id: 11, name: 'Amit Mobile Repair', category: 'Mobile Repair', location: 'Nandgaon Market Complex',
    experience: 6, rating: 4.5, reviews: 44, phone: '9876543220', whatsapp: '9876543220',
    description: 'Mobile phone repair expert. Screen replacement, battery change, charging port repair, software issues. All brands - Samsung, Vivo, Oppo, Redmi.',
    availability: 'Available', charges: '₹100 - ₹3,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/mobile1/200/200', gallery: ['https://picsum.photos/seed/mobr1/400/300'],
    addedDate: '2025-02-12'
  },
  {
    id: 12, name: 'Pradeep Computer Wala', category: 'Computer Repair', location: 'Nandgaon Near School',
    experience: 8, rating: 4.3, reviews: 19, phone: '9876543221', whatsapp: '9876543221',
    description: 'Computer and laptop repair. Hardware issues, software installation, data recovery, networking, and printer repair. Home service available.',
    availability: 'Available', charges: '₹200 - ₹2,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/comp1/200/200', gallery: [],
    addedDate: '2025-02-15'
  },
  {
    id: 13, name: 'Shyam Tent House', category: 'Tent & Decoration', location: 'Nandgaon Bus Stand',
    experience: 18, rating: 4.9, reviews: 95, phone: '9876543222', whatsapp: '9876543222',
    description: 'Complete tent and decoration services for weddings, functions, and festivals. Premium decorations, lighting, stage setup, and catering arrangements.',
    availability: 'Busy', charges: '₹10,000 - ₹1,00,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/tent1/200/200', gallery: ['https://picsum.photos/seed/tentw1/400/300','https://picsum.photos/seed/tentw2/400/300','https://picsum.photos/seed/tentw3/400/300'],
    addedDate: '2025-02-18'
  },
  {
    id: 14, name: 'Rinku E-Rickshaw', category: 'E-Rickshaw', location: 'Nandgaon Station Road',
    experience: 3, rating: 4.0, reviews: 15, phone: '9876543223', whatsapp: '9876543223',
    description: 'E-Rickshaw service within Nandgaon and nearby areas. Available for daily commute, market visits, and temple trips. Affordable rates.',
    availability: 'Available', charges: '₹10 - ₹50', status: 'approved', verified: false,
    photo: 'https://picsum.photos/seed/erick1/200/200', gallery: [],
    addedDate: '2025-02-20'
  },
  {
    id: 15, name: 'Kishan Taxi Service', category: 'Taxi Booking', location: 'Nandgaon Main Stand',
    experience: 7, rating: 4.4, reviews: 33, phone: '9876543224', whatsapp: '9876543224',
    description: 'Taxi service for Mathura, Vrindavan, Goverdhan, and outstation trips. AC/Non-AC available. Clean vehicles, experienced drivers.',
    availability: 'Available', charges: '₹500 - ₹3,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/taxi1/200/200', gallery: ['https://picsum.photos/seed/taxiw1/400/300'],
    addedDate: '2025-02-22'
  },
  {
    id: 16, name: 'Bhola Water Supply', category: 'Water Supplier', location: 'Nandgaon Ward 2',
    experience: 5, rating: 4.2, reviews: 20, phone: '9876543225', whatsapp: '9876543225',
    description: 'Tanker water supply for homes, construction sites, and events. Clean drinking water and normal water tankers available 24/7.',
    availability: 'Available', charges: '₹300 - ₹1,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/water1/200/200', gallery: [],
    addedDate: '2025-02-25'
  },
  {
    id: 17, name: 'Savita Cleaning Service', category: 'House Cleaning', location: 'Nandgaon Ward 4',
    experience: 4, rating: 4.6, reviews: 27, phone: '9876543226', whatsapp: '9876543226',
    description: 'Professional house cleaning, kitchen cleaning, bathroom deep cleaning, and post-construction cleaning. Affordable and trustworthy.',
    availability: 'Available', charges: '₹500 - ₹3,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/clean1/200/200', gallery: [],
    addedDate: '2025-03-01'
  },
  {
    id: 18, name: 'Mohan Contractor', category: 'Construction', location: 'Nandgaon Outer Road',
    experience: 15, rating: 4.7, reviews: 41, phone: '9876543227', whatsapp: '9876543227',
    description: 'Building construction, renovation, plastering, flooring, and structural repair. Complete house construction with quality materials.',
    availability: 'Available', charges: '₹50,000 - ₹50,00,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/const1/200/200', gallery: ['https://picsum.photos/seed/constw1/400/300','https://picsum.photos/seed/constw2/400/300'],
    addedDate: '2025-03-03'
  },
  {
    id: 19, name: 'Rampal Tractor Service', category: 'Agriculture Equip.', location: 'Nandgaon Village Outskirts',
    experience: 10, rating: 4.3, reviews: 16, phone: '9876543228', whatsapp: '9876543228',
    description: 'Tractor on rent for ploughing, tilling, and transportation. JCB, rotavator, and cultivator available. Timely service at fair rates.',
    availability: 'Busy', charges: '₹800 - ₹2,500/hr', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/tractor1/200/200', gallery: [],
    addedDate: '2025-03-05'
  },
  {
    id: 20, name: 'Pandit Ravi Sharma', category: 'Pandit / Puja', location: 'Nandgaon Near Temple',
    experience: 25, rating: 5.0, reviews: 120, phone: '9876543229', whatsapp: '9876543229',
    description: 'Highly respected pandit ji for all types of pujas, havans, mundan, griha pravesh, and wedding ceremonies. Vedic rituals with complete samagri.',
    availability: 'Available', charges: '₹1,100 - ₹11,000', status: 'approved', verified: true,
    photo: 'https://picsum.photos/seed/pandit1/200/200', gallery: ['https://picsum.photos/seed/pandw1/400/300'],
    addedDate: '2025-03-08'
  }
];

// ============ STATE ============
let categories = [];
let providers = [];
let isAdminLoggedIn = false;
const ADMIN_CREDS = { username: 'radheradheji', password: 'radheradhe@735156' };

// ============ INIT ============
function init() {
  // Load from localStorage or use defaults
  const savedCategories = localStorage.getItem('nsd_categories');
  const savedProviders = localStorage.getItem('nsd_providers');
  categories = savedCategories ? JSON.parse(savedCategories) : [...DEFAULT_CATEGORIES];
  providers = savedProviders ? JSON.parse(savedProviders) : [...DEFAULT_PROVIDERS];
  if (!savedCategories) saveCategories();
  if (!savedProviders) saveProviders();

  // Check admin session
  isAdminLoggedIn = sessionStorage.getItem('nsd_admin') === 'true';
  updateAdminUI();

  // Populate dropdowns
  populateDropdowns();

  // Render homepage
  renderHomeCategories();
  renderFeaturedProviders();
  renderLatestProviders();
  updateStats();

  // Navbar scroll
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 10);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
  });
}

function saveCategories() { localStorage.setItem('nsd_categories', JSON.stringify(categories)); }
function saveProviders() { localStorage.setItem('nsd_providers', JSON.stringify(providers)); }

function updateAdminUI() {
  document.getElementById('adminNavBtn').style.display = isAdminLoggedIn ? 'none' : '';
  document.getElementById('adminLogoutBtn').style.display = isAdminLoggedIn ? '' : 'none';
}

// ============ DROPDOWNS ============
function populateDropdowns() {
  const catSelects = ['searchCategory', 'allSearchCategory', 'formCategory'];
  catSelects.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = el.value;
    // Keep first option
    while (el.options.length > 1) el.remove(1);
    categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = c.name;
      el.appendChild(opt);
    });
    el.value = val;
  });

  // Locations
  const locSet = new Set();
  providers.forEach(p => { if (p.location) locSet.add(p.location); });
  const locEl = document.getElementById('searchLocation');
  if (locEl) {
    while (locEl.options.length > 1) locEl.remove(1);
    [...locSet].sort().forEach(l => {
      const opt = document.createElement('option');
      opt.value = l;
      opt.textContent = l;
      locEl.appendChild(opt);
    });
  }
}

// ============ HELPERS ============
function getCategoryInfo(name) {
  return categories.find(c => c.name === name) || { icon: 'fa-user', color: '#8B5CF6' };
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

function renderStars(rating, size = '0.72rem') {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<i class="fas fa-star ${i <= Math.round(rating) ? '' : 'empty'}" style="font-size:${size}"></i>`;
  }
  html += '</div>';
  return html;
}

function getApprovedProviders() {
  return providers.filter(p => p.status === 'approved');
}

function getProviderAvatarHTML(provider, size = 64) {
  const initials = getInitials(provider.name);
  const catInfo = getCategoryInfo(provider.category);
  if (provider.photo) {
    return `<div class="provider-avatar" style="width:${size}px;height:${size}px"><img src="${provider.photo}" alt="${provider.name}" onerror="this.parentElement.innerHTML='${initials}'"></div>`;
  }
  return `<div class="provider-avatar" style="width:${size}px;height:${size}px">${initials}</div>`;
}

// ============ PROVIDER CARD ============
function renderProviderCard(p) {
  const catInfo = getCategoryInfo(p.category);
  return `
    <div class="provider-card">
      ${p.charges ? `<span class="charges-tag">${p.charges}</span>` : ''}
      <div class="provider-card-top">
        ${getProviderAvatarHTML(p)}
        <div class="provider-info">
          <div class="provider-name-row">
            <span class="provider-name">${p.name}</span>
            ${p.verified ? '<span class="verified-badge"><i class="fas fa-check"></i></span>' : ''}
          </div>
          <span class="provider-category-tag">${p.category}</span>
          <div class="provider-location"><i class="fas fa-map-marker-alt"></i>${p.location}</div>
          <div class="provider-rating-row">
            ${renderStars(p.rating)}
            <span class="rating-num">${p.rating}</span>
            <span class="reviews-count">(${p.reviews} reviews)</span>
          </div>
        </div>
      </div>
      ${p.description ? `<div class="provider-desc">${p.description}</div>` : ''}
      <div class="provider-meta">
        <span><i class="fas fa-briefcase"></i>${p.experience} Yrs</span>
        <span><span class="availability-dot ${p.availability === 'Available' ? 'available' : 'busy'}"></span>${p.availability}</span>
      </div>
      <div class="provider-card-actions">
        <button class="btn-provider-action btn-call" onclick="callProvider('${p.phone}')"><i class="fas fa-phone"></i> Call</button>
        <button class="btn-provider-action btn-whatsapp" onclick="whatsappProvider('${p.whatsapp || p.phone}')"><i class="fab fa-whatsapp"></i> WhatsApp</button>
        <button class="btn-provider-action btn-view" onclick="viewProfile(${p.id})"><i class="fas fa-eye"></i> View</button>
      </div>
    </div>
  `;
}

// ============ HOME RENDERS ============
function renderHomeCategories() {
  const grid = document.getElementById('homeCategoriesGrid');
  grid.innerHTML = categories.slice(0, 12).map(c => {
    const count = getApprovedProviders().filter(p => p.category === c.name).length;
    return `
      <div class="category-card" onclick="filterByCategory('${c.name}')">
        <div class="cat-icon" style="background:${c.color}15;color:${c.color}"><i class="fas ${c.icon}"></i></div>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${count} Provider${count !== 1 ? 's' : ''}</div>
      </div>
    `;
  }).join('');
}

function renderFeaturedProviders() {
  const grid = document.getElementById('featuredProvidersGrid');
  const featured = getApprovedProviders().sort((a, b) => b.rating - a.rating).slice(0, 6);
  grid.innerHTML = featured.map(renderProviderCard).join('');
  if (featured.length === 0) grid.innerHTML = emptyStateHTML();
}

function renderLatestProviders() {
  const grid = document.getElementById('latestProvidersGrid');
  const latest = getApprovedProviders().sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate)).slice(0, 6);
  grid.innerHTML = latest.map(renderProviderCard).join('');
  if (latest.length === 0) grid.innerHTML = emptyStateHTML();
}

function emptyStateHTML(msg = 'No service providers found') {
  return `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-search"></i><h5>${msg}</h5><p>Try adjusting your search or filters</p></div>`;
}

function updateStats() {
  const approved = getApprovedProviders();
  document.getElementById('statProviders').textContent = approved.length;
}

// ============ SEARCH ============
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const cat = document.getElementById('searchCategory').value;
  const loc = document.getElementById('searchLocation').value;

  let results = getApprovedProviders();
  if (query) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query))
    );
  }
  if (cat) results = results.filter(p => p.category === cat);
  if (loc) results = results.filter(p => p.location === loc);

  if (query || cat || loc) {
    showPage('all');
    document.getElementById('allSearchInput').value = query;
    document.getElementById('allSearchCategory').value = cat;
    const grid = document.getElementById('allProvidersGrid');
    grid.innerHTML = results.length > 0 ? results.map(renderProviderCard).join('') : emptyStateHTML('No results found for your search');
  }
}

// ============ ALL PROVIDERS PAGE ============
function renderAllProviders() {
  let list = getApprovedProviders();
  const query = document.getElementById('allSearchInput').value.trim().toLowerCase();
  const cat = document.getElementById('allSearchCategory').value;
  const sort = document.getElementById('allSortBy').value;

  if (query) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query))
    );
  }
  if (cat) list = list.filter(p => p.category === cat);

  switch (sort) {
    case 'rating': list.sort((a, b) => b.rating - a.rating); break;
    case 'experience': list.sort((a, b) => b.experience - a.experience); break;
    case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: list.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
  }

  const grid = document.getElementById('allProvidersGrid');
  grid.innerHTML = list.length > 0 ? list.map(renderProviderCard).join('') : emptyStateHTML();
}

// ============ CATEGORIES PAGE ============
function renderAllCategories() {
  const grid = document.getElementById('allCategoriesGrid');
  grid.innerHTML = categories.map(c => {
    const count = getApprovedProviders().filter(p => p.category === c.name).length;
    return `
      <div class="category-card" onclick="showCategoryProviders('${c.name}')">
        <div class="cat-icon" style="background:${c.color}15;color:${c.color}"><i class="fas ${c.icon}"></i></div>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${count} Provider${count !== 1 ? 's' : ''}</div>
      </div>
    `;
  }).join('');
}

function showCategoryProviders(catName) {
  const section = document.getElementById('categoryProvidersSection');
  section.style.display = 'block';
  document.getElementById('categoryProvidersTitle').textContent = catName;
  const list = getApprovedProviders().filter(p => p.category === catName);
  document.getElementById('categoryProvidersGrid').innerHTML = list.length > 0 ? list.map(renderProviderCard).join('') : emptyStateHTML(`No providers in ${catName}`);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterByCategory(catName) {
  showPage('all');
  document.getElementById('allSearchCategory').value = catName;
  renderAllProviders();
}

// ============ PAGE NAVIGATION ============
function showPage(page) {
  document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
  if (page === 'home') document.getElementById('homePage').classList.add('active');
  else if (page === 'all') { document.getElementById('allPage').classList.add('active'); renderAllProviders(); populateDropdowns(); }
  else if (page === 'categories') { document.getElementById('categoriesPage').classList.add('active'); renderAllCategories(); }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile nav
  const navCollapse = document.getElementById('navContent');
  const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
  if (bsCollapse) bsCollapse.hide();
}

// ============ ACTIONS ============
function callProvider(phone) {
  window.open('tel:' + phone, '_self');
}

function whatsappProvider(number) {
  const msg = encodeURIComponent('Hello, I found your contact on Nandgaon Services Directory. I need your service.');
  window.open('https://wa.me/91' + number + '?text=' + msg, '_blank');
}

function viewProfile(id) {
  const p = providers.find(pr => pr.id === id);
  if (!p) return;

  // Avatar
  const avatarEl = document.getElementById('profileAvatar');
  const initials = getInitials(p.name);
  if (p.photo) {
    avatarEl.innerHTML = `<img src="${p.photo}" alt="${p.name}" onerror="this.parentElement.innerHTML='${initials}'">`;
  } else {
    avatarEl.innerHTML = initials;
  }

  document.getElementById('profileName').textContent = p.name;
  document.getElementById('profileCategory').textContent = p.category;
  document.getElementById('profileLocation').textContent = p.location;
  document.getElementById('profileExperience').textContent = p.experience + ' Years';
  document.getElementById('profileCharges').textContent = p.charges || 'Not specified';
  document.getElementById('profileRating').innerHTML = renderStars(p.rating, '0.9rem') + ` <span style="font-weight:700;margin-left:6px">${p.rating}</span> <span style="color:var(--gray-500);font-size:0.8rem">(${p.reviews} reviews)</span>`;
  document.getElementById('profileDescription').textContent = p.description || 'No description available.';

  // Status
  const statusEl = document.getElementById('profileStatus');
  statusEl.className = 'status-badge ' + (p.status || 'approved');
  statusEl.textContent = (p.status || 'approved').charAt(0).toUpperCase() + (p.status || 'approved').slice(1);

  // Verified
  document.getElementById('profileVerified').innerHTML = p.verified ? '<span class="verified-badge" style="width:24px;height:24px;font-size:0.7rem"><i class="fas fa-check"></i></span>' : '';

  // Gallery
  const galleryWrap = document.getElementById('profileGalleryWrap');
  const galleryEl = document.getElementById('profileGallery');
  if (p.gallery && p.gallery.length > 0) {
    galleryWrap.style.display = 'block';
    galleryEl.innerHTML = p.gallery.map(url => `<img src="${url}" alt="Gallery" onerror="this.style.display='none'">`).join('');
  } else {
    galleryWrap.style.display = 'none';
  }

  // Buttons
  document.getElementById('profileCallBtn').href = 'tel:' + p.phone;
  document.getElementById('profileWhatsappBtn').href = 'https://wa.me/91' + (p.whatsapp || p.phone) + '?text=' + encodeURIComponent('Hello, I found your contact on Nandgaon Services Directory. I need your service.');

  new bootstrap.Modal(document.getElementById('profileModal')).show();
}

// ============ CONTACT ============
function submitContact() {
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  if (!name || !phone) {
    showToast('Please fill in your name and phone number', 'warning');
    return;
  }
  showToast('Message sent successfully! We will contact you soon.', 'success');
  document.getElementById('contactName').value = '';
  document.getElementById('contactPhone').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMsg').value = '';
}

// ============ ADMIN ============
function openAdminLogin() {
  if (isAdminLoggedIn) {
    openAdminPanel();
    return;
  }
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('adminUsername').value = '';
  document.getElementById('adminPassword').value = '';
  new bootstrap.Modal(document.getElementById('adminLoginModal')).show();
}

function adminLoginAction() {
  const username = document.getElementById('adminUsername').value.trim();
  const password = document.getElementById('adminPassword').value;
  if (username === ADMIN_CREDS.username && password === ADMIN_CREDS.password) {
    isAdminLoggedIn = true;
    sessionStorage.setItem('nsd_admin', 'true');
    updateAdminUI();
    bootstrap.Modal.getInstance(document.getElementById('adminLoginModal')).hide();
    openAdminPanel();
    showToast('Welcome, Admin!', 'success');
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function adminLogout() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('nsd_admin');
  updateAdminUI();
  closeAdminPanel();
  showToast('Logged out successfully', 'success');
}

function openAdminPanel() {
  if (!isAdminLoggedIn) { openAdminLogin(); return; }
  document.getElementById('adminOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderAdminStats();
  renderAdminProvidersTable();
  renderAdminPendingTable();
  renderCategoriesManage();
  switchAdminTab('providers', document.querySelector('.admin-tab'));
}

function closeAdminPanel() {
  document.getElementById('adminOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function switchAdminTab(tab, btn) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('adminTabProviders').style.display = tab === 'providers' ? '' : 'none';
  document.getElementById('adminTabAdd').style.display = tab === 'add' ? '' : 'none';
  document.getElementById('adminTabPending').style.display = tab === 'pending' ? '' : 'none';
  document.getElementById('adminTabCategories').style.display = tab === 'categories' ? '' : 'none';
  if (tab === 'add') {
    document.getElementById('formTitle').textContent = 'Add New Provider';
    resetForm();
  }
}

function renderAdminStats() {
  const approved = providers.filter(p => p.status === 'approved').length;
  const pending = providers.filter(p => p.status === 'pending').length;
  const total = providers.length;
  const cats = categories.length;
  document.getElementById('adminStats').innerHTML = `
    <div class="admin-stat-card">
      <div class="stat-icon" style="background:var(--purple-soft);color:var(--purple-main)"><i class="fas fa-users"></i></div>
      <div class="stat-num">${total}</div>
      <div class="stat-label">Total Providers</div>
    </div>
    <div class="admin-stat-card">
      <div class="stat-icon" style="background:#D1FAE5;color:#065F46"><i class="fas fa-check-circle"></i></div>
      <div class="stat-num">${approved}</div>
      <div class="stat-label">Approved</div>
    </div>
    <div class="admin-stat-card">
      <div class="stat-icon" style="background:var(--saffron-soft);color:var(--saffron-deep)"><i class="fas fa-clock"></i></div>
      <div class="stat-num">${pending}</div>
      <div class="stat-label">Pending</div>
    </div>
    <div class="admin-stat-card">
      <div class="stat-icon" style="background:#FEE2E2;color:#991B1B"><i class="fas fa-th-large"></i></div>
      <div class="stat-num">${cats}</div>
      <div class="stat-label">Categories</div>
    </div>
  `;
}

function renderAdminProvidersTable() {
  const tbody = document.getElementById('adminProvidersTable');
  const sorted = [...providers].sort((a, b) => b.id - a.id);
  tbody.innerHTML = sorted.map(p => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-2">
          <div class="provider-thumb">${p.photo ? `<img src="${p.photo}" onerror="this.parentElement.textContent='${getInitials(p.name)}'">` : getInitials(p.name)}</div>
          <div>
            <div style="font-weight:600;font-size:0.82rem">${p.name}</div>
            <div style="font-size:0.7rem;color:var(--gray-500)">${p.location}</div>
          </div>
        </div>
      </td>
      <td><span class="provider-category-tag">${p.category}</span></td>
      <td>${renderStars(p.rating, '0.65rem')} <span style="font-weight:600;font-size:0.78rem">${p.rating}</span></td>
      <td><span class="status-badge ${p.status || 'approved'}">${(p.status || 'approved').charAt(0).toUpperCase() + (p.status || 'approved').slice(1)}</span></td>
      <td>
        <button class="btn-admin-action btn-edit" onclick="editProvider(${p.id})"><i class="fas fa-edit"></i></button>
        <button class="btn-admin-action btn-delete" onclick="deleteProvider(${p.id})"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
  if (sorted.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="text-center" style="padding:2rem;color:var(--gray-500)">No providers added yet</td></tr>';
  }
}

function renderAdminPendingTable() {
  const tbody = document.getElementById('adminPendingTable');
  const pending = providers.filter(p => p.status === 'pending');
  tbody.innerHTML = pending.map(p => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-2">
          <div class="provider-thumb">${p.photo ? `<img src="${p.photo}" onerror="this.parentElement.textContent='${getInitials(p.name)}'">` : getInitials(p.name)}</div>
          <div style="font-weight:600;font-size:0.82rem">${p.name}</div>
        </div>
      </td>
      <td><span class="provider-category-tag">${p.category}</span></td>
      <td>
        <button class="btn-admin-action btn-approve" onclick="approveProvider(${p.id})"><i class="fas fa-check me-1"></i>Approve</button>
        <button class="btn-admin-action btn-delete" onclick="rejectProvider(${p.id})"><i class="fas fa-times me-1"></i>Reject</button>
      </td>
    </tr>
  `).join('');
  if (pending.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" class="text-center" style="padding:2rem;color:var(--gray-500)"><i class="fas fa-check-circle" style="font-size:1.5rem;color:var(--success);display:block;margin-bottom:0.5rem"></i>No pending providers</td></tr>';
  }
}

function approveProvider(id) {
  const p = providers.find(pr => pr.id === id);
  if (p) { p.status = 'approved'; saveProviders(); renderAdminPendingTable(); renderAdminProvidersTable(); renderAdminStats(); showToast(`${p.name} approved!`, 'success'); refreshHome(); }
}

function rejectProvider(id) {
  const p = providers.find(pr => pr.id === id);
  if (p) { p.status = 'rejected'; saveProviders(); renderAdminPendingTable(); renderAdminProvidersTable(); renderAdminStats(); showToast(`${p.name} rejected`, 'warning'); }
}

function deleteProvider(id) {
  const p = providers.find(pr => pr.id === id);
  if (!p) return;
  if (confirm(`Are you sure you want to delete "${p.name}"? This cannot be undone.`)) {
    providers = providers.filter(pr => pr.id !== id);
    saveProviders();
    renderAdminProvidersTable();
    renderAdminPendingTable();
    renderAdminStats();
    showToast(`${p.name} deleted`, 'error');
    refreshHome();
  }
}

function editProvider(id) {
  const p = providers.find(pr => pr.id === id);
  if (!p) return;
  document.getElementById('formTitle').textContent = 'Edit Provider: ' + p.name;
  document.getElementById('editProviderId').value = p.id;
  document.getElementById('formName').value = p.name;
  document.getElementById('formCategory').value = p.category;
  document.getElementById('formLocation').value = p.location;
  document.getElementById('formExperience').value = p.experience;
  document.getElementById('formRating').value = p.rating;
  document.getElementById('formReviews').value = p.reviews;
  document.getElementById('formPhone').value = p.phone;
  document.getElementById('formWhatsapp').value = p.whatsapp || '';
  document.getElementById('formCharges').value = p.charges || '';
  document.getElementById('formAvailability').value = p.availability || 'Available';
  document.getElementById('formStatus').value = p.status || 'approved';
  document.getElementById('formPhoto').value = p.photo || '';
  document.getElementById('formDescription').value = p.description || '';
  document.getElementById('formGallery').value = (p.gallery || []).join(', ');
  switchAdminTab('add', document.querySelectorAll('.admin-tab')[1]);
}

function resetForm() {
  document.getElementById('editProviderId').value = '';
  ['formName','formLocation','formExperience','formRating','formReviews','formPhone','formWhatsapp','formCharges','formPhoto','formDescription','formGallery'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('formCategory').selectedIndex = 0;
  document.getElementById('formAvailability').value = 'Available';
  document.getElementById('formStatus').value = 'approved';
  document.getElementById('formTitle').textContent = 'Add New Provider';
}

function saveProvider() {
  const name = document.getElementById('formName').value.trim();
  const category = document.getElementById('formCategory').value;
  const location = document.getElementById('formLocation').value.trim();
  const experience = parseInt(document.getElementById('formExperience').value);
  const rating = parseFloat(document.getElementById('formRating').value);
  const phone = document.getElementById('formPhone').value.trim();

  if (!name || !category || !location || isNaN(experience) || isNaN(rating) || !phone) {
    showToast('Please fill all required fields (Name, Category, Location, Experience, Rating, Phone)', 'warning');
    return;
  }

  if (rating < 1 || rating > 5) {
    showToast('Rating must be between 1 and 5', 'warning');
    return;
  }

  const editId = document.getElementById('editProviderId').value;
  const galleryStr = document.getElementById('formGallery').value.trim();
  const gallery = galleryStr ? galleryStr.split(',').map(u => u.trim()).filter(u => u) : [];

  const providerData = {
    name, category, location, experience, rating,
    reviews: parseInt(document.getElementById('formReviews').value) || 0,
    phone, whatsapp: document.getElementById('formWhatsapp').value.trim() || phone,
    charges: document.getElementById('formCharges').value.trim(),
    availability: document.getElementById('formAvailability').value,
    status: document.getElementById('formStatus').value,
    verified: true,
    photo: document.getElementById('formPhoto').value.trim(),
    description: document.getElementById('formDescription').value.trim(),
    gallery
  };

  if (editId) {
    // Edit existing
    const idx = providers.findIndex(p => p.id === parseInt(editId));
    if (idx !== -1) {
      providerData.id = parseInt(editId);
      providerData.addedDate = providers[idx].addedDate;
      providers[idx] = providerData;
      showToast(`${name} updated successfully!`, 'success');
    }
  } else {
    // Add new
    providerData.id = providers.length > 0 ? Math.max(...providers.map(p => p.id)) + 1 : 1;
    providerData.addedDate = new Date().toISOString().split('T')[0];
    providers.push(providerData);
    showToast(`${name} added successfully!`, 'success');
  }

  saveProviders();
  resetForm();
  renderAdminProvidersTable();
  renderAdminPendingTable();
  renderAdminStats();
  switchAdminTab('providers', document.querySelector('.admin-tab'));
  refreshHome();
}

// ============ CATEGORY MANAGEMENT ============
function addCategory() {
  const name = document.getElementById('newCategoryName').value.trim();
  const icon = document.getElementById('newCategoryIcon').value.trim() || 'fa-user';
  if (!name) { showToast('Please enter a category name', 'warning'); return; }
  if (categories.find(c => c.name.toLowerCase() === name.toLowerCase())) {
    showToast('Category already exists', 'warning'); return;
  }
  const colors = ['#3B82F6','#F59E0B','#EC4899','#EF4444','#8B5CF6','#06B6D4','#10B981','#F97316','#6366F1','#D97706'];
  categories.push({ name, icon, color: colors[categories.length % colors.length] });
  saveCategories();
  document.getElementById('newCategoryName').value = '';
  document.getElementById('newCategoryIcon').value = '';
  renderCategoriesManage();
  renderAdminStats();
  populateDropdowns();
  showToast(`Category "${name}" added!`, 'success');
  refreshHome();
}

function deleteCategory(name) {
  const count = providers.filter(p => p.category === name).length;
  if (count > 0) {
    showToast(`Cannot delete "${name}" — ${count} provider(s) exist in this category`, 'warning');
    return;
  }
  if (confirm(`Delete category "${name}"?`)) {
    categories = categories.filter(c => c.name !== name);
    saveCategories();
    renderCategoriesManage();
    renderAdminStats();
    populateDropdowns();
    refreshHome();
    showToast(`Category "${name}" deleted`, 'error');
  }
}

function renderCategoriesManage() {
  const el = document.getElementById('categoriesManageList');
  el.innerHTML = '<div class="row g-2">' + categories.map(c => {
    const count = providers.filter(p => p.category === c.name).length;
    return `
      <div class="col-md-6">
        <div class="d-flex align-items-center justify-content-between p-2" style="background:var(--gray-100);border-radius:var(--radius-xs)">
          <div class="d-flex align-items-center gap-2">
            <div style="width:32px;height:32px;border-radius:8px;background:${c.color}15;color:${c.color};display:flex;align-items:center;justify-content:center;font-size:0.85rem"><i class="fas ${c.icon}"></i></div>
            <div>
              <div style="font-weight:600;font-size:0.82rem">${c.name}</div>
              <div style="font-size:0.7rem;color:var(--gray-500)">${count} provider${count !== 1 ? 's' : ''}</div>
            </div>
          </div>
          <button class="btn-admin-action btn-delete" onclick="deleteCategory('${c.name}')" ${count > 0 ? 'disabled title="Has providers"' : ''}><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
  }).join('') + '</div>';
}

// ============ REFRESH HOME ============
function refreshHome() {
  renderHomeCategories();
  renderFeaturedProviders();
  renderLatestProviders();
  updateStats();
  populateDropdowns();
}

// ============ TOAST ============
function showToast(message, type = '') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'custom-toast ' + type;
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-triangle' };
  const icon = icons[type] || 'fa-info-circle';
  const colors = { success: 'var(--success)', error: 'var(--danger)', warning: 'var(--saffron-main)' };
  toast.innerHTML = `<i class="fas ${icon}" style="color:${colors[type] || 'var(--purple-main)'};font-size:1.1rem"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============ INIT ON LOAD ============
document.addEventListener('DOMContentLoaded', init);