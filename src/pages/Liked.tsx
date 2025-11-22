import { FC, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import { OneSeparateProduct } from "../interfaces/product.interface";

const Liked: FC = () => {
  // TODO: Replace with actual liked products from state/API
  const [likedProducts, setLikedProducts] = useState<OneSeparateProduct[]>([
    // Mock data - replace with actual data
    {
      id: "1",
      name_tm: "Product Title 1",
      name_en: "Product Title 1",
      name_ru: "Product Title 1",
      description_tm: "Product description",
      description_en: "Product description",
      description_ru: "Product description",
      price: "500",
      currency: "TMT",
      barcode: "123456",
      sku: "SKU001",
      stockQuantity: 10,
      minOrderQuantity: 1,
      salesLimitQuantity: 5,
      status: "ACTIVE",
      images: [],
      categories: [],
      store: null,
    },
    {
      id: "2",
      name_tm: "Product Title 2",
      name_en: "Product Title 2",
      name_ru: "Product Title 2",
      description_tm: "Product description",
      description_en: "Product description",
      description_ru: "Product description",
      price: "750",
      currency: "TMT",
      barcode: "123457",
      sku: "SKU002",
      stockQuantity: 15,
      minOrderQuantity: 1,
      salesLimitQuantity: 5,
      status: "ACTIVE",
      images: [],
      categories: [],
      store: null,
    },
  ]);

  const handleRemoveFromLiked = (productId: string) => {
    setLikedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="w-[90%] mx-auto mb-[75px] lg:mb-[0px]">
      <div className="mt-12 font-geo font-light">
        <span className="text-gray">Home</span> /{" "}
        <span className="text-gray">Category</span> /{" "}
        <span className="text-gray">Halananlar</span>
      </div>

      <div className="flex items-center gap-3 mt-4 mb-6">
        <div
          className="text-[32px] md:text-[48px] font-bold font-geo"
          style={{ color: "var(--color-text-primary)" }}
        >
          Halananlar
        </div>
        <IoMdHeart className="text-[32px] md:text-[48px] text-red" />
      </div>

      {likedProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="text-[80px] mb-4 text-gray">
            <IoMdHeart />
          </div>
          <div
            className="text-[24px] font-bold font-geo mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            Halaýan harytlar ýok
          </div>
          <div
            className="text-[16px] font-main text-center max-w-md"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Siz halaýan harytlaryňyzy bu ýerde görersiňiz. Harytlara gönükmek
            üçin ýürek belgisini basyň.
          </div>
        </div>
      ) : (
        <>
          <div
            className="text-[18px] font-main mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Jemi {likedProducts.length} haryt
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 xl:grid-cols-4 gap-4">
            {likedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isService={false}
                isLiked={true}
                onFavoriteToggle={handleRemoveFromLiked}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Liked;
