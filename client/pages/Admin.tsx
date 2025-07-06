import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isAdmin } from "@/lib/auth";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin()) {
      navigate("/login");
    }
  }, [navigate]);

  if (!isAdmin()) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trang quản trị
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Đang phát triển - Trang quản trị sẽ được cập nhật sớm
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
