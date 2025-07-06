import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Promotions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khuyến mãi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Đang phát triển - Trang khuyến mãi sẽ được cập nhật sớm
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
