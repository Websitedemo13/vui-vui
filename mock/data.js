// Mock data for Honda dealership website

const mockProducts = [
  {
    id: "1",
    name: "Honda Air Blade 160",
    type: "tay-ga",
    price: 58000000,
    colors: ["Đỏ", "Đen", "Xanh", "Trắng"],
    image: "/api/placeholder/400/300",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
    ],
    specs: {
      engine: "159.7cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch",
      power: "11.0 kW (14.9 PS) tại 8,500 rpm",
      fuelCapacity: "4.2 lít",
      weight: "117 kg",
    },
    description:
      "Honda Air Blade 160 với thiết kế thể thao, động cơ mạnh mẽ và tiết kiệm nhiên liệu.",
    featured: true,
  },
  {
    id: "2",
    name: "Honda Vision",
    type: "tay-ga",
    price: 32000000,
    colors: ["Đỏ", "Đen", "Xám"],
    image: "/api/placeholder/400/300",
    gallery: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    specs: {
      engine: "109.2cc, 4 kỳ, 1 xy-lanh, làm mát bằng gió",
      power: "6.6 kW (8.98 PS) tại 7,500 rpm",
      fuelCapacity: "3.7 lít",
      weight: "95 kg",
    },
    description:
      "Honda Vision thiết kế nhỏ gọn, phù hợp cho di chuyển trong thành phố.",
    featured: true,
  },
  {
    id: "3",
    name: "Honda SH 160i",
    type: "tay-ga",
    price: 86000000,
    colors: ["Đen", "Trắng", "Xám"],
    image: "/api/placeholder/400/300",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
    ],
    specs: {
      engine: "156.9cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch",
      power: "11.0 kW (14.9 PS) tại 8,500 rpm",
      fuelCapacity: "7.5 lít",
      weight: "133 kg",
    },
    description:
      "Honda SH 160i cao cấp với thiết kế sang trọng và công nghệ hiện đại.",
    featured: true,
  },
  {
    id: "4",
    name: "Honda Wave Alpha 110",
    type: "so",
    price: 18500000,
    colors: ["Đỏ", "Đen", "Xanh"],
    image: "/api/placeholder/400/300",
    gallery: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    specs: {
      engine: "109.1cc, 4 kỳ, 1 xy-lanh, làm mát bằng gió",
      power: "6.6 kW (8.98 PS) tại 7,500 rpm",
      fuelCapacity: "3.5 lít",
      weight: "89 kg",
    },
    description:
      "Honda Wave Alpha 110 tiết kiệm nhiên liệu, bền bỉ cho mọi cuộc hành trình.",
    featured: false,
  },
  {
    id: "5",
    name: "Honda Future 125 FI",
    type: "so",
    price: 32500000,
    colors: ["Đỏ", "Đen", "Xanh", "Trắng"],
    image: "/api/placeholder/400/300",
    gallery: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    specs: {
      engine: "124.9cc, 4 kỳ, 1 xy-lanh, làm mát bằng gió",
      power: "7.8 kW (10.6 PS) tại 7,500 rpm",
      fuelCapacity: "4.5 lít",
      weight: "104 kg",
    },
    description:
      "Honda Future 125 FI với công nghệ phun xăng điện tử hiện đại.",
    featured: false,
  },
  {
    id: "6",
    name: "Honda Lead 125",
    type: "tay-ga",
    price: 39000000,
    colors: ["Đỏ", "Đen", "Trắng", "Xanh"],
    image: "/api/placeholder/400/300",
    gallery: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    specs: {
      engine: "124.9cc, 4 kỳ, 1 xy-lanh, làm mát bằng gió",
      power: "8.8 kW (11.9 PS) tại 7,500 rpm",
      fuelCapacity: "5.5 lít",
      weight: "112 kg",
    },
    description:
      "Honda Lead 125 thiết kế thời trang với tính năng thông minh cao.",
    featured: false,
  },
];

const mockUsers = [
  {
    id: "1",
    email: "admin@headkimchau.com",
    password: "admin123",
    role: "admin",
    name: "Quản trị viên",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    role: "user",
    name: "Nguyễn Văn A",
  },
];

