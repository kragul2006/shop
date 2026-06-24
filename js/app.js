/* ─── PRODUCTS DATA STORE ─── */
const PRODUCTS = [
  { id:1, name:"1000 ML Stainless Steel Water Bottle", category:"Home Goods", price:190, discount:0, colors:["#FFF8DC"], variants:[], description:"AVATAR Stainless Steel Fridge/Refrigerator Bottle/Thunder is made of high quality stainless steel. It has a single wall high quality steel body with Plain design", featured:false, isNew:false, images: ["https://m.media-amazon.com/images/I/717hz1NRTPL._SY879_.jpg","https://m.media-amazon.com/images/I/61s49WApIpL._SL1500_.jpg"],stock:2100, reviews:[{author:"Asha R.",rating:5,comment:"Beautiful finish and sturdy — loved it!",date:"2026-03-02"},{author:"Ravi K.",rating:4,comment:"Great value for the price.",date:"2026-04-10"}] },
  { id:2, name:"Water Bottle Kids(2L+700ML+300ML)",
    category:"Home Goods",
    price:300, discount:0,
    colors:["#e524cb","#0d79de","#e9340f"],
    variants:[],
    description:"ABC Water Bottles(2L+700ml+300ml) Leak-proof, BPA free Motivational Sports Bottle 3000 ml Plastic Bottle (Pack of 3, Multicolor)", 
    featured:true,
    isNew:true,
    images:["https://rukminim2.flixcart.com/image/1536/1536/xif0q/bottle/z/a/m/3000-water-bottles-2l-700ml-300ml-leak-proof-bpa-free-enriched-2-original-imahygdvsfukkwxt.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/bottle/l/f/u/3500-motivational-water-bottle-silicone-with-free-stickers-3-original-imahg742mcyyqqwy.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/bottle/l/w/e/3500-motivational-water-bottle-silicone-with-free-stickers-3-original-imahg742e73fznva.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },

    { id:3, name:"labubu water bottle",
    category:"Home Goods",
    price:100, discount:0,
    colors:["#e524cb","#0d79de","#e9340f"],
    variants:[], 
    description:" LABUBU water Bottle Bunny Cartoon 750 ml Plastic Bottle (Pack of 1, Multicolor)", featured:true, isNew:true, 
    images:["https://rukminim2.flixcart.com/image/1600/2140/xif0q/bottle/9/i/6/750-labubu-water-bottle-bunny-cartoon-1-labubu-foljyahowa-original-imahkvkwbfjagzh2.jpeg?q=60","https://rukminim2.flixcart.com/image/1396/1396/xif0q/bottle/b/z/j/900-kids-900ml-water-bottle-with-strap-leakproof-flip-sipper-original-imahjvag4957fcbf.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/water-bottle/b/i/v/900-labubu-theme-water-bottle-for-kids-and-teens-1-luckyz-original-imaheym5fhjmkegw.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },

    { id:4, name:"BOTMOSAI Water Bottle 1 Litre",
    category:"Home Goods",
    price:50, discount:0,
    colors:["#e524cb","#0d79de","#e9340f"],
    variants:[],
    description:"BOTMOSAICP1GRY 1000 ml Plastic Bottle (Pack of 1, Black)", featured:false, isNew:false, 
    images:[" https://rukminim2.flixcart.com/image/1396/1396/xif0q/bottle/j/6/x/1000-botmosaicp1gry-1-botmosaicp1gry-flipkart-smartbuy-enriched-transparent-original-imahh3u5shcnevg6.png?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/bottle/1/9/z/1000-botmosaicp1gry-1-botmosaicp1gry-flipkart-smartbuy-original-imahh3u5atzaq2xe.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },

    { id:5, name:"Plastic Print Container",
    category:"Storage",
    price:530, discount:0,
    colors:["#e524cb","#e9340f"],
    variants:[],
    description:"DIANA PRINT RANDOM CONTAINER SET.3,5,7,10 no. Used for storing and securing foods and other items.Safe to use and made of 100% virgin and food-grade plastic", featured:false, isNew:true,
    images:[" https://5.imimg.com/data5/SELLER/Default/2023/7/329803367/SI/OE/OR/127708366/plastic-print-container-set-4-no-500x500.jpg","https://5.imimg.com/data5/SELLER/Default/2021/7/AF/QZ/VE/127708366/diana-set-3-5-7-10-random-plain-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },

    { id:6, name:"Plastic Tray 101",
    category:"Home Goods",
    price:90, discount:0,
    colors:["#18ef38","#0e1eff","#e9340f"],
    variants:[],
    description:"Good Quality,Strong ,Multi Purpose for Home kitchen and office Stationary office accessories is designed in a brilliant, eye - catching, convenient way that makes your working place's no more boring.", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2022/3/SE/HI/EV/127708366/plastic-tray-101-500x500.jpg","https://5.imimg.com/data5/SELLER/Default/2022/3/WV/GN/BU/127708366/plastic-tray-404-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:7, name:"Plastic Square Container - 600 ml",
    category:"Storage",
    price:903, discount:0,
    colors:["#18ef38","#0e1eff","#e9340f"],
    variants:[],
    description:"A Smart,Durable & Good Looking. Square Shaped container set for Multiple use,Made from fine Quality food grade Virgin Material", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2023/2/MP/DP/LT/127708366/plastic-square-container-600-ml-500x500.jpg","https://5.imimg.com/data5/SELLER/Default/2023/2/DP/HP/EF/127708366/plastic-square-container-600-ml-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:8, name:"Plastic Stool For Bathroom",
    category:"Bathroom utensils",
    price:903, discount:0,
    colors:["#18ef38","#0e1eff","#ff01ea"],
    variants:[],
    description:"Suitable for bathroom, workshop, garden, Stacked storage, space saving, easy to clean, easy to carry.", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2021/4/ZE/DS/SI/127708366/whatsapp-image-2021-04-23-at-19-45-11-4--500x500.jpeg","https://5.imimg.com/data5/SELLER/Default/2021/10/KO/CA/TW/127708366/004-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:9, name:"Round Plastic Bathroom Stool",
    category:"Bathroom utensils",
    price:903, discount:0,
    colors:["#18ef38","#0e1eff","#ff01ea"],
    variants:[],
    description:"Suitable for bathroom, workshop, garden, Stacked storage, space saving, easy to clean, easy to carry.", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2021/4/VQ/DS/VX/127708366/whatsapp-image-2021-04-23-at-19-45-11-2--500x500.jpeg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:10, name:"Plastic Container Print Set Of 3",
    category:"Storage",
    price:903, discount:0,
    colors:["#f30df7","#0e1eff"],
    variants:[],
    description:"Suitable for bathroom, workshop, garden, Stacked storage, space saving, easy to clean, easy to carry.", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2021/7/WF/YC/NT/127708366/plastic-container-set-of-3-500x500.jpg","https://5.imimg.com/data5/SELLER/Default/2021/7/ZL/LI/HN/127708366/plastic-container-5ltr-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:11, name:"APSARA Absolute Matte Magic Pencils(10 PCS)",
    category:"Stationary",
    price:903, discount:0,
    colors:[],
    variants:[],
    description:"Apsara presents you a range of matt magic pencils which are Highly pigmented extra dark pencils. It has extra dark lead for gold handwriting.", 
    featured:false,
    isNew:false,
    images:["https://rukminim2.flixcart.com/image/1396/1396/kae95e80/pencil/n/y/9/absolute-matt-magic-pencils-pack-of-5-50-pencils-apsara-original-imafryg5ttzpkwff.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/kae95e80/pencil/n/y/9/absolute-matt-magic-pencils-pack-of-5-50-pencils-apsara-original-imafryg53bqfafkh.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:12, name:"Camro Spoon 1 Pcs ",
    category:"Kitchenware",
    price:20, discount:0,
    colors:[],
    variants:[],
    description:"PREMIUM STAINLESS STEEL: Crafted from high-quality stainless steel for lasting durability and rust resistance.", 
    featured:false,
    isNew:false,
    images:["https://m.media-amazon.com/images/I/41hHyiQ3tzL._SX679_.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:13, name:"Stainless Steel Serving Spoon ",
    category:"Kitchenware",
    price:20, discount:0,
    colors:[],
    variants:[],
    description:"Stainless Steel Serving Spoon for Rice, Biriyani & Pulao | Durable, Easy-to-Clean & Multi-Purpose Kitchen Ladle", 
    featured:false,
    isNew:false,
    images:["https://m.media-amazon.com/images/I/41FyzFr-7FL._SX679_.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:14, name:"ROKERY (Pack of 6 150 ML) Glass Tea Cup",
    category:"Kitchenware",
    price:280, discount:0,
    colors:[],
    variants:[],
    description:"Stainless Steel Serving Spoon for Rice, Biriyani & Pulao | Durable, Easy-to-Clean & Multi-Purpose Kitchen Ladle", 
    featured:false,
    isNew:false,
    images:["https://rukminim2.flixcart.com/image/1396/1396/xif0q/glass/x/7/a/glass-coffee-mug-smilery-170-original-imagpmz846bx76k4.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/glass/a/r/l/glass-tea-and-coffee-cup-set-transparent-mugs-for-hot-cold-original-imahdf6xrhzhhfcz.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
  { id:15, name:"School and Office Lunch Bags",
    category:"Home Goods",
    price:120, discount:0,
    colors:[],
    variants:[],
    description:"RIGHT CHOICE School and Office tiffin bags Lunch,Box,Bag, Keep Food Hot and Warm Waterproof Lunch Bag (Purple, Grey, 4 L)", 
    featured:false,
    isNew:false,
    images:["https://rukminim2.flixcart.com/image/1396/1396/xif0q/bag/c/6/5/5-school-and-office-tiffin-bags-lunch-box-bag-keep-food-hot-and-original-imahmw2jtj4kjuy7.jpeg?q=90","https://rukminim2.flixcart.com/image/1396/1396/xif0q/bag/n/j/s/5-school-and-office-tiffin-bags-lunch-box-bag-keep-food-hot-and-original-imahmw2jyypax6yw.jpeg?q=90"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
    { id:16, name:"Plain Storage Basket",
    category:"Storage",
    price:60, discount:0,
    colors:[],
    variants:[],
    description:"rendering Plain Storage Box. Sparks Basket with Lid 99", 
    featured:false,
    isNew:false,
    images:["https://5.imimg.com/data5/SELLER/Default/2025/9/545270421/JL/ZF/NU/43799821/plain-storage-basket-500x500.jpg","https://5.imimg.com/data5/SELLER/Default/2025/9/545268799/CT/LL/VK/43799821/plain-storage-basket-500x500.jpg"], stock:20, reviews:[{author:"Ritika S.",rating:5,comment:"Looks premium and was packaged well.",date:"2026-03-18"}] },
    
];

const CATEGORIES = ["All","Kitchenware","Home Goods","Storage","Bathroom utensils","Stationary","Cosmetics"];

/* ─── CART ─── */
const Cart = {
  get() { try { return JSON.parse(localStorage.getItem('slm_cart') || '[]'); } catch(e) { return []; } },
  save(items) { localStorage.setItem('slm_cart', JSON.stringify(items)); },
  add(productId, color, variant, qty=1) {
    const items = this.get();
    const p = PRODUCTS.find(x=>x.id===productId);
    if (!p) return;
    items.push({ id:Date.now(), productId, name:p.name, category:p.category, price:Math.round(p.price*(1-p.discount/100)), color, variant, qty, image:p.image });
    this.save(items);
  },
  count() { return this.get().reduce((s,i)=>s+i.qty,0); },
};

/* ─── PRODUCTS STORE (with save/load for admin changes) ─── */
const Store = {
  key: 'slm_products',
  getAll() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return PRODUCTS;
  },
  save(products) { localStorage.setItem(this.key, JSON.stringify(products)); },
  reset() { localStorage.removeItem(this.key); },
};

/* ─── FEEDBACK STORE (customer messages from Contact page) ─── */
const FeedbackStore = {
  key: 'slm_feedback',
  getAll() { try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch(e) { return []; } },
  save(items) { localStorage.setItem(this.key, JSON.stringify(items)); },
  add({name, phone = '', message}) {
    const items = this.getAll();
    const entry = { id: Date.now(), name, phone, message, date: new Date().toISOString() };
    items.unshift(entry);
    this.save(items);
    return entry;
  },
  remove(id) {
    const items = this.getAll().filter(i=>i.id!==id);
    this.save(items);
  },
  clear() { localStorage.removeItem(this.key); }
};

/* ─── SVG PRODUCT VISUAL ─── */
function productSVG(type, color='#8B0000', size=120) {
  // If `type` looks like an image URL or file path, render an <img> tag instead of the SVG placeholder.
  if (typeof type === 'string') {
    // Normalize Windows backslashes to forward slashes so local/relative paths work consistently.
    const normalized = type.replace(/\\/g, '/');
    const looksLikeImage = normalized.startsWith('http') || normalized.startsWith('data:') || normalized.includes('/') || /\.(png|jpe?g|gif|webp|svg)$/i.test(normalized);
    if (looksLikeImage) {
      const src = normalized;
      // Let CSS control fitting; return a plain responsive <img> so containers decide object-fit.
      return `<img src="${src}" alt="" style="width:100%;height:100%;display:block;max-width:none;border-radius:6px"/>`;
    }
  }
  const d = {
    saree: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".08"/><path d="M20,90 Q40,30 60,20 Q80,10 100,30 L95,85 Q70,95 50,90 Z" fill="${color}" opacity=".7"/><path d="M22,92 Q42,32 62,22" stroke="${color}" stroke-width="2.5" fill="none" opacity=".5"/><line x1="30" y1="88" x2="90" y2="35" stroke="gold" stroke-width="1.8" opacity=".8"/><circle cx="96" cy="34" r="9" fill="gold" opacity=".55"/><circle cx="96" cy="34" r="5" fill="white" opacity=".3"/></svg>`,
    saree2: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".08"/><path d="M15,85 Q50,20 105,25 L100,90 Q60,100 15,85Z" fill="${color}" opacity=".6"/>${[40,58,76].map(x=>`<line x1="${x}" y1="24" x2="${x-2}" y2="89" stroke="white" stroke-width="1.8" opacity=".45"/>`).join('')}</svg>`,
    jewellery: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="#FFF8DC" opacity=".4"/><circle cx="60" cy="46" r="22" fill="none" stroke="${color}" stroke-width="3"/><circle cx="60" cy="46" r="13" fill="${color}" opacity=".25"/>${Array.from({length:8},(_,i)=>{const a=i*Math.PI*2/8;return `<circle cx="${(60+28*Math.cos(a)).toFixed(1)}" cy="${(46+28*Math.sin(a)).toFixed(1)}" r="4.5" fill="${color}" opacity=".75"/>`;}).join('')}<line x1="44" y1="68" x2="34" y2="95" stroke="${color}" stroke-width="2.2"/><line x1="60" y1="68" x2="60" y2="97" stroke="${color}" stroke-width="2.2"/><line x1="76" y1="68" x2="86" y2="95" stroke="${color}" stroke-width="2.2"/><ellipse cx="34" cy="97" rx="9" ry="5.5" fill="${color}" opacity=".65"/><ellipse cx="60" cy="99" rx="9" ry="5.5" fill="${color}" opacity=".65"/><ellipse cx="86" cy="97" rx="9" ry="5.5" fill="${color}" opacity=".65"/></svg>`,
    anklet: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="#F0F0F0" opacity=".4"/><ellipse cx="60" cy="60" rx="36" ry="13" fill="none" stroke="${color}" stroke-width="3.5"/>${Array.from({length:7},(_,i)=>{const a=i*Math.PI*2/7,x=(60+36*Math.cos(a)).toFixed(1),y=(60+13*Math.sin(a)).toFixed(1);return `<line x1="${x}" y1="${y}" x2="${x}" y2="${(+y+14).toFixed(1)}" stroke="${color}" stroke-width="1.8"/><circle cx="${x}" cy="${(+y+14).toFixed(1)}" r="4" fill="${color}" opacity=".75"/>`;}).join('')}</svg>`,
    suit: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".07"/><path d="M33,14 L33,95 L87,95 L87,14 Q72,26 60,20 Q48,26 33,14Z" fill="${color}" opacity=".5"/>${[40,52,68,80].map(x=>`<line x1="${x}" y1="20" x2="${x}" y2="95" stroke="white" stroke-width="1" opacity=".35"/>`).join('')}<line x1="33" y1="52" x2="87" y2="52" stroke="gold" stroke-width="2.5"/></svg>`,
    churidar: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".08"/><rect x="28" y="14" width="64" height="92" rx="5" fill="${color}" opacity=".5"/>${Array.from({length:8},(_,i)=>`<line x1="28" y1="${18+i*11}" x2="92" y2="${18+i*11}" stroke="white" stroke-width="1" opacity=".35"/>`).join('')}</svg>`,
    pooja: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="#FFF8DC" opacity=".4"/><ellipse cx="60" cy="86" rx="42" ry="9" fill="#B8860B" opacity=".65"/><ellipse cx="60" cy="80" rx="37" ry="7" fill="#CD853F" opacity=".75"/><circle cx="34" cy="66" r="11" fill="none" stroke="#B8860B" stroke-width="2.5"/><path d="M32,62 Q34,52 36,62" fill="#FF6B35" opacity=".85"/><circle cx="86" cy="66" r="11" fill="none" stroke="#B8860B" stroke-width="2.5"/><path d="M84,62 Q86,52 88,62" fill="#FF6B35" opacity=".85"/><rect x="55" y="48" width="10" height="33" fill="#B8860B" opacity=".55"/><ellipse cx="60" cy="46" rx="9" ry="5.5" fill="#FFD700" opacity=".85"/><path d="M55,42 Q60,30 65,42" fill="#FF6B35" opacity=".95"/></svg>`,
    agarbatti: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="#F5F0FF" opacity=".4"/>${[44,60,76].map((x,i)=>`<line x1="${x}" y1="100" x2="${x}" y2="18" stroke="#8B4513" stroke-width="2.5"/><path d="M${x},18 Q${x-5},10 ${x},6 Q${x+5},10 ${x},18" fill="#8B4513" opacity=".75"/><path d="M${x},6 Q${x+4},${-5+i*4} ${x+8},${-10+i*6}" stroke="#9B59B6" stroke-width="1.5" fill="none" opacity=".5"/>`).join('')}<rect x="38" y="95" width="44" height="16" rx="5" fill="#8B4513" opacity=".35"/></svg>`,
    blouse: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".07"/><path d="M22,28 Q38,8 60,14 Q82,8 98,28 L92,82 Q76,93 60,90 Q44,93 28,82 Z" fill="${color}" opacity=".5"/>${Array.from({length:5},(_,i)=>`<circle cx="60" cy="${33+i*10}" r="3.5" fill="gold" opacity=".75"/>`).join('')}</svg>`,
    kids: `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="8" fill="${color}" opacity=".08"/><path d="M28,50 Q60,38 92,50 L97,106 L23,106 Z" fill="${color}" opacity=".6"/>${Array.from({length:7},(_,i)=>`<circle cx="${32+i*9}" cy="52" r="3.5" fill="gold" opacity=".85"/>`).join('')}<rect x="38" y="13" width="44" height="40" rx="6" fill="${color}" opacity=".38"/><line x1="48" y1="24" x2="72" y2="24" stroke="white" stroke-width="2" opacity=".5"/><line x1="48" y1="33" x2="72" y2="33" stroke="white" stroke-width="2" opacity=".5"/></svg>`,
  };
  return d[type] || d['saree'];
}

/* ─── STAR HTML ─── */
function starsHTML(rating) {
  return Array.from({length:5},(_,i)=>`<span class="star${i<rating?'':' empty'}">★</span>`).join('');
}

/* ─── COLOR NAME HELPER (shared) ─── */
function colorName(hex) {
  if (!hex) return '';
  const s = String(hex).trim().toLowerCase();
  const map = {
    '#fff8dc':'cream','#ffffff':'white','#000000':'black','#8b0000':'crimson','#b8860b':'gold',
    '#6b3fa0':'purple','#c0006b':'magenta','#c75000':'orange','#ffd700':'gold','#f5f5f5':'off white',
    '#20b2aa':'teal','#ff69b4':'pink','#c0a080':'tan','#deb887':'burlywood','#8b4513':'brown',
    '#2f4f4f':'charcoal','#2e2e2e':'dark gray','#6b8e23':'olive','#1a6b1a':'forest green','#238e5c':'green'
  };
  if (map[s]) return map[s].charAt(0).toUpperCase()+map[s].slice(1);
  function hexToRgb(h) {
    let v = h.replace('#',''); if (v.length===3) v = v.split('').map(x=>x+x).join('');
    const n = parseInt(v,16); return {r:(n>>16)&255, g:(n>>8)&255, b:n&255};
  }
  const {r,g,b} = hexToRgb(s);
  const rn=r/255, gn=g/255, bn=b/255;
  const max=Math.max(rn,gn,bn), min=Math.min(rn,gn,bn);
  let h=0, s2=0, l=(max+min)/2;
  if (max!==min) {
    const d = max-min; s2 = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){case rn: h=(gn-bn)/d + (gn<bn?6:0); break; case gn: h=(bn-rn)/d + 2; break; default: h=(rn-gn)/d + 4;}
    h = Math.round(h*60);
  }
  if (s2 < 0.12) {
    if (l > 0.9) return 'White';
    if (l < 0.12) return 'Black';
    return 'Gray';
  }
  if (h < 15 || h >= 345) return 'Red';
  if (h < 45) return 'Orange';
  if (h < 70) return 'Yellow';
  if (h < 150) return 'Green';
  if (h < 200) return 'Teal';
  if (h < 260) return 'Blue';
  if (h < 290) return 'Purple';
  if (h < 330) return 'Pink';
  return 'Red';
}
/* ─── COLOR SELECTION HANDLER ─── */
function initColorSelection() {
  document.addEventListener('click', function(e) {
    const colorBtn = e.target.closest('.color-btn');
    if (!colorBtn) return;
    
    const productId = parseInt(colorBtn.dataset.productId);
    const color = colorBtn.dataset.color;
    const productCard = colorBtn.closest('.product-card');
    
    if (!productCard || !productId) return;
    
    // Update active state on color buttons
    productCard.querySelectorAll('.color-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.color === color);
    });
    
    // Find the product
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // Update the product image
    const imgContainer = productCard.querySelector('.product-image');
    if (!imgContainer) return;
    
    // Check if color-specific image exists
    if (product.colorImages && product.colorImages[color]) {
      // Update with color-specific image
      imgContainer.innerHTML = `<img src="${product.colorImages[color]}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:6px;max-width:none"/>`;
    } else {
      // Fallback: try to use the first image or SVG
      const imageType = product.image || product.images?.[0] || 'saree';
      imgContainer.innerHTML = productSVG(imageType, color, 120, productId, color);
    }
    
    // Also update the main image display if it exists separately
    const mainImage = productCard.querySelector('.product-main-image');
    if (mainImage && product.colorImages && product.colorImages[color]) {
      mainImage.src = product.colorImages[color];
    }
  });
}

// Initialize color selection when DOM is ready
document.addEventListener('DOMContentLoaded', ()=>{
  initNavbar();
  initScrollTop();
  initColorSelection(); // Add this line
});
/* ─── SHARED NAVBAR ─── */
function renderNavbar(activePage) {
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="18" fill="#8B0000"/>
          <path d="M19,7 L21.5,15 L30,15 L23.5,19.5 L26,27.5 L19,23 L12,27.5 L14.5,19.5 L8,15 L16.5,15 Z" fill="#FFD700"/>
        </svg>
        <div class="nav-logo-text">
          <div class="shop-name">Sri Lakshmi</div>
          <div class="shop-tag">Multi Shop</div>
        </div>
      </a>
      <div class="nav-links">
        <a href="index.html" class="nav-link${activePage==='home'?' active':''}">Home</a>
        <div class="nav-dropdown">
          <a href="products.html" class="nav-link nav-dropdown-toggle${activePage==='products'?' active':''}">
            Products
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 7L11 1" stroke="currentColor" stroke-width="1.8"/></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="products.html" class="nav-dropdown-item">All Products</a>
            ${CATEGORIES.slice(1).map(c=>`<a href="products.html?cat=${encodeURIComponent(c)}" class="nav-dropdown-item">${c}</a>`).join('')}
          </div>
        </div>
        <a href="about.html" class="nav-link${activePage==='about'?' active':''}">About Us</a>
      </div>
      <div class="nav-actions">
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="mobile-menu-link${activePage==='home'?' active':''}">Home</a>
    <a href="products.html" class="mobile-menu-link${activePage==='products'?' active':''}">Products</a>
    <div class="mobile-divider"></div>
    <span style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8a6050;padding:4px 16px;">Categories</span>
    ${CATEGORIES.slice(1).map(c=>`<a href="products.html?cat=${encodeURIComponent(c)}" class="mobile-menu-cat">${c}</a>`).join('')}
    <div class="mobile-divider"></div>
    <a href="about.html" class="mobile-menu-link${activePage==='about'?' active':''}">About Us</a>
  </div>`;
}

/* ─── SHARED FOOTER ─── */
function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
              <div class="brand-name">Sri Lakshmi Multi Shop</div>
              <p>Your trusted family store for home essentials — cookware, decor, bedding, and more. Serving with love since 2017.</p>
            </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="products.html">All Products</a>
          <a href="about.html">About Us</a>
        </div>
        <div class="footer-col">
          <h4>Categories</h4>
          ${CATEGORIES.slice(1).map(c=>`<a href="products.html?cat=${encodeURIComponent(c)}">${c}</a>`).join('')}
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>📍 2,Odiampet Road , Villianur <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 605 110</p>
          <p>📞 +91 9361605339</p>
          <p>📧 contact@srilakshmishop.in</p>
          <p>🕐 Mon–Sat: 10 AM – 9:30 PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} Sri Lakshmi Multi Shop. All rights reserved.</p>
        <p>Made with ♥ in Puducherry</p>
      </div>
    </div>
  </footer>`;
}

/* ─── TOAST ─── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}

/* ─── SCROLL TO TOP ─── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', ()=>{
    btn.classList.toggle('visible', window.scrollY > 320);
  });
  btn.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ─── NAVBAR SCROLL + HAMBURGER ─── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (nav) {
    window.addEventListener('scroll', ()=>nav.classList.toggle('scrolled', window.scrollY > 50));
  }
  if (ham && menu) {
    ham.addEventListener('click', ()=>menu.classList.toggle('open'));
    document.addEventListener('click', e=>{
      if (!ham.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
    });
  }

  // Dropdown: support click-to-open on touch devices while keeping hover for desktop
  document.querySelectorAll('.nav-dropdown').forEach(drop=>{
    const toggle = drop.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', (e)=>{
      // If dropdown already open, allow navigation. Otherwise open it and prevent navigation.
      if (!drop.classList.contains('open')) {
        e.preventDefault();
        // close other open dropdowns
        document.querySelectorAll('.nav-dropdown.open').forEach(d=>{ if (d!==drop) d.classList.remove('open'); });
        drop.classList.add('open');
      }
    });
  });

  // Close any open dropdown when clicking outside
  document.addEventListener('click', (e)=>{
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d=>d.classList.remove('open'));
    }
  });
}

/* ─── ON LOAD ─── */
document.addEventListener('DOMContentLoaded', ()=>{
  initNavbar();
  initScrollTop();
});
