// Honda Dealership Website - Main JavaScript

// Initialize mock data
function initializeMockData() {
  if (!localStorage.getItem("honda_products")) {
    localStorage.setItem("honda_products", JSON.stringify(mockProducts));
  }
  if (!localStorage.getItem("honda_users")) {
    localStorage.setItem("honda_users", JSON.stringify(mockUsers));
  }
  if (!localStorage.getItem("honda_promotions")) {
    localStorage.setItem("honda_promotions", JSON.stringify(mockPromotions));
  }
  if (!localStorage.getItem("honda_services")) {
    localStorage.setItem("honda_services", JSON.stringify(mockServices));
  }
  if (!localStorage.getItem("honda_bookings")) {
    localStorage.setItem("honda_bookings", JSON.stringify([]));
  }
}

// Utility functions
function getStorageData(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
}

// Authentication functions
function login(email, password) {
  const users = getStorageData("honda_users", mockUsers);
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const authUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    setStorageData("honda_current_user", authUser);
    return authUser;
  }

  return null;
}

function register(email, password, name) {
  const users = getStorageData("honda_users", mockUsers);

  // Check if user already exists
  if (users.some((u) => u.email === email)) {
    return null;
  }

  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    name,
    role: "user",
  };

  users.push(newUser);
  setStorageData("honda_users", users);

  const authUser = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  };

  setStorageData("honda_current_user", authUser);
  return authUser;
}

function logout() {
  localStorage.removeItem("honda_current_user");
  window.location.href = "index.html";
}

function getCurrentUser() {
  return getStorageData("honda_current_user", null);
}

function isAdmin() {
  const user = getCurrentUser();
  return user?.role === "admin";
}

function isAuthenticated() {
  return getCurrentUser() !== null;
}

// Test drive booking
function bookTestDrive(productName, customerInfo) {
  const bookings = getStorageData("honda_bookings", []);
  const booking = {
    id: Date.now().toString(),
    productName,
    customerName: customerInfo.name,
    customerPhone: customerInfo.phone,
    customerEmail: customerInfo.email,
    preferredDate: customerInfo.date,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  setStorageData("honda_bookings", bookings);

  return booking;
}

function handleTestDrive(productName) {
  // Simple alert for demo
  alert(
    `Cảm ơn bạn đã quan tâm đến ${productName}! Vui lòng liên hệ 0901 234 567 để đặt lịch xem xe.`,
  );
}

// Show alert messages
function showAlert(message, type = "success") {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;

  // Insert at top of main content
  const main = document.querySelector("main") || document.body;
  main.insertBefore(alertDiv, main.firstChild);

  // Auto remove after 5 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validatePhone(phone) {
  const re = /^[0-9]{10,11}$/;
  return re.test(phone.replace(/\s/g, ""));
}

// Loading states
function setLoading(element, loading = true) {
  if (loading) {
    element.classList.add("loading");
    element.disabled = true;
  } else {
    element.classList.remove("loading");
    element.disabled = false;
  }
}

// Smooth scrolling
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Image lazy loading
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => observer.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }
}

// Enhanced Animation on scroll
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");
  const slideLeftElements = document.querySelectorAll(".slide-in-left");
  const slideRightElements = document.querySelectorAll(".slide-in-right");
  const scaleElements = document.querySelectorAll(".scale-in");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay for multiple elements
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform =
                "translateY(0) translateX(0) scale(1)";
              entry.target.classList.add("animate-in");
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Fade in animations
    fadeElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.transitionDelay = `${index * 50}ms`;
      observer.observe(el);
    });

    // Slide left animations
    slideLeftElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-50px)";
      el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    // Slide right animations
    slideRightElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(50px)";
      el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    // Scale animations
    scaleElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "scale(0.8)";
      el.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.transitionDelay = `${index * 150}ms`;
      observer.observe(el);
    });
  }

  // Add parallax effect to hero background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector(".hero-bg");
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Enhanced interactive effects
function initInteractiveEffects() {
  // Add ripple effect to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add hover sound effect simulation (visual feedback)
  document.querySelectorAll(".card, .btn, .nav a").forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.filter = "brightness(1.05)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.filter = "brightness(1)";
    });
  });

  // Add floating animation to feature icons
  document.querySelectorAll(".feature-icon").forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
    icon.classList.add("float");
  });

  // Add typing effect to hero title
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = "";
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }
}

// Initialize website
document.addEventListener("DOMContentLoaded", function () {
  // Initialize mock data
  initializeMockData();

  // Initialize features
  initLazyLoading();
  initScrollAnimations();
  initInteractiveEffects();

  // Add CSS for ripple animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Check if user needs to be redirected after login
  const urlParams = new URLSearchParams(window.location.search);
  const redirect = urlParams.get("redirect");
  if (redirect && isAuthenticated()) {
    window.location.href = redirect;
  }

  // Add smooth page transitions
  window.addEventListener("beforeunload", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";
  });
});

// Handle form submissions
function handleFormSubmit(form, callback) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    try {
      setLoading(submitBtn);
      submitBtn.textContent = "Đang xử lý...";

      const formData = new FormData(form);
      const result = await callback(formData);

      if (result.success) {
        showAlert(result.message, "success");
        if (result.redirect) {
          setTimeout(() => {
            window.location.href = result.redirect;
          }, 1000);
        }
      } else {
        showAlert(result.message, "error");
      }
    } catch (error) {
      showAlert("Đã có lỗi xảy ra, vui lòng thử lại", "error");
    } finally {
      setLoading(submitBtn, false);
      submitBtn.textContent = originalText;
    }
  });
}

// Product filtering
function filterProducts(products, filters) {
  let filtered = [...products];

  if (filters.type && filters.type !== "all") {
    filtered = filtered.filter((product) => product.type === filters.type);
  }

  if (filters.priceRange && filters.priceRange !== "all") {
    switch (filters.priceRange) {
      case "under-30":
        filtered = filtered.filter((product) => product.price < 30000000);
        break;
      case "30-60":
        filtered = filtered.filter(
          (product) => product.price >= 30000000 && product.price < 60000000,
        );
        break;
      case "over-60":
        filtered = filtered.filter((product) => product.price >= 60000000);
        break;
    }
  }

  if (filters.color && filters.color !== "all") {
    filtered = filtered.filter((product) =>
      product.colors.includes(filters.color),
    );
  }

  return filtered;
}

