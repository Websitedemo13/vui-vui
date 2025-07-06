import {
  Facebook,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Head Kim Châu</h3>
                <p className="text-gray-400 text-sm">Đại lý Honda uy tín</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  123 Đường Nguyễn Văn Linh, Quận 7, TP.HCM
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">0901 234 567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">
                  info@headkimchau.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="/promotions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Khuyến mãi
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Bán xe Honda chính hãng</span>
              </li>
              <li>
                <span className="text-gray-300">Bảo dưỡng định kỳ</span>
              </li>
              <li>
                <span className="text-gray-300">Sửa chữa xe máy</span>
              </li>
              <li>
                <span className="text-gray-300">Phụ tụng chính hãng</span>
              </li>
              <li>
                <span className="text-gray-300">Hỗ trợ trả góp</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Kết nối với chúng tôi
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Theo dõi chúng tôi để cập nhật tin tức và khuyến mãi mới nhất!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Head Kim Châu | Phát triển bởi Phòng CNNT (VSM)
          </p>
        </div>
      </div>
    </footer>
  );
}
