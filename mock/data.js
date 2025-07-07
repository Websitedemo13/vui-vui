// Mock data for Honda dealership website

// News articles data
const mockNews = [
  {
    id: "1",
    title: "Honda Air Blade 160 2025 - Nâng cấp mạnh mẽ với công nghệ mới",
    slug: "honda-air-blade-160-2025-nang-cap",
    excerpt:
      "Honda vừa ra mắt phiên bản Air Blade 160 2025 với nhiều cải tiến về động cơ, thiết kế và tính năng an toàn...",
    content: `
      <p>Honda Air Blade 160 2025 đã chính thức ra mắt tại Việt Nam với nhiều nâng cấp đáng chú ý. Đây là bước tiến quan trọng trong chiến lược phát triển sản phẩm của Honda tại thị trường Việt Nam.</p>

      <h3>Thiết kế mới hiện đại</h3>
      <p>Phiên bản 2025 có thiết kế hoàn toàn mới với đèn LED toàn bộ, mặt nạ sắc sảo hơn và màu sắc tươi tắn. Đặc biệt, Honda đã trang bị thêm màn hình LCD hiển thị đa thông tin.</p>

      <h3>Động cơ mạnh mẽ, tiết kiệm</h3>
      <p>Động cơ 159.7cc được tối ưu hóa để đạt hiệu suất cao nhất với mức tiêu thụ nhiên liệu chỉ 1.8L/100km. Công nghệ PGM-FI giúp xe vận hành êm ái và bền bỉ.</p>

      <h3>Tính năng an toàn nâng cao</h3>
      <p>Trang bị hệ thống phanh CBS, khóa thông minh Smart Key và cảnh báo chống trộm. Hệ thống đèn LED tự động điều chỉnh độ sáng theo điều kiện ánh sáng.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "Sản phẩm mới",
    author: "Nguyễn Văn An",
    publishedAt: "2025-01-06T10:00:00Z",
    tags: ["Honda", "Air Blade", "2025", "Tay ga"],
    featured: true,
    views: 1250,
  },
  {
    id: "2",
    title: "Chương trình khuyến mãi tháng 1: Ưu đãi lên đến 5 triệu đồng",
    slug: "khuyen-mai-thang-1-2025",
    excerpt:
      "Nhân dịp đầu năm mới, Honda Head Kim Châu triển khai chương trình khuyến mãi hấp dẫn với nhiều ưu đãi...",
    content: `
      <p>Chào mừng năm mới 2025, Honda Head Kim Châu tung ra chương trình khuyến mãi "Đầu xuân rực rỡ" với nhiều ưu đãi hấp dẫn dành cho khách hàng.</p>

      <h3>Ưu đãi theo dòng xe</h3>
      <ul>
        <li>Honda SH 160i: Giảm 3 triệu đồng + tặng nón bảo hiểm cao cấp</li>
        <li>Honda Air Blade 160: Giảm 2 triệu đồng + tặng áo mưa Honda</li>
        <li>Honda Vision: Giảm 1.5 triệu đồng + tặng bộ phụ kiện</li>
        <li>Honda Wave: Giảm 1 triệu đồng + bảo dưỡng miễn phí 2 lần</li>
      </ul>

      <h3>Chính sách trả góp ưu đãi</h3>
      <p>Lãi suất từ 0% trong 6 tháng đầu, thủ tục nhanh gọn chỉ trong 30 phút. Hỗ trợ trả góp lên đến 80% giá trị xe.</p>

      <h3>Quà tặng đặc biệt</h3>
      <p>Khách hàng mua xe trong tháng 1 sẽ được tham gia quay số trúng thưởng với giải thưởng lên đến 10 triệu đồng.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "Khuyến mãi",
    author: "Trần Thị Bình",
    publishedAt: "2025-01-05T14:30:00Z",
    tags: ["Khuyến mãi", "Ưu đãi", "Trả góp"],
    featured: true,
    views: 980,
  },
  {
    id: "3",
    title: "Bí quyết bảo dưỡng xe Honda để tăng tuổi thọ động cơ",
    slug: "bi-quyet-bao-duong-xe-honda",
    excerpt:
      "Hướng dẫn chi tiết cách bảo dưỡng xe Honda đúng cách để đảm bảo hiệu suất hoạt động tối ưu...",
    content: `
      <p>Bảo dưỡng định kỳ là yếu tố quan trọng giúp xe Honda hoạt động ổn định và bền bỉ theo thời gian. Dưới đây là những lưu ý quan trọng.</p>

      <h3>Lịch bảo dưỡng định kỳ</h3>
      <ul>
        <li>1000 km đầu: Thay dầu và kiểm tra toàn bộ hệ thống</li>
        <li>Mỗi 3000 km: Thay dầu đ��ng cơ và lọc dầu</li>
        <li>Mỗi 6000 km: Kiểm tra và thay lọc gió</li>
        <li>Mỗi 12000 km: Bảo dưỡng tổng thể</li>
      </ul>

      <h3>Những điều cần kiểm tra thường xuyên</h3>
      <p>Áp suất lốp, dầu phanh, đèn chiếu sáng, và hệ thống truyền động cần được kiểm tra định kỳ để đảm bảo an toàn.</p>

      <h3>Sử dụng phụ tùng chính hãng</h3>
      <p>Việc sử dụng phụ tùng chính hãng Honda đảm bảo chất lượng và độ bền của xe, đồng thời không làm mất bảo hành.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "Hướng dẫn",
    author: "Lê Văn Cường",
    publishedAt: "2025-01-04T09:15:00Z",
    tags: ["Bảo dưỡng", "Hướng dẫn", "Phụ tùng"],
    featured: false,
    views: 750,
  },
  {
    id: "4",
    title: "Honda Winner X 2025: Thế hệ mới của dòng côn tay thể thao",
    slug: "honda-winner-x-2025-the-he-moi",
    excerpt:
      "Honda Winner X 2025 được nâng cấp toàn diện về thiết kế, động cơ và công nghệ, hứa hẹn sẽ là sự lựa chọn hàng đầu...",
    content: `
      <p>Honda Winner X 2025 đã được Honda Việt Nam công bố với những nâng cấp đáng kể, tiếp tục khẳng định vị thế trong phân khúc côn tay thể thao.</p>

      <h3>Thiết kế thể thao hơn</h3>
      <p>Với các đường nét sắc sảo, đèn LED hoàn toàn mới và bộ mâm đúc thể thao, Winner X 2025 mang đến vẻ ngoài mạnh mẽ và năng động.</p>

      <h3>Động cơ cải tiến</h3>
      <p>Động cơ 149.2cc được tinh chỉnh để tăng công suất lên 13.6 mã lực, cùng với hệ thống làm mát dung dịch hiệu quả.</p>

      <h3>Công nghệ hiện đại</h3>
      <p>Tích hợp màn hình LCD đa chức năng, khóa thông minh và hệ thống đánh lửa điện tử tiên tiến.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "Sản phẩm mới",
    author: "Phạm Minh Đức",
    publishedAt: "2025-01-03T16:45:00Z",
    tags: ["Honda", "Winner X", "Côn tay", "2025"],
    featured: false,
    views: 1100,
  },
  {
    id: "5",
    title: "Cách chọn mua xe máy phù hợp với nhu cầu sử dụng",
    slug: "cach-chon-mua-xe-may-phu-hop",
    excerpt:
      "Hướng dẫn chi tiết giúp bạn lựa chọn được chiếc xe máy Honda phù hợp nhất với nhu cầu và ngân sách...",
    content: `
      <p>Việc lựa chọn xe máy phù hợp cần xem xét nhiều yếu tố từ nhu cầu sử dụng, ngân sách đến sở thích cá nhân.</p>

      <h3>Xác định nhu cầu sử dụng</h3>
      <ul>
        <li>Di chuyển trong thành phố: Nên chọn xe tay ga nhỏ gọn</li>
        <li>Đi đường dài: Xe số hoặc côn tay có khả năng vận hành ổn định</li>
        <li>Chở hàng: Xe số với yên dài và cốp rộng</li>
      </ul>

      <h3>Cân nhắc về ngân sách</h3>
      <p>Ngoài giá mua xe, cần tính toán chi phí bảo dưỡng, nhiên liệu và bảo hiểm hàng tháng.</p>

      <h3>Tư vấn từ chuyên gia</h3>
      <p>Đội ngũ tư vấn tại Honda Head Kim Châu sẵn sàng hỗ trợ bạn tìm ra lựa chọn tối ưu nhất.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "Tư vấn",
    author: "Nguyễn Thị Mai",
    publishedAt: "2025-01-02T11:20:00Z",
    tags: ["Tư vấn", "Mua xe", "Hướng dẫn"],
    featured: false,
    views: 650,
  },
];

// Parts data
const mockParts = [
  {
    id: "p1",
    name: "Dầu nhớt Honda Ultragold 10W-30",
    category: "Dầu nhớt",
    price: 185000,
    image: "/api/placeholder/300/300",
    description:
      "Dầu nhớt chính hãng Honda với công thức đặc biệt, bảo vệ động cơ tối ưu",
    compatibility: ["Air Blade", "SH", "Vision", "Wave"],
    inStock: true,
    quantity: 50,
  },
  {
    id: "p2",
    name: "Bugi Honda NGK CPR7EA-9",
    category: "Hệ thống đánh lửa",
    price: 45000,
    image: "/api/placeholder/300/300",
    description:
      "Bugi chính hãng cho các dòng xe Honda, đảm bảo đánh lửa ổn định",
    compatibility: ["Air Blade 160", "SH 160"],
    inStock: true,
    quantity: 100,
  },
  {
    id: "p3",
    name: "Lọc gió Honda chính hãng",
    category: "Hệ thống lọc",
    price: 120000,
    image: "/api/placeholder/300/300",
    description: "Lọc gió chất lượng cao, giúp động cơ hoạt động hiệu quả",
    compatibility: ["Vision", "Wave Alpha"],
    inStock: true,
    quantity: 75,
  },
  {
    id: "p4",
    name: "Má phanh Honda chính hãng",
    category: "Hệ thống phanh",
    price: 280000,
    image: "/api/placeholder/300/300",
    description: "Má phanh chính hãng đảm bảo an toàn tuyệt đối khi di chuyển",
    compatibility: ["SH 160", "Air Blade 160"],
    inStock: true,
    quantity: 30,
  },
  {
    id: "p5",
    name: "Ắc quy Honda chính hãng 12V",
    category: "Điện - Ắc quy",
    price: 850000,
    image: "/api/placeholder/300/300",
    description: "Ắc quy chính hãng với tuổi thọ cao, khởi động mạnh mẽ",
    compatibility: ["SH 160", "Air Blade 160", "Winner X"],
    inStock: true,
    quantity: 20,
  },
  {
    id: "p6",
    name: "Lốp Honda IRC 90/80-14",
    category: "Lốp xe",
    price: 450000,
    image: "/api/placeholder/300/300",
    description: "Lốp chính hãng với độ bám đường tốt, chịu mài mòn cao",
    compatibility: ["Air Blade", "Vision"],
    inStock: false,
    quantity: 0,
  },
  {
    id: "p7",
    name: "Kính chiếu hậu Honda chính hãng",
    category: "Phụ kiện",
    price: 150000,
    image: "/api/placeholder/300/300",
    description: "Kính chiếu hậu chính hãng với góc nhìn rộng, an toàn",
    compatibility: ["Tất cả dòng xe Honda"],
    inStock: true,
    quantity: 40,
  },
  {
    id: "p8",
    name: "Đèn pha LED Honda chính hãng",
    category: "Hệ thống chiếu sáng",
    price: 1200000,
    image: "/api/placeholder/300/300",
    description: "Đèn pha LED siêu sáng, tiết kiệm điện, tuổi thọ cao",
    compatibility: ["SH 160", "Air Blade 160"],
    inStock: true,
    quantity: 15,
  },
];

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
      "Dịch vụ tuyệt vời, nhân viên tư vấn nhiệt tình. Xe đư���c giao đúng hẹn và chất lượng hoàn hảo.",
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

// News and Parts helper functions
function getNewsById(id) {
  return mockNews.find((news) => news.id === id);
}

function getNewsBySlug(slug) {
  return mockNews.find((news) => news.slug === slug);
}

function getFeaturedNews() {
  return mockNews.filter((news) => news.featured);
}

function getNewsByCategory(category) {
  return mockNews.filter((news) => news.category === category);
}

function getPartById(id) {
  return mockParts.find((part) => part.id === id);
}

function getPartsByCategory(category) {
  return mockParts.filter((part) => part.category === category);
}

function getPartsInStock() {
  return mockParts.filter((part) => part.inStock);
}

function searchNews(query) {
  const searchTerm = query.toLowerCase();
  return mockNews.filter(
    (news) =>
      news.title.toLowerCase().includes(searchTerm) ||
      news.excerpt.toLowerCase().includes(searchTerm) ||
      news.content.toLowerCase().includes(searchTerm),
  );
}

function searchParts(query) {
  const searchTerm = query.toLowerCase();
  return mockParts.filter(
    (part) =>
      part.name.toLowerCase().includes(searchTerm) ||
      part.description.toLowerCase().includes(searchTerm) ||
      part.category.toLowerCase().includes(searchTerm),
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
    mockNews,
    mockParts,
    getProductById,
    getServiceById,
    getPromotionById,
    getActivePromotions,
    getFeaturedProducts,
    getProductsByType,
    getProductsByPriceRange,
    searchProducts,
    getNewsById,
    getNewsBySlug,
    getFeaturedNews,
    getNewsByCategory,
    getPartById,
    getPartsByCategory,
    getPartsInStock,
    searchNews,
    searchParts,
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
    mockNews,
    mockParts,
    getProductById,
    getServiceById,
    getPromotionById,
    getActivePromotions,
    getFeaturedProducts,
    getProductsByType,
    getProductsByPriceRange,
    searchProducts,
    getNewsById,
    getNewsBySlug,
    getFeaturedNews,
    getNewsByCategory,
    getPartById,
    getPartsByCategory,
    getPartsInStock,
    searchNews,
    searchParts,
  };
}