// Search functionality
function searchProducts(products, query) {
  if (!query.trim()) return products;

  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm),
  );
}

// Admin functions
function requireAdmin() {
  if (!isAdmin()) {
    alert("Bạn không có quyền truy cập trang này");
    window.location.href = "login.html";
    return false;
  }
  return true;
}

// Contact form submission
function submitContactForm(formData) {
  return new Promise((resolve) => {
    // Simulate form submission
    setTimeout(() => {
      resolve({
        success: true,
        message:
          "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
      });
    }, 1000);
  });
}

// Service booking
function bookService(serviceId, customerInfo) {
  const bookings = getStorageData("honda_service_bookings", []);
  const booking = {
    id: Date.now().toString(),
    serviceId,
    customerName: customerInfo.name,
    customerPhone: customerInfo.phone,
    customerEmail: customerInfo.email,
    preferredDate: customerInfo.date,
    preferredTime: customerInfo.time,
    notes: customerInfo.notes || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  setStorageData("honda_service_bookings", bookings);

  return booking;
}

// Initialize page-specific functionality
function initPage() {
  const page = window.location.pathname.split("/").pop() || "index.html";

  switch (page) {
    case "index.html":
    case "":
      initHomePage();
      break;
    case "products.html":
      initProductsPage();
      break;
    case "services.html":
      initServicesPage();
      break;
    case "promotions.html":
      initPromotionsPage();
      break;
    case "contact.html":
      initContactPage();
      break;
    case "login.html":
      initLoginPage();
      break;
    case "register.html":
      initRegisterPage();
      break;
    case "admin.html":
      initAdminPage();
      break;
  }
}

// Page initialization functions (to be implemented in individual pages)
function initHomePage() {
  // Home page specific initialization
}

function initProductsPage() {
  // Products page specific initialization
}

function initServicesPage() {
  // Services page specific initialization
}

function initPromotionsPage() {
  // Promotions page specific initialization
}

function initContactPage() {
  // Contact page specific initialization
}

function initLoginPage() {
  // Login page specific initialization
}

function initRegisterPage() {
  // Register page specific initialization
}

function initAdminPage() {
  // Admin page specific initialization
  requireAdmin();
}

// Call initPage when DOM is loaded
document.addEventListener("DOMContentLoaded", initPage);

// Floating buttons and back-to-top functionality
function initFloatingButtons() {
  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    // Show/hide back to top button on scroll
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Floating buttons animations
  const floatingBtns = document.querySelectorAll(".floating-btn");
  floatingBtns.forEach((btn, index) => {
    btn.style.animationDelay = `${index * 0.1}s`;

    // Add click tracking
    btn.addEventListener("click", (e) => {
      const btnType = btn.classList.contains("phone-btn")
        ? "phone"
        : btn.classList.contains("zalo-btn")
          ? "zalo"
          : "facebook";

      // Add ripple effect
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      btn.style.position = "relative";
      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);

      console.log(`${btnType} button clicked`);
    });
  });
}

// Add ripple animation to CSS
if (!document.querySelector("#ripple-styles")) {
  const style = document.createElement("style");
  style.id = "ripple-styles";
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize floating buttons when DOM is loaded
document.addEventListener("DOMContentLoaded", initFloatingButtons);

// Booking form functionality
function initBookingPage() {
  const products = getStorageData("honda_products", mockProducts);

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("bookingDate").min = today;

  // Load products into category dropdown
  const categorySelect = document.getElementById("productCategory");
  const modelSelect = document.getElementById("productModel");
  const colorSelect = document.getElementById("productColor");

  categorySelect.addEventListener("change", function () {
    const category = this.value;
    modelSelect.innerHTML = '<option value="">Chọn dòng xe</option>';
    colorSelect.innerHTML = '<option value="">Chọn màu sắc</option>';

    if (category) {
      const filteredProducts = products.filter((p) => p.category === category);
      filteredProducts.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        modelSelect.appendChild(option);
      });
    }
  });

  modelSelect.addEventListener("change", function () {
    const productId = this.value;
    colorSelect.innerHTML = '<option value="">Chọn màu sắc</option>';

    if (productId) {
      const product = products.find((p) => p.id == productId);
      if (product && product.colors) {
        product.colors.forEach((color) => {
          const option = document.createElement("option");
          option.value = color;
          option.textContent = color;
          colorSelect.appendChild(option);
        });
      }
    }
  });

  // Handle form submission
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const bookingData = {
        id: Date.now(),
        productCategory: formData.get("productCategory"),
        productModel: formData.get("productModel"),
        productColor: formData.get("productColor"),
        bookingDate: formData.get("bookingDate"),
        bookingTime: formData.get("bookingTime"),
        customerName: formData.get("customerName"),
        customerPhone: formData.get("customerPhone"),
        customerEmail: formData.get("customerEmail"),
        customerAddress: formData.get("customerAddress"),
        purpose: formData.get("purpose"),
        notes: formData.get("notes"),
        allowMarketing: formData.get("allowMarketing") === "on",
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      // Save booking
      const bookings = getStorageData("honda_bookings", []);
      bookings.push(bookingData);
      setStorageData("honda_bookings", bookings);

      // Show success message
      showSuccessBooking(bookingData);
    });

  // Initialize FAQ functionality
  initFloatingButtons();
}