const mockPromotions = [
  {
    id: "1",
    title: "Giảm 5 triệu khi mua Honda SH",
    description:
      "Chương trình khuyến mãi đặc biệt cho Honda SH 160i, giảm ngay 5 triệu đồng.",
    image: "/api/placeholder/400/200",
    discount: "5,000,000 VNĐ",
    validUntil: "2024-12-31",
    active: true,
  },
  {
    id: "2",
    title: "Tặng bảo hiểm khi mua Air Blade",
    description:
      "Mua Honda Air Blade 160 được tặng bảo hiểm xe máy trị giá 2 triệu.",
    image: "/api/placeholder/400/200",
    discount: "Bảo hiểm 2 triệu",
    validUntil: "2024-11-30",
    active: true,
  },
  {
    id: "3",
    title: "Ưu đãi đặc biệt dịp Tết",
    description: "Giảm giá đến 3 triệu cho tất cả dòng xe Honda trong dịp Tết.",
    image: "/api/placeholder/400/200",
    discount: "Đến 3,000,000 VNĐ",
    validUntil: "2024-02-29",
    active: true,
  },
  {
    id: "4",
    title: "Trả góp 0% lãi suất",
    description:
      "Chương trình trả góp 0% lãi suất cho tất cả khách hàng mua xe Honda.",
    image: "/api/placeholder/400/200",
    discount: "0% lãi suất",
    validUntil: "2024-06-30",
    active: true,
  },
];

const mockServices = [
  {
    id: "1",
    name: "Bảo dưỡng định kỳ",
    description: "Kiểm tra và bảo dưỡng toàn diện xe máy Honda",
    price: 300000,
    duration: "2 giờ",
    image: "/api/placeholder/300/200",
    includes: [
      "Thay nhớt máy",
      "Kiểm tra hệ thống phanh",
      "Điều chỉnh bộ chế hòa khí",
      "Kiểm tra lốp xe",
      "Vệ sinh xe máy",
    ],
  },
  {
    id: "2",
    name: "Thay nhớt máy",
    description: "Thay nhớt máy chính hãng Honda và kiểm tra hệ thống",
    price: 150000,
    duration: "30 phút",
    image: "/api/placeholder/300/200",
    includes: [
      "Nhớt máy Honda chính hãng",
      "Lọc nhớt mới",
      "Kiểm tra mức nhớt",
      "Vệ sinh khoang máy",
    ],
  },
  {
    id: "3",
    name: "Vệ sinh carburetor",
    description: "Vệ sinh và điều chỉnh carburetor, tăng hiệu suất động cơ",
    price: 200000,
    duration: "1 giờ",
    image: "/api/placeholder/300/200",
    includes: [
      "Tháo rời carburetor",
      "Vệ sinh chi tiết",
      "Điều chỉnh tỷ lệ xăng/gió",
      "Kiểm tra hoạt động",
    ],
  },
  {
    id: "4",
    name: "Sửa chữa phanh",
    description: "Kiểm tra và sửa chữa hệ thống phanh đảm bảo an toàn",
    price: 250000,
    duration: "1.5 giờ",
    image: "/api/placeholder/300/200",
    includes: [
      "Kiểm tra ma sát phanh",
      "Thay dầu phanh",
      "Điều chỉnh cáp phanh",
      "Kiểm tra đĩa phanh",
    ],
  },
  {
    id: "5",
    name: "Thay lốp xe",
    description: "Thay lốp xe chính hãng với đầy đủ dịch vụ chuyên nghiệp",
    price: 400000,
    duration: "45 ph��t",
    image: "/api/placeholder/300/200",
    includes: [
      "Lốp xe chính hãng",
      "Cân bằng bánh xe",
      "Kiểm tra áp suất",
      "Bảo hành lốp 6 tháng",
    ],
  },
  {
    id: "6",
    name: "Kiểm tra tổng quát",
    description: "Kiểm tra toàn diện tình trạng xe máy",
    price: 100000,
    duration: "1 giờ",
    image: "/api/placeholder/300/200",
    includes: [
      "Kiểm tra động cơ",
      "Hệ thống điện",
      "Phanh và lái",
      "Báo cáo chi tiết",
    ],
  },
];

