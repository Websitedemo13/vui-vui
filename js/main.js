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
};