function showSuccessBooking(bookingData) {
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;

  const content = document.createElement("div");
  content.style.cssText = `
    background: white;
    padding: 32px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    text-align: center;
  `;

  content.innerHTML = `
    <div style="color: #10B981; font-size: 48px; margin-bottom: 16px;">✓</div>
    <h2 style="color: var(--gray-900); margin-bottom: 16px;">Đặt lịch thành công!</h2>
    <p style="color: var(--gray-600); margin-bottom: 24px; line-height: 1.6;">
      Cảm ơn ${bookingData.customerName}! Chúng tôi đã nhận được yêu cầu đặt lịch xem xe của bạn.
      Nhân viên tư vấn sẽ liên hệ với bạn qua số điện thoại ${bookingData.customerPhone}
      trong vòng 30 phút để xác nhận lịch hẹn.
    </p>
    <div style="background: var(--gray-50); padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: left;">
      <strong>Thông tin đặt lịch:</strong><br>
      <div style="margin: 8px 0;">📅 ${bookingData.bookingDate} - ${bookingData.bookingTime}</div>
      <div style="margin: 8px 0;">🏍️ ${getProductName(bookingData.productModel)}</div>
      <div style="margin: 8px 0;">📞 ${bookingData.customerPhone}</div>
    </div>
    <button onclick="closeModal()" style="
      background: var(--honda-red);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
      margin-right: 12px;
    ">Đóng</button>
    <button onclick="window.location.href='index.html'" style="
      background: transparent;
      color: var(--honda-red);
      border: 1px solid var(--honda-red);
      padding: 12px 24px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    ">Về trang chủ</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  window.closeModal = () => {
    document.body.removeChild(modal);
    document.getElementById("bookingForm").reset();
  };
}

function getProductName(productId) {
  const products = getStorageData("honda_products", mockProducts);
  const product = products.find((p) => p.id == productId);
  return product ? product.name : "Sản phẩm";
}

function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const isActive = button.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.classList.remove("active");
    q.nextElementSibling.classList.remove("active");
  });

  // Toggle current item
  if (!isActive) {
    button.classList.add("active");
    answer.classList.add("active");
  }
}

function showTerms() {
  alert(
    "Điều khoản sử dụng:\n\n1. Khách hàng cần đến đúng giờ đã đặt lịch\n2. Mang theo CMND/CCCD để xác thực\n3. Thông tin cá nhân sẽ được bảo mật\n4. Có thể hủy lịch trước 2 tiếng",
  );
}

function showPrivacy() {
  alert(
    "Chính sách bảo mật:\n\n1. Thông tin chỉ dùng để liên hệ tư vấn\n2. Không chia sẻ với bên thứ ba\n3. Có thể yêu cầu xóa dữ liệu bất kỳ lúc nào\n4. Dữ liệu được mã hóa an toàn",
  );
}

// Enhanced header scroll effect
function initScrollHeader() {
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// Initialize scroll header on all pages
document.addEventListener("DOMContentLoaded", initScrollHeader);

// News page functionality
function initNewsPage() {
  loadFeaturedNews();
  loadAllNews();
  initNewsFilters();
  initNewsSearch();
  initFloatingButtons();
}

function loadFeaturedNews() {
  const featuredNews = window.MockData
    ? window.MockData.getFeaturedNews()
    : mockNews.filter((n) => n.featured);
  const container = document.getElementById("featuredNewsContainer");

  if (!container) return;

  container.innerHTML = featuredNews
    .map(
      (news) => `
    <article class="featured-news-card">
      <img src="${news.image}" alt="${news.title}" loading="lazy">
      <div class="featured-news-content">
        <span class="news-category-tag">${news.category}</span>
        <h3 class="featured-news-title">
          <a href="news-detail.html?slug=${news.slug}" style="text-decoration: none; color: inherit;">
            ${news.title}
          </a>
        </h3>
        <p class="featured-news-excerpt">${news.excerpt}</p>
        <div class="news-meta">
          <span>Bởi ${news.author}</span>
          <span>${formatDate(news.publishedAt)}</span>
          <span>${news.views} lượt xem</span>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
}

