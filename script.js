let currentCategory = "resources";
let cart = [];
let searchQuery = '';
let editMode = false;
const exchangeRate = 50;
let currentLanguage = 'ar';

const translations = {
  en: {
    "store-name": "♕ Lords Union ♕",
    "gems": "Gems",
    "resources": "Resources",
    "diamonds": "Diamonds",
    "killers": "Killers",
    "bots": "Bots",
    "cart-title": "Shopping Cart",
    "clear-cart": "Clear Cart",
    "total": "Total",
    "edit": "Edit",
    "payment-methods": "Payment Methods",
    "send-order": "Send Order via WhatsApp",
    "empty-cart": "Cart is empty!",
    "confirm-clear": "Are you sure you want to clear the cart?",
    "confirm-remove": "Do you want to remove this item from cart?",
    "add-success": "Added to cart",
    "remove-success": "Item removed",
    "clear-success": "Cart cleared",
    "edit-success": "Price updated",
    "copy-success": "Payment info copied",
    "copy-error": "Copy failed",
    "currency": "EGP",
    "new-order": "New order from",
    "killers-prices": "Killers Prices",
    "no-products": "No matching products",
    // ترجمات المنتجات
    "0000 - 390": "0000 - 390",
    "391 - 790": "391 - 790",
    "791 - 1.90B": "791 - 1.90B",
    "1.91B - 1.390B": "1.91B - 1.390B",
    "1.391B - 2.490B": "1.391B - 2.490B",
    "44444 🎀": "44444 Ribbon",
    "44442 🎀": "44442 Ribbon",
    "44440 🎀": "44440 Ribbon",
    "42222 🎀": "42222 Ribbon",
    "33333 🎀": "33333 Ribbon",
    "33330 🎀": "33330 Ribbon",
    "22222 🎀": "22222 Ribbon",
    "22221 🎀": "22221 Ribbon",
    "22220 🎀": "22220 Ribbon",
    "11111 🎀": "11111 Ribbon",
    "11110 🎀": "11110 Ribbon",
    "40000 🎀": "40000 Ribbon",
    "بطاقه ماسيه30يوم💎": "Diamond Pass30d",
    "بطاقه ماسيه7ايام💎": "Diamond Pass7d",
    "2096 💎": "2096 💎",
    "2620 💎": "2620 💎",
    "3144 💎": "3144 💎",
    "5130 💎": "5130 💎",
    "7021 💎": "7021 💎",
    "9956 💎": "9956 💎",
    "20120 💎": "20120 💎",
    "30392 💎": "30392 💎",
    "50304 💎": "50304 💎",
    "63399 💎": "63399 💎",
    "أسعار القتلى": "Killers Prices",
    "200m": "200M Kills",
    "300m": "300M Kills",
    "400m": "400M Kills",
    "1B": "1B Kills",
    "بوت مزارع": "Farm Bot",
    "بوت تطوير/شخصي": "Dev/Personal Bot",
    "بوت بنك جزئي": "Partial Bank Bot",
    "بوت بنك شامل": "Full Bank Bot"
  },
  ar: {
    "store-name": "♕ آتحٍآدِ لُۆرٍدِس ♕",
    "gems": "الجواهر",
    "resources": "الموارد",
    "diamonds": "الماس",
    "killers": "القتلة",
    "bots": "البوتات",
    "cart-title": "سلة المشتريات",
    "clear-cart": "تفريغ السلة",
    "total": "الإجمالي",
    "edit": "تعديل",
    "payment-methods": "طرق الدفع",
    "send-order": "إرسال الطلب على واتساب",
    "empty-cart": "السلة فارغة!",
    "confirm-clear": "هل أنت متأكد من أنك تريد تفريغ السلة؟",
    "confirm-remove": "هل تريد حذف هذا المنتج من السلة؟",
    "add-success": "تمت الإضافة إلى السلة",
    "remove-success": "تم حذف المنتج",
    "clear-success": "تم تفريغ السلة",
    "edit-success": "تم تعديل السعر",
    "copy-success": "تم نسخ معلومات الدفع",
    "copy-error": "فشل في النسخ",
    "currency": "جنيه",
    "new-order": "طلب جديد من",
    "killers-prices": "أسعار القتلى",
    "no-products": "لا توجد منتجات متطابقة",
    // النصوص العربية للمنتجات
    "0000 - 390": "0000 - 390",
    "391 - 790": "391 - 790",
    "791 - 1.90B": "791 - 1.90B",
    "1.91B - 1.390B": "1.91B - 1.390B",
    "1.391B - 2.490B": "1.391B - 2.490B",
    "44444 ": "44444 ",
    "44442 ": "44442 ",
    "44440 ": "44440 ",
    "42222 ": "42222 ",
    "33333 ": "33333 ",
    "33330 ": "33330 ",
    "22222 ": "22222 ",
    "22221 ": "22221 ",
    "22220 ": "22220 ",
    "11111 ": "11111 ",
    "11110 ": "11110 ",
    "40000 ": "40000 ",
    "بطاقه ماسيه30يوم💎": "بطاقه ماسيه30يوم💎",
    "بطاقه ماسيه7ايام💎": "بطاقه ماسيه7ايام💎",
    "2096 💎": "2096 💎",
    "2620 💎": "2620 💎",
    "3144 💎": "3144 💎",
    "5130 💎": "5130 💎",
    "7021 💎": "7021 💎",
    "9956 💎": "9956 💎",
    "20120 💎": "20120 💎",
    "30392 💎": "30392 💎",
    "50304 💎": "50304 💎",
    "63399 💎": "63399 💎",
    "أسعار القتلى": "أسعار القتلى",
    "200m": "200 مليون",
    "300m": "300 مليون",
    "400m": "400 مليون",
    "1B": "1 مليار",
    "بوت مزارع": "بوت مزارع",
    "بوت تطوير/شخصي": "بوت تطوير/شخصي",
    "بوت بنك جزئي": "بوت بنك جزئي",
    "بوت بنك شامل": "بوت بنك شامل"
  }
};

