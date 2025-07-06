import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, mockProducts, initializeMockData } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { Filter, Grid, List } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [colorFilter, setColorFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    initializeMockData();
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by type
    if (typeFilter !== "all") {
      filtered = filtered.filter((product) => product.type === typeFilter);
    }

    // Filter by price range
    if (priceFilter !== "all") {
      switch (priceFilter) {
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

    // Filter by color
    if (colorFilter !== "all") {
      filtered = filtered.filter((product) =>
        product.colors.includes(colorFilter),
      );
    }

    setFilteredProducts(filtered);
  }, [products, typeFilter, priceFilter, colorFilter]);

  const handleTestDrive = (productName: string) => {
    alert(
      `Cảm ơn bạn đã quan tâm đến ${productName}! Vui lòng liên hệ 0901 234 567 để đặt lịch lái thử.`,
    );
  };

  const allColors = Array.from(
    new Set(products.flatMap((product) => product.colors)),
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm Honda
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập xe máy Honda đa dạng với thiết kế hiện đại và
              công nghệ tiên tiến.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Bộ lọc sản phẩm</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Loại xe
                </label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="tay-ga">Tay ga</SelectItem>
                    <SelectItem value="so">Số</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Khoảng giá
                </label>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khoảng giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    <SelectItem value="under-30">Dưới 30 triệu</SelectItem>
                    <SelectItem value="30-60">30 - 60 triệu</SelectItem>
                    <SelectItem value="over-60">Trên 60 triệu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Màu sắc
                </label>
                <Select value={colorFilter} onValueChange={setColorFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn màu sắc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả</SelectItem>
                    {allColors.map((color) => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Hiển thị
                </label>
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">
              Hiển thị {filteredProducts.length} sản phẩm
            </p>
          </div>

          {/* Products Grid/List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">
                Không tìm thấy sản phẩm phù hợp với bộ lọc của bạn.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setTypeFilter("all");
                  setPriceFilter("all");
                  setColorFilter("all");
                }}
                className="mt-4"
              >
                Xóa bộ lọc
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list" ? "w-64 flex-shrink-0" : ""
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-48"
                      }`}
                    />
                    {product.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary">
                        Nổi bật
                      </Badge>
                    )}
                  </div>
                  <div className={viewMode === "list" ? "flex-1" : ""}>
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
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.colors.map((color) => (
                          <Badge
                            key={color}
                            variant="secondary"
                            className="text-xs"
                          >
                            {color}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
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
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