function loadAllNews(filter = "all", searchQuery = "") {
  let allNews = window.MockData ? window.MockData.mockNews : mockNews;

  // Apply category filter
  if (filter !== "all") {
    allNews = allNews.filter((news) => news.category === filter);
  }

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    allNews = allNews.filter(
      (news) =>
        news.title.toLowerCase().includes(query) ||
        news.excerpt.toLowerCase().includes(query) ||
        news.content.toLowerCase().includes(query),
    );
  }

  const container = document.getElementById("newsGridContainer");
  if (!container) return;

  container.innerHTML = allNews
    .map(
      (news) => `
    <article class="news-card">
      <img src="${news.image}" alt="${news.title}" loading="lazy">
      <div class="news-card-content">
        <span class="news-category-tag">${news.category}</span>
        <h3 class="news-card-title">
          <a href="news-detail.html?slug=${news.slug}" style="text-decoration: none; color: inherit;">
            ${news.title}
          </a>
        </h3>
        <p class="news-card-excerpt">${news.excerpt}</p>
        <div class="news-meta">
          <span>${formatDate(news.publishedAt)}</span>
          <span>${news.views} lượt xem</span>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
}

function initNewsFilters() {
  const categoryBtns = document.querySelectorAll(".category-btn");
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      categoryBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter news
      const category = btn.dataset.category;
      const searchQuery =
        document.getElementById("newsSearchInput")?.value || "";
      loadAllNews(category, searchQuery);
    });
  });
}

function initNewsSearch() {
  const searchInput = document.getElementById("newsSearchInput");
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const activeCategory =
        document.querySelector(".category-btn.active")?.dataset.category ||
        "all";
      loadAllNews(activeCategory, e.target.value);
    }, 300);
  });
}

// News detail page functionality
function initNewsDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug");

  if (!slug) {
    window.location.href = "news.html";
    return;
  }

  loadNewsDetail(slug);
  loadRelatedNews();
  loadPopularNews();
  initFloatingButtons();
}

function loadNewsDetail(slug) {
  const news = window.MockData
    ? window.MockData.getNewsBySlug(slug)
    : mockNews.find((n) => n.slug === slug);

  if (!news) {
    window.location.href = "news.html";
    return;
  }

  // Update page metadata
  document.getElementById("pageTitle").textContent =
    news.title + " - Head Kim Châu Honda";
  document
    .getElementById("pageDescription")
    .setAttribute("content", news.excerpt);
  document.getElementById("breadcrumbTitle").textContent = news.title;

  // Update article content
  document.getElementById("articleCategory").textContent = news.category;
  document.getElementById("articleDate").textContent = formatDate(
    news.publishedAt,
  );
  document.getElementById("articleViews").textContent =
    news.views + " lượt xem";
  document.getElementById("articleTitle").textContent = news.title;
  document.getElementById("articleAuthor").textContent = news.author;
  document.getElementById("articleImage").src = news.image;
  document.getElementById("articleImage").alt = news.title;
  document.getElementById("articleContent").innerHTML = news.content;

  // Update tags
  const tagsContainer = document.getElementById("articleTags");
  tagsContainer.innerHTML = news.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  // Update view count
  updateNewsViews(news.id);
}

function loadRelatedNews() {
  const allNews = window.MockData ? window.MockData.mockNews : mockNews;
  const relatedNews = allNews.slice(0, 3);
  const container = document.getElementById("relatedNews");

  if (!container) return;

  container.innerHTML = relatedNews
    .map(
      (news) => `
    <a href="news-detail.html?slug=${news.slug}" class="sidebar-news-item">
      <img src="${news.image}" alt="${news.title}" class="sidebar-news-image">
      <div class="sidebar-news-content">
        <h4>${news.title}</h4>
        <div class="sidebar-news-date">${formatDate(news.publishedAt)}</div>
      </div>
    </a>
  `,
    )
    .join("");
}

function loadPopularNews() {
  const allNews = window.MockData ? window.MockData.mockNews : mockNews;
  const popularNews = [...allNews]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);
  const container = document.getElementById("popularNews");

  if (!container) return;

  container.innerHTML = popularNews
    .map(
      (news) => `
    <a href="news-detail.html?slug=${news.slug}" class="sidebar-news-item">
      <img src="${news.image}" alt="${news.title}" class="sidebar-news-image">
      <div class="sidebar-news-content">
        <h4>${news.title}</h4>
        <div class="sidebar-news-date">${formatDate(news.publishedAt)}</div>
      </div>
    </a>
  `,
    )
    .join("");
}

function updateNewsViews(newsId) {
  const allNews = getStorageData("honda_news", mockNews);
  const newsIndex = allNews.findIndex((n) => n.id === newsId);
  if (newsIndex !== -1) {
    allNews[newsIndex].views = (allNews[newsIndex].views || 0) + 1;
    setStorageData("honda_news", allNews);
  }
}

// Parts page functionality
function initPartsPage() {
  loadAllParts();
  initPartsFilters();
  initPartsSearch();
  initPartsCategoryCards();
  initFloatingButtons();
}

function loadAllParts(
  categoryFilter = "",
  stockFilter = "",
  sortBy = "name",
  searchQuery = "",
) {
  let allParts = window.MockData ? window.MockData.mockParts : mockParts;

  // Apply filters
  if (categoryFilter) {
    allParts = allParts.filter((part) => part.category === categoryFilter);
  }

  if (stockFilter === "inStock") {
    allParts = allParts.filter((part) => part.inStock);
  } else if (stockFilter === "outOfStock") {
    allParts = allParts.filter((part) => !part.inStock);
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    allParts = allParts.filter(
      (part) =>
        part.name.toLowerCase().includes(query) ||
        part.description.toLowerCase().includes(query) ||
        part.category.toLowerCase().includes(query),
    );
  }

  // Apply sorting
  allParts.sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const container = document.getElementById("partsGridContainer");
  const resultsCount = document.getElementById("partsResultsCount");

  if (!container) return;

  resultsCount.textContent = `Hiển thị ${allParts.length} sản phẩm`;

  container.innerHTML = allParts
    .map(
      (part) => `
    <div class="part-card">
      <img src="${part.image}" alt="${part.name}" class="part-image" loading="lazy">
      <div class="part-content">
        <span class="part-category">${part.category}</span>
        <h3 class="part-name">${part.name}</h3>
        <p class="part-description">${part.description}</p>
        <div class="part-price">${formatPrice(part.price)}</div>
        <div class="part-stock">
          <span class="stock-indicator ${part.inStock ? "in-stock" : "out-of-stock"}"></span>
          <span>${part.inStock ? `Còn ${part.quantity} sản phẩm` : "Hết hàng"}</span>
        </div>
        <div class="part-compatibility">
          <strong>Tương thích:</strong> ${part.compatibility.join(", ")}
        </div>
        <div class="part-actions">
          <button class="btn btn-primary btn-sm ${!part.inStock ? "disabled" : ""}"
                  onclick="addToCart('${part.id}')"
                  ${!part.inStock ? "disabled" : ""}>
            ${part.inStock ? "Thêm vào giỏ" : "Hết hàng"}
          </button>
          <button class="btn btn-outline btn-sm" onclick="viewPartDetail('${part.id}')">
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initPartsFilters() {
  const categoryFilter = document.getElementById("categoryFilter");
  const stockFilter = document.getElementById("stockFilter");
  const sortFilter = document.getElementById("sortFilter");

  [categoryFilter, stockFilter, sortFilter].forEach((filter) => {
    if (filter) {
      filter.addEventListener("change", applyPartsFilters);
    }
  });
}

function initPartsSearch() {
  const searchInput = document.getElementById("partsSearchInput");
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyPartsFilters, 300);
  });
}