const defaultProducts = {
  gems: [
    { name: "0000 - 390", price: "4.30$" },
    { name: "391 - 790", price: "4.45$" },
    { name: "791 - 1.90B", price: "4.60$" },
    { name: "1.91B - 1.390B", price: "4.75$" },
    { name: "1.391B - 2.490B", price: "4.95$" }
  ],
  resources: [
    { name: "44444 ", price: "2.5$" },
    { name: "44442 ", price: "2.3$" },
    { name: "44440 ", price: "2.0$" },
    { name: "42222 ", price: "2.2$" },
    { name: "33333 ", price: "2.3$" },
    { name: "33330 ", price: "1.7$" },
    { name: "22222 ", price: "1.8$" },
    { name: "22221 ", price: "1.7$" },
    { name: "22220 ", price: "1.5$" },
    { name: "11111 ", price: "1.5$" },
    { name: "11110 ", price: "1.3$" },
    { name: "40000 ", price: "1.3$" }
  ],
  diamonds: [
    { name: "بطاقه ماسيه30يوم💎", price: "19.5$" },
    { name: "بطاقه ماسيه7ايام💎", price: "2$" },
    { name: "2096 💎", price: "19$" },
    { name: "2620 💎", price: "24$" },
    { name: "3144 💎", price: "28$" },
    { name: "5130 💎", price: "46$" },
    { name: "7021 💎", price: "64$" },
    { name: "9956 💎", price: "89$" },
    { name: "20120 💎", price: "178$" },
    { name: "30392 💎", price: "268$" },
    { name: "50304 💎", price: "440$" },
    { name: "63399 💎", price: "555$" }
  ],
  killers: [
    { 
      name: "أسعار القتلى", 
      price: "", 
      description: "الارتحال مفتوح من مملكة 1⤴️1680"
    },
    { name: "200m", price: "4$" },
    { name: "300m", price: "6$" },
    { name: "400m", price: "8$" },
    { name: "1B", price: "14$" }
  ],
  bots: [
    { name: "بوت مزارع", price: "1$" },
    { name: "بوت تطوير/شخصي", price: "1.2$" },
    { name: "بوت بنك جزئي", price: "1.5$" },
    { name: "بوت بنك شامل", price: "2$" }
  ]
};

let products = JSON.parse(localStorage.getItem("lords_products")) || defaultProducts;

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('language-text').textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
  translatePage();
  showCategory(currentCategory);
}

function translatePage() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[currentLanguage][key] || element.textContent;
  });

  document.querySelectorAll('.currency').forEach(element => {
    element.textContent = translations[currentLanguage]['currency'];
  });
}

