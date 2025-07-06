import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Award } from "lucide-react";

export default function HeroSection() {
  const handleTestDriveClick = () => {
    // In a real app, this would open a modal or navigate to booking form
    alert(
      "Cảm ơn bạn đã quan tâm! Vui lòng liên hệ 0901 234 567 để đặt lịch lái thử.",
    );
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[600px] md:h-[700px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/api/placeholder/1200/700')`,
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Khám phá thế giới
              <span className="text-primary block">Honda</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Đại lý Honda uy tín với hàng trăm mẫu xe chính hãng. Trải nghiệm
              công nghệ tiên tiến và dịch vụ chuyên nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleTestDriveClick}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                Đặt lịch lái thử
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
              <Link to="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-gray-900"
                >
                  Xem sản phẩm
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chính hãng 100%</h3>
              <p className="text-gray-600">
                Tất cả sản phẩm Honda đều được nhập khẩu chính hãng với đầy đủ
                giấy tờ và bảo hành.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dịch vụ chuyên nghiệp
              </h3>
              <p className="text-gray-600">
                Đội ngũ kỹ thuật viên được đào tạo chuyên nghiệp, sử dụng phụ
                tùng chính hãng Honda.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hỗ trợ trả góp</h3>
              <p className="text-gray-600">
                Chương trình trả góp linh hoạt, thủ tục nhanh chóng, lãi suất ưu
                đãi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