function initPartsCategoryCards() {
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      document.getElementById("categoryFilter").value = category;
      applyPartsFilters();

      // Scroll to results
      document.querySelector(".parts-grid-section").scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function applyPartsFilters() {
  const categoryFilter = document.getElementById("categoryFilter")?.value || "";
  const stockFilter = document.getElementById("stockFilter")?.value || "";
  const sortFilter = document.getElementById("sortFilter")?.value || "name";
  const searchQuery = document.getElementById("partsSearchInput")?.value || "";

  loadAllParts(categoryFilter, stockFilter, sortFilter, searchQuery);
}

function addToCart(partId) {
  alert(
    "Chức năng giỏ hàng đang được phát triển. Vui lòng liên hệ 0901 234 567 để đặt hàng.",
  );
}

function viewPartDetail(partId) {
  const part = window.MockData
    ? window.MockData.getPartById(partId)
    : mockParts.find((p) => p.id === partId);
  if (part) {
    alert(
      `Chi tiết sản phẩm: ${part.name}\n\nMô tả: ${part.description}\n\nGiá: ${formatPrice(part.price)}\n\nTương thích: ${part.compatibility.join(", ")}\n\nLiên hệ: 0901 234 567`,
    );
  }
}

// User dashboard functionality
function initUserDashboard() {
  if (!isAuthenticated()) {
    window.location.href = "login.html";
    return;
  }

  loadUserProfile();
  loadUserStats();
  loadRecentActivity();
  loadUserBookings();
  initDashboardTabs();
  initProfileForm();
  initPasswordForm();
  initNotificationSettings();
  initFloatingButtons();
}

function loadUserProfile() {
  const user = getCurrentUser();
  if (!user) return;

  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;

  // Fill profile form
  document.getElementById("profileName").value = user.name;
  document.getElementById("profileEmail").value = user.email;
  document.getElementById("profilePhone").value = user.phone || "";
  document.getElementById("profileAddress").value = user.address || "";
  document.getElementById("profileBirthdate").value = user.birthdate || "";
}

function loadUserStats() {
  const user = getCurrentUser();
  const bookings = getStorageData("honda_bookings", []).filter(
    (b) => b.customerEmail === user.email,
  );

  document.getElementById("totalBookings").textContent = bookings.length;
  document.getElementById("cartItems").textContent = "0"; // Placeholder
  document.getElementById("memberSince").textContent = new Date(
    user.createdAt || Date.now(),
  ).getFullYear();
}

function loadRecentActivity() {
  const user = getCurrentUser();
  const bookings = getStorageData("honda_bookings", [])
    .filter((b) => b.customerEmail === user.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const container = document.getElementById("recentActivityList");
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; color: var(--gray-600);">Chưa có hoạt động nào</p>';
    return;
  }

  container.innerHTML = bookings
    .map(
      (booking) => `
    <div class="activity-item">
      <div class="activity-icon">📅</div>
      <div class="activity-content">
        <p>Đặt lịch xem ${getProductName(booking.productModel)}</p>
        <div class="activity-time">${formatDate(booking.createdAt)}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

function loadUserBookings(statusFilter = "") {
  const user = getCurrentUser();
  let bookings = getStorageData("honda_bookings", []).filter(
    (b) => b.customerEmail === user.email,
  );

  if (statusFilter) {
    bookings = bookings.filter((b) => b.status === statusFilter);
  }

  bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const container = document.getElementById("bookingsList");
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; color: var(--gray-600); padding: 32px;">Không có lịch xem xe nào</p>';
    return;
  }

  container.innerHTML = bookings
    .map(
      (booking) => `
    <div class="booking-item">
      <div class="booking-header">
        <span class="booking-id">Mã lịch: #${booking.id}</span>
        <span class="booking-status ${booking.status}">${getStatusText(booking.status)}</span>
      </div>
      <div class="booking-details">
        <div><strong>Sản phẩm:</strong> ${getProductName(booking.productModel)}</div>
        <div><strong>Ngày xem:</strong> ${booking.bookingDate}</div>
        <div><strong>Giờ:</strong> ${booking.bookingTime}</div>
        <div><strong>Ngày đặt:</strong> ${formatDate(booking.createdAt)}</div>
        ${booking.notes ? `<div><strong>Ghi chú:</strong> ${booking.notes}</div>` : ""}
      </div>
    </div>
  `,
    )
    .join("");
}

function initDashboardTabs() {
  const navItems = document.querySelectorAll(".nav-item");
  const tabContents = document.querySelectorAll(".tab-content");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.dataset.tab;

      // Update active nav item
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Show corresponding tab content
      tabContents.forEach((tab) => tab.classList.remove("active"));
      document.getElementById(tabId + "Tab")?.classList.add("active");

      // Load tab-specific content
      if (tabId === "bookings") {
        loadUserBookings();
      }
    });
  });

  // Booking status filter
  const statusFilter = document.getElementById("bookingStatusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      loadUserBookings(e.target.value);
    });
  }
}

function initProfileForm() {
  const form = document.getElementById("profileForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const user = getCurrentUser();

    const updatedUser = {
      ...user,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      birthdate: formData.get("birthdate"),
    };

    // Update user in storage
    const users = getStorageData("honda_users", mockUsers);
    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      setStorageData("honda_users", users);
      setStorageData("honda_current_user", updatedUser);

      showAlert("Thông tin đã được cập nhật thành công!", "success");
      loadUserProfile();
    }
  });
}

function initPasswordForm() {
  const form = document.getElementById("passwordForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");

    if (newPassword !== confirmPassword) {
      showAlert("Mật khẩu xác nhận không khớp!", "error");
      return;
    }

    const user = getCurrentUser();
    if (user.password !== currentPassword) {
      showAlert("Mật khẩu hiện tại không đúng!", "error");
      return;
    }

    // Update password
    const users = getStorageData("honda_users", mockUsers);
    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      setStorageData("honda_users", users);

      showAlert("Mật khẩu đã được đổi thành công!", "success");
      form.reset();
    }
  });
}

function initNotificationSettings() {
  // Load current settings
  const settings = getStorageData("user_notification_settings", {
    email: true,
    sms: false,
    promotion: true,
  });

  document.getElementById("emailNotifications").checked = settings.email;
  document.getElementById("smsNotifications").checked = settings.sms;
  document.getElementById("promotionNotifications").checked =
    settings.promotion;

  // Save on change
  ["emailNotifications", "smsNotifications", "promotionNotifications"].forEach(
    (id) => {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.addEventListener("change", () => {
          const newSettings = {
            email: document.getElementById("emailNotifications").checked,
            sms: document.getElementById("smsNotifications").checked,
            promotion: document.getElementById("promotionNotifications")
              .checked,
          };
          setStorageData("user_notification_settings", newSettings);
          showAlert("Cài đặt thông báo đã được lưu!", "success");
        });
      }
    },
  );
}

function deleteAccount() {
  if (
    confirm(
      "Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.",
    )
  ) {
    if (confirm("Xác nhận lần cuối: Tất cả dữ liệu sẽ bị xóa vĩnh viễn!")) {
      const user = getCurrentUser();
      const users = getStorageData("honda_users", mockUsers);
      const updatedUsers = users.filter((u) => u.id !== user.id);

      setStorageData("honda_users", updatedUsers);
      logout();
      showAlert("Tài khoản đã được xóa thành công!", "success");
      window.location.href = "index.html";
    }
  }
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getStatusText(status) {
  const statusMap = {
    pending: "Chờ xác nhận",
    confirmed: "Đã xác nhận",
    completed: "Hoàn thành",
    cancelled: "Đã hủy",
  };
  return statusMap[status] || status;
}

// Social sharing functions
function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`,
    "_blank",
    "width=600,height=400",
  );
}

function shareToZalo() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  window.open(
    `https://zalo.me/share/link?url=${url}&title=${title}`,
    "_blank",
    "width=600,height=400",
  );
}