function showCategory(category) {
  currentCategory = category;
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  
  const filteredProducts = products[category].filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.price && product.price.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  if (filteredProducts.length === 0) {
    list.innerHTML = `<p class="no-products">${translations[currentLanguage]['no-products']}</p>`;
    return;
  }
  
  if (category === 'killers') {
    const headerCard = document.createElement("div");
    headerCard.className = "product-card";
    headerCard.innerHTML = `
      <div class="product-info">
        <h3>${translations[currentLanguage]['killers-prices']}</h3>
        <p style="color:#ff5555">${products.killers[0].description}</p>
      </div>
    `;
    list.appendChild(headerCard);
  }
  
  filteredProducts.forEach((item, index) => {
    if (category === 'killers' && index === 0) return;
    
    const translatedName = translations[currentLanguage][item.name] || item.name;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-info">
        <h3>${translatedName}</h3>
        <p>${item.price}</p>
      </div>
      <button class="add-to-cart" onclick="addToCart('${escapeString(item.name)}', '${escapeString(item.price)}')">
        <i class="fas fa-plus"></i>
      </button>
    `;
    list.appendChild(card);
  });
}

function escapeString(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function addToCart(name, price) {
  // إصلاح المشكلة هنا بإزالة الشرط الذي كان يمنع الإضافة
  cart.push({ name, price });
  showNotification(translations[currentLanguage]['add-success'], 'success');
  updateCartUI();
}

function updateCartUI() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";
  
  let totalUSD = 0;
  
  cart.forEach((item, index) => {
    const priceValue = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
    totalUSD += priceValue;
    
    const translatedName = translations[currentLanguage][item.name] || item.name;
    const li = document.createElement("li");
    li.className = editMode ? "editable" : "";
    li.innerHTML = `
      <span>${translatedName}</span>
      <span class="item-price">${item.price}</span>
      <div class="item-actions">
        <button class="edit-btn" onclick="editItem(${index})"><i class="fas fa-pen"></i></button>
        <button class="remove-btn" onclick="removeItem(${index})"><i class="fas fa-times"></i></button>
      </div>
    `;
    list.appendChild(li);
  });
  
  const totalEGP = totalUSD * exchangeRate;
  document.getElementById("cart-total").innerHTML = `
    ${translations[currentLanguage]['total']}: $${totalUSD.toFixed(2)} | ${totalEGP.toFixed(2)} ${translations[currentLanguage]['currency']}
  `;
  localStorage.setItem("lords_cart", JSON.stringify(cart));
}

function toggleEditMode() {
  editMode = !editMode;
  document.getElementById("edit-cart").innerHTML = `
    <i class="fas fa-${editMode ? 'check' : 'edit'}"></i>
    <span data-translate="${editMode ? 'done' : 'edit'}">${translations[currentLanguage][editMode ? 'done' : 'edit']}</span>
  `;
  updateCartUI();
}

function editItem(index) {
  const newPrice = prompt(translations[currentLanguage]['edit-price-prompt'], cart[index].price);
  if (newPrice && newPrice !== cart[index].price) {
    cart[index].price = newPrice;
    showNotification(translations[currentLanguage]['edit-success'], 'success');
    updateCartUI();
  }
}

function removeItem(index) {
  if (confirm(translations[currentLanguage]['confirm-remove'])) {
    cart.splice(index, 1);
    showNotification(translations[currentLanguage]['remove-success'], 'success');
    updateCartUI();
  }
}

function clearCart() {
  if (confirm(translations[currentLanguage]['confirm-clear'])) {
    cart = [];
    showNotification(translations[currentLanguage]['clear-success'], 'success');
    updateCartUI();
  }
}

function showNotification(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = "show";
  notification.style.backgroundColor = type === 'success' ? 'var(--success-color)' : 
                                   type === 'error' ? 'var(--error-color)' : 
                                   'var(--warning-color)';
  
  setTimeout(() => {
    notification.className = "";
  }, 3000);
}

function copyPaymentInfo(type) {
  let textToCopy = "";
  
  if (type === 'binance') {
    textToCopy = `Binance Pay\nEmail: shamsocastle@gmail.com\nID: 1072224171`;
  } else if (type === 'vodafone') {
    textToCopy = "Vodafone Cash\n01010452090";
  }
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    showNotification(translations[currentLanguage]['copy-success'], 'success');
  }).catch(() => {
    showNotification(translations[currentLanguage]['copy-error'], 'error');
  });
}

function sendOrder() {
  if (cart.length === 0) {
    showNotification(translations[currentLanguage]['empty-cart'], 'error');
    return;
  }
  
  let orderMessage = `*${translations[currentLanguage]['new-order']} Lords Union Store*\n\n`;
  
  let totalUSD = 0;
  cart.forEach(item => {
    const priceValue = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
    totalUSD += priceValue;
    const translatedName = translations[currentLanguage][item.name] || item.name;
    orderMessage += `- ${translatedName}: ${item.price}\n`;
  });
  
  const totalEGP = totalUSD * exchangeRate;
  orderMessage += `\n*${translations[currentLanguage]['total']}:* $${totalUSD.toFixed(2)} | ${totalEGP.toFixed(2)} ${translations[currentLanguage]['currency']}\n\n`;
  orderMessage += `*Payment Methods:*\n1. Binance Pay\nshamsocastle@gmail.com\nID: 1072224171\n2. Vodafone Cash\n01010452090`;
  
  const encodedMessage = encodeURIComponent(orderMessage);
  window.open(`https://wa.me/201010452090?text=${encodedMessage}`, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedCart = localStorage.getItem('lords_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (e) {
      console.error('Error parsing cart data:', e);
      localStorage.removeItem('lords_cart');
    }
  }
  
  showCategory("resources");
  translatePage();
});