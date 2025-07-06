export interface Product {
  id: string;
  name: string;
  type: "tay-ga" | "so";
  price: number;
  colors: string[];
  image: string;
  gallery: string[];
  specs: {
    engine: string;
    power: string;
    fuelCapacity: string;
    weight: string;
  };
  description: string;
  featured: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "user";
  name: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  validUntil: string;
  active: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface TestDriveBooking {
  id: string;
  productId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  preferredDate: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

export const mockProducts: Product[] = [
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
];

export const mockUsers: User[] = [
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

export const mockPromotions: Promotion[] = [
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
];

export const mockServices: Service[] = [
  {
    id: "1",
    name: "Bảo dưỡng định kỳ",
    description: "Kiểm tra và bảo dưỡng toàn diện xe máy Honda",
    price: 300000,
    duration: "2 giờ",
    image: "/api/placeholder/300/200",
  },
  {
    id: "2",
    name: "Thay nhớt máy",
    description: "Thay nhớt máy chính hãng Honda và kiểm tra hệ thống",
    price: 150000,
    duration: "30 phút",
    image: "/api/placeholder/300/200",
  },
  {
    id: "3",
    name: "Vệ sinh carburetor",
    description: "Vệ sinh và điều chỉnh carburetor, tăng hiệu suất động cơ",
    price: 200000,
    duration: "1 giờ",
    image: "/api/placeholder/300/200",
  },
];

// Helper functions for localStorage operations
export const getStorageData = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setStorageData = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Initialize mock data in localStorage
export const initializeMockData = () => {
  if (!localStorage.getItem("honda_products")) {
    setStorageData("honda_products", mockProducts);
  }
  if (!localStorage.getItem("honda_users")) {
    setStorageData("honda_users", mockUsers);
  }
  if (!localStorage.getItem("honda_promotions")) {
    setStorageData("honda_promotions", mockPromotions);
  }
  if (!localStorage.getItem("honda_services")) {
    setStorageData("honda_services", mockServices);
  }
  if (!localStorage.getItem("honda_bookings")) {
    setStorageData("honda_bookings", []);
  }
};