function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      showAlert("Đã sao chép link vào clipboard!", "success");
    })
    .catch(() => {
      showAlert("Không thể sao chép link!", "error");
    });
}

// Export functions for global use
window.Honda = {
  login,
  register,
  logout,
  getCurrentUser,
  isAdmin,
  isAuthenticated,
  handleTestDrive,
  bookTestDrive,
  bookService,
  submitContactForm,
  handleFormSubmit,
  formatPrice,
  showAlert,
  validateEmail,
  validatePassword,
  validatePhone,
  filterProducts,
  searchProducts,
  getStorageData,
  setStorageData,
  initFloatingButtons,
  initBookingPage,
  toggleFaq,
  showTerms,
  showPrivacy,
  initNewsPage,
  initNewsDetailPage,
  initPartsPage,
  initUserDashboard,
  formatDate,
  shareToFacebook,
  shareToZalo,
  copyLink,
  addToCart,
  viewPartDetail,
  deleteAccount,
  initAdminDashboard,
};

// Modern Admin Dashboard Functionality
function initAdminDashboard() {
  loadDashboardStats();
  loadRecentActivities();
  initDashboardCharts();
  initAdminNavigation();
  loadAllAdminData();

  // Show welcome notification for new Honda products
  showNewProductsNotification();
}

