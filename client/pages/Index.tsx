import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Product,
  Promotion,
  mockProducts,
  mockPromotions,
  initializeMockData,
} from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Star, Clock, Users } from "lucide-react";

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentPromotions, setCurrentPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    initializeMockData();
    setFeaturedProducts(mockProducts.filter((product) => product.featured));
    setCurrentPromotions(mockPromotions.filter((promo) => promo.active));
  }, []);

  const handleTestDrive = (productName: string) => {
    alert(
      `Cảm ơn bạn đã quan tâm đến ${productName}! Vui lòng liên hệ 0901 234 567 để đặt lịch lái thử.`,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những mẫu xe Honda được khách hàng yêu thích nhất với
              thiết kế hiện đại và công nghệ tiên tiến.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Nổi bật
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <Badge variant="outline" className="text-sm">
                      {product.type === "tay-ga" ? "Tay ga" : "Số"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    <Button
                      onClick={() => handleTestDrive(product.name)}
                      size="sm"
                      className="flex-1"
                    >
                      Lái thử
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button variant="outline" size="sm">
                        Chi tiết
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="px-8">
                Xem tất cả sản phẩm
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      {currentPromotions.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Khuyến mãi đang diễn ra
              </h2>
              <p className="text-lg text-gray-600">
                Đừng bỏ lỡ cơ hội sở hữu xe Honda với giá ưu đãi nhất!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {currentPromotions.map((promotion) => (
                <Card
                  key={promotion.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        Khuyến mãi
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{promotion.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {promotion.discount}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          Đến {promotion.validUntil}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{promotion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/promotions">
                <Button size="lg" className="px-8">
                  Xem tất cả khuyến mãi
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-lg text-gray-600">
              Những phản hồi tích cực từ khách hàng đã sử dụng dịch vụ của chúng
              tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Dịch vụ tuyệt vời, nhân viên tư vấn nhiệt tình. Xe được giao
                  đúng hẹn và chất lượng hoàn hảo."
                </p>
                <div>
                  <p className="font-semibold">Nguyễn Văn A</p>
                  <p className="text-sm text-gray-500">
                    Khách hàng mua Honda SH
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Thủ tục trả góp nhanh gọn, lãi suất ưu đãi. Rất hài lòng với
                  dịch vụ hậu mãi."
                </p>
                <div>
                  <p className="font-semibold">Trần Thị B</p>
                  <p className="text-sm text-gray-500">
                    Khách hàng mua Honda Air Blade
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Đại lý uy tín, xe chính hãng, giá cả hợp lý. Đã giới thiệu
                  cho nhiều bạn bè."
                </p>
                <div>
                  <p className="font-semibold">Lê Văn C</p>
                  <p className="text-sm text-gray-500">
                    Khách hàng mua Honda Vision
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng sở hữu xe Honda mơ ước?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Liên hệ ngay với chúng tôi để được tư vấn và hỗ trợ tốt nhất!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                alert(
                  "Cảm ơn bạn! Vui lòng liên hệ 0901 234 567 để đặt lịch lái thử.",
                )
              }
              className="px-8"
            >
              Đặt lịch lái thử ngay
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white border-white hover:bg-white hover:text-primary"
              >
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