const mockTestimonials = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    role: "Khách hàng mua Honda SH",
    rating: 5,
    comment:
      "Dịch vụ tuyệt vời, nhân viên tư vấn nhiệt tình. Xe được giao đúng hẹn và chất lượng hoàn hảo.",
    avatar: "/api/placeholder/50/50",
  },
  {
    id: "2",
    name: "Trần Thị B",
    role: "Khách hàng mua Honda Air Blade",
    rating: 5,
    comment:
      "Thủ tục trả góp nhanh gọn, lãi suất ưu đãi. Rất hài lòng với dịch vụ hậu mãi.",
    avatar: "/api/placeholder/50/50",
  },
  {
    id: "3",
    name: "Lê Văn C",
    role: "Khách hàng mua Honda Vision",
    rating: 5,
    comment:
      "Đại lý uy tín, xe chính hãng, giá cả hợp lý. Đã giới thiệu cho nhiều bạn bè.",
    avatar: "/api/placeholder/50/50",
  },
  {
    id: "4",
    name: "Phạm Thị D",
    role: "Khách hàng sử dụng dịch vụ",
    rating: 4,
    comment:
      "Dịch vụ bảo dưỡng chuyên nghiệp, giá cả hợp lý. Nhân viên kỹ thuật có tay nghề cao.",
    avatar: "/api/placeholder/50/50",
  },
];

const mockBlogPosts = [
  {
    id: "1",
    title: "5 Lý do nên chọn Honda Air Blade 160",
    excerpt:
      "Khám phá những ưu điểm vượt trội của Honda Air Blade 160 - mẫu xe tay ga hot nhất hiện nay.",
    content: "Nội dung chi tiết về Honda Air Blade 160...",
    image: "/api/placeholder/400/250",
    author: "Head Kim Châu",
    publishDate: "2024-01-15",
    category: "Sản phẩm",
    tags: ["Honda", "Air Blade", "Tay ga"],
  },
  {
    id: "2",
    title: "Hướng dẫn bảo dưỡng xe máy Honda đúng cách",
    excerpt:
      "Những bí quyết giúp xe Honda của bạn luôn hoạt động bền bỉ và hiệu quả.",
    content: "Nội dung chi tiết về bảo dưỡng xe Honda...",
    image: "/api/placeholder/400/250",
    author: "Head Kim Châu",
    publishDate: "2024-01-10",
    category: "Bảo dưỡng",
    tags: ["Bảo dưỡng", "Kỹ thuật", "Honda"],
  },
  {
    id: "3",
    title: "So sánh Honda SH vs Honda Lead - Chọn xe nào phù hợp?",
    excerpt:
      "Phân tích chi tiết ưu nhược điểm của Honda SH và Honda Lead để giúp bạn lựa chọn.",
    content: "Nội dung so sánh Honda SH vs Honda Lead...",
    image: "/api/placeholder/400/250",
    author: "Head Kim Châu",
    publishDate: "2024-01-05",
    category: "So sánh",
    tags: ["So sánh", "Honda SH", "Honda Lead"],
  },
];

// Utility functions for mock data
function getProductById(id) {
  return mockProducts.find((product) => product.id === id);
}

function getServiceById(id) {
  return mockServices.find((service) => service.id === id);
}

function getPromotionById(id) {
  return mockPromotions.find((promotion) => promotion.id === id);
}

function getActivePromotions() {
  return mockPromotions.filter((promotion) => promotion.active);
}

function getFeaturedProducts() {
  return mockProducts.filter((product) => product.featured);
}

function getProductsByType(type) {
  return mockProducts.filter((product) => product.type === type);
}

function getProductsByPriceRange(min, max) {
  return mockProducts.filter(
    (product) => product.price >= min && product.price <= max,
  );
}

function searchProducts(query) {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm),
  );
}

// Export all mock data and functions
if (typeof module !== "undefined" && module.exports) {
  // Node.js environment
  module.exports = {
    mockProducts,
    mockUsers,
    mockPromotions,
    mockServices,
    mockTestimonials,
    mockBlogPosts,
    getProductById,
    getServiceById,
    getPromotionById,
    getActivePromotions,
    getFeaturedProducts,
    getProductsByType,
    getProductsByPriceRange,
    searchProducts,
  };
} else {
  // Browser environment
  window.MockData = {
    mockProducts,
    mockUsers,
    mockPromotions,
    mockServices,
    mockTestimonials,
    mockBlogPosts,
    getProductById,
    getServiceById,
    getPromotionById,
    getActivePromotions,
    getFeaturedProducts,
    getProductsByType,
    getProductsByPriceRange,
    searchProducts,
  };
}