function showNewProductsNotification() {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, var(--honda-red), #c50010);
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10001;
    max-width: 300px;
    animation: slideInRight 0.3s ease;
  `;

  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px;">
      <div style="font-size: 24px;">🏍️</div>
      <div>
        <div style="font-weight: 600; margin-bottom: 4px;">Sản phẩm Honda mới!</div>
        <div style="font-size: 14px; opacity: 0.9;">6 dòng xe Honda đã được thêm vào hệ thống</div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 4px;
      ">&times;</button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function loadDashboardStats() {
  const products = getStorageData("honda_products", mockProducts);
  const bookings = getStorageData("honda_bookings", []);
  const users = getStorageData("honda_users", mockUsers);

  // Animate counters
  animateCounter("totalProducts", products.length);
  animateCounter("totalBookings", bookings.length);
  animateCounter("totalUsers", users.length);

  // Calculate estimated revenue
  const estimatedRevenue = products.reduce(
    (sum, product) => sum + product.price,
    0,
  );
  animateCounter("totalRevenue", estimatedRevenue, true);

  // Update navigation badges
  document.getElementById("productsBadge").textContent = products.length;
  document.getElementById("partsBadge").textContent = mockParts.length;
  document.getElementById("newsBadge").textContent = mockNews.length;
  document.getElementById("promotionsBadge").textContent =
    mockPromotions.length;
  document.getElementById("bookingsBadge").textContent = bookings.length;
  document.getElementById("usersBadge").textContent = users.length;
}

function animateCounter(elementId, targetValue, isCurrency = false) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let currentValue = 0;
  const increment = targetValue / 30;
  const duration = 1000;
  const stepTime = duration / 30;

  const timer = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(timer);
    }

    if (isCurrency) {
      element.textContent = formatPrice(Math.floor(currentValue));
    } else {
      element.textContent = Math.floor(currentValue).toLocaleString();
    }
  }, stepTime);
}

function loadRecentActivities() {
  const bookings = getStorageData("honda_bookings", []);
  const activities = [
    {
      icon: "👤",
      text: "Người dùng mới đăng ký",
      time: "5 phút trước",
      color: "#4facfe",
    },
    {
      icon: "📅",
      text: `${bookings.length} lịch xem xe mới`,
      time: "10 phút trước",
      color: "#f093fb",
    },
    {
      icon: "🏍️",
      text: "Cập nhật sản phẩm Honda Air Blade",
      time: "1 giờ trước",
      color: "#667eea",
    },
    {
      icon: "📊",
      text: "Báo cáo doanh thu tháng",
      time: "2 giờ trước",
      color: "#43e97b",
    },
  ];

  const container = document.getElementById("recentActivitiesList");
  if (!container) return;

  container.innerHTML = activities
    .map(
      (activity) => `
    <div class="activity-item">
      <div class="activity-icon" style="background: ${activity.color};">
        ${activity.icon}
      </div>
      <div class="activity-content">
        <p>${activity.text}</p>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

function initDashboardCharts() {
  // Booking chart
  const bookingCtx = document.getElementById("bookingChart");
  if (bookingCtx) {
    new Chart(bookingCtx, {
      type: "line",
      data: {
        labels: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
        datasets: [
          {
            label: "Lịch xem xe",
            data: [12, 19, 3, 5, 2, 3, 9],
            borderColor: "#e60012",
            backgroundColor: "rgba(230, 0, 18, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Product chart
  const productCtx = document.getElementById("productChart");
  if (productCtx) {
    new Chart(productCtx, {
      type: "doughnut",
      data: {
        labels: ["Air Blade", "SH", "Vision", "Wave", "Winner X", "Khác"],
        datasets: [
          {
            data: [30, 25, 20, 15, 7, 3],
            backgroundColor: [
              "#e60012",
              "#ff6b35",
              "#f7931e",
              "#ffd23f",
              "#06d6a0",
              "#118ab2",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}

function initAdminNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".admin-section");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sectionName = item.dataset.section;

      // Update active nav item
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Show corresponding section
      sections.forEach((section) => section.classList.remove("active"));
      document.getElementById(sectionName + "Section")?.classList.add("active");

      // Load section-specific data
      loadSectionData(sectionName);
    });
  });
}

function loadSectionData(sectionName) {
  switch (sectionName) {
    case "products":
      loadProductsTable();
      break;
    case "parts":
      loadPartsTable();
      break;
    case "news":
      loadNewsTable();
      break;
    case "promotions":
      loadPromotionsTable();
      break;
    case "bookings":
      loadBookingsTable();
      break;
    case "users":
      loadUsersTable();
      break;
    case "contacts":
      loadContactsTable();
      break;
    case "analytics":
      loadAnalyticsCharts();
      break;
  }
}

function loadAllAdminData() {
  loadProductsTable();
  loadPartsTable();
  loadNewsTable();
  loadPromotionsTable();
  loadBookingsTable();
  loadUsersTable();
  loadContactsTable();
}

function loadProductsTable() {
  const products = getStorageData("honda_products", mockProducts);
  const container = document.getElementById("productsTableContainer");

  if (!container) return;

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Loại xe</th>
          <th>Giá bán</th>
          <th>Màu sắc</th>
          <th>Nổi bật</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(
            (product) => `
          <tr>
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;"></td>
            <td><strong>${product.name}</strong></td>
            <td><span class="status-badge ${product.type === "tay-ga" ? "active" : "inactive"}">${product.type}</span></td>
            <td><strong>${formatPrice(product.price)}</strong></td>
            <td>${product.colors.join(", ")}</td>
            <td><span class="status-badge ${product.featured ? "active" : "inactive"}">${product.featured ? "Có" : "Không"}</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editProduct('${product.id}')" title="Chỉnh sửa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deleteProduct('${product.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadPartsTable() {
  const parts = window.MockData ? window.MockData.mockParts : mockParts;
  const container = document.getElementById("partsTableContainer");

  if (!container) return;

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tên phụ tùng</th>
          <th>Danh mục</th>
          <th>Giá bán</th>
          <th>Tồn kho</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${parts
          .map(
            (part) => `
          <tr>
            <td><img src="${part.image}" alt="${part.name}" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;"></td>
            <td><strong>${part.name}</strong></td>
            <td>${part.category}</td>
            <td><strong>${formatPrice(part.price)}</strong></td>
            <td>${part.quantity} sản phẩm</td>
            <td><span class="status-badge ${part.inStock ? "active" : "inactive"}">${part.inStock ? "Còn hàng" : "Hết hàng"}</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editPart('${part.id}')" title="Chỉnh sửa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deletePart('${part.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadNewsTable() {
  const news = window.MockData ? window.MockData.mockNews : mockNews;
  const container = document.getElementById("newsTableContainer");

  if (!container) return;

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tiêu đề</th>
          <th>Danh mục</th>
          <th>Tác giả</th>
          <th>Ngày đăng</th>
          <th>Lượt xem</th>
          <th>Nổi bật</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${news
          .map(
            (article) => `
          <tr>
            <td><img src="${article.image}" alt="${article.title}" style="width: 60px; height: 40px; object-fit: cover; border-radius: 4px;"></td>
            <td>
              <strong style="display: block; margin-bottom: 4px;">${article.title}</strong>
              <small style="color: var(--gray-600);">${article.excerpt.substring(0, 80)}...</small>
            </td>
            <td><span class="status-badge active">${article.category}</span></td>
            <td>${article.author}</td>
            <td>${formatDate(article.publishedAt)}</td>
            <td>${article.views}</td>
            <td><span class="status-badge ${article.featured ? "active" : "inactive"}">${article.featured ? "Có" : "Không"}</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editNews('${article.id}')" title="Chỉnh sửa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deleteNews('${article.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadPromotionsTable() {
  const promotions = getStorageData("honda_promotions", mockPromotions);
  const container = document.getElementById("promotionsTableContainer");

  if (!container) return;

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Tiêu đề</th>
          <th>Mô tả</th>
          <th>Giảm giá</th>
          <th>Ngày bắt đầu</th>
          <th>Ngày kết thúc</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${promotions
          .map(
            (promo) => `
          <tr>
            <td><strong>${promo.title}</strong></td>
            <td>${promo.description.substring(0, 80)}...</td>
            <td><strong style="color: var(--honda-red);">${promo.discount}</strong></td>
            <td>${promo.startDate}</td>
            <td>${promo.endDate}</td>
            <td><span class="status-badge ${promo.active ? "active" : "inactive"}">${promo.active ? "Đang áp dụng" : "Không áp dụng"}</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editPromotion('${promo.id}')" title="Chỉnh sửa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deletePromotion('${promo.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadBookingsTable() {
  const bookings = getStorageData("honda_bookings", []);
  const container = document.getElementById("bookingsTableContainer");

  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px; color: var(--gray-600);">
        <div style="font-size: 48px; margin-bottom: 16px;">📅</div>
        <p>Chưa có lịch xem xe nào</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Mã lịch</th>
          <th>Khách hàng</th>
          <th>Sản phẩm</th>
          <th>Ngày xem</th>
          <th>Giờ</th>
          <th>Trạng thái</th>
          <th>Ngày đặt</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${bookings
          .map(
            (booking) => `
          <tr>
            <td><strong>#${booking.id}</strong></td>
            <td>
              <strong>${booking.customerName}</strong><br>
              <small style="color: var(--gray-600);">${booking.customerPhone}</small>
            </td>
            <td>${getProductName(booking.productModel)}</td>
            <td>${booking.bookingDate}</td>
            <td>${booking.bookingTime}</td>
            <td><span class="status-badge ${booking.status}">${getStatusText(booking.status)}</span></td>
            <td>${formatDate(booking.createdAt)}</td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editBooking('${booking.id}')" title="Cập nhật trạng thái">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deleteBooking('${booking.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadUsersTable() {
  const users = getStorageData("honda_users", mockUsers);
  const container = document.getElementById("usersTableContainer");

  if (!container) return;

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Tên người dùng</th>
          <th>Email</th>
          <th>Vai trò</th>
          <th>Ngày tạo</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${users
          .map(
            (user) => `
          <tr>
            <td><strong>${user.name}</strong></td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.role === "admin" ? "active" : "inactive"}">${user.role}</span></td>
            <td>${formatDate(user.createdAt || Date.now())}</td>
            <td><span class="status-badge active">Hoạt động</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="editUser('${user.id}')" title="Chỉnh sửa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deleteUser('${user.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function loadContactsTable() {
  const contacts = getStorageData("honda_contacts", []);
  const container = document.getElementById("contactsTableContainer");

  if (!container) return;

  if (contacts.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px; color: var(--gray-600);">
        <div style="font-size: 48px; margin-bottom: 16px;">📧</div>
        <p>Chưa có liên hệ nào</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Email</th>
          <th>Chủ đề</th>
          <th>Tin nhắn</th>
          <th>Ngày gửi</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${contacts
          .map(
            (contact) => `
          <tr>
            <td><strong>${contact.name}</strong></td>
            <td>${contact.email}</td>
            <td>${contact.subject}</td>
            <td>${contact.message.substring(0, 50)}...</td>
            <td>${formatDate(contact.createdAt)}</td>
            <td><span class="status-badge pending">Chưa xử lý</span></td>
            <td>
              <div class="table-actions">
                <button class="btn-icon edit" onclick="replyContact('${contact.id}')" title="Trả lời">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </button>
                <button class="btn-icon delete" onclick="deleteContact('${contact.id}')" title="Xóa">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"/>
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

// Modal and CRUD functions
function showAddProductModal() {
  showModal("Thêm sản phẩm mới", getProductForm());
}

function showAddPartModal() {
  showModal("Thêm phụ tùng mới", getPartForm());
}

function showAddNewsModal() {
  showModal("Viết bài tin tức mới", getNewsForm());
}

function showAddPromotionModal() {
  showModal("Tạo khuyến mãi mới", getPromotionForm());
}

function showAddUserModal() {
  showModal("Thêm người dùng mới", getUserForm());
}

function showModal(title, content) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalFormContent").innerHTML = content;
  document.getElementById("contentModal").classList.add("show");
}

function closeModal() {
  document.getElementById("contentModal").classList.remove("show");
}

function getProductForm(product = null) {
  return `
    <div class="form-group">
      <label for="productName">Tên sản phẩm *</label>
      <input type="text" id="productName" name="name" value="${product?.name || ""}" required>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="productType">Loại xe *</label>
        <select id="productType" name="type" required>
          <option value="">Chọn loại xe</option>
          <option value="tay-ga" ${product?.type === "tay-ga" ? "selected" : ""}>Xe tay ga</option>
          <option value="so" ${product?.type === "so" ? "selected" : ""}>Xe số</option>
          <option value="mo-to" ${product?.type === "mo-to" ? "selected" : ""}>Mô tô</option>
        </select>
      </div>
      <div class="form-group">
        <label for="productPrice">Giá bán *</label>
        <input type="number" id="productPrice" name="price" value="${product?.price || ""}" required>
      </div>
    </div>
    <div class="form-group">
      <label for="productColors">Màu sắc (phân cách bởi dấu phẩy)</label>
      <input type="text" id="productColors" name="colors" value="${product?.colors?.join(", ") || ""}" placeholder="Đỏ, Đen, Xanh">
    </div>
    <div class="form-group">
      <label for="productDescription">Mô tả</label>
      <textarea id="productDescription" name="description" rows="3">${product?.description || ""}</textarea>
    </div>
    <div class="form-group checkbox-group">
      <label class="checkbox-label">
        <input type="checkbox" id="productFeatured" name="featured" ${product?.featured ? "checked" : ""}>
        <span class="checkmark"></span>
        Sản phẩm nổi bật
      </label>
    </div>
  `;
}

function refreshDashboard() {
  loadDashboardStats();
  loadRecentActivities();
  showAlert("Dashboard đã được làm mới!", "success");
}

function toggleNotifications() {
  alert("Chức năng thông báo đang được phát triển!");
}

// Placeholder CRUD functions
function editProduct(id) {
  alert("Chỉnh sửa sản phẩm: " + id);
}
function deleteProduct(id) {
  alert("Xóa sản phẩm: " + id);
}
function editPart(id) {
  alert("Chỉnh sửa phụ tùng: " + id);
}
function deletePart(id) {
  alert("Xóa phụ tùng: " + id);
}
function editNews(id) {
  alert("Chỉnh sửa tin tức: " + id);
}
function deleteNews(id) {
  alert("Xóa tin tức: " + id);
}
function editPromotion(id) {
  alert("Chỉnh sửa khuyến mãi: " + id);
}
function deletePromotion(id) {
  alert("Xóa khuyến mãi: " + id);
}
function editBooking(id) {
  alert("Cập nhật lịch xem xe: " + id);
}
function deleteBooking(id) {
  alert("Xóa lịch xem xe: " + id);
}
function editUser(id) {
  alert("Chỉnh sửa người dùng: " + id);
}
function deleteUser(id) {
  alert("Xóa người dùng: " + id);
}
function replyContact(id) {
  alert("Trả lời liên hệ: " + id);
}
function deleteContact(id) {
  alert("Xóa liên hệ: " + id);
}
