import { FC } from "react";
import { IoMdHeart } from "react-icons/io";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { RootState } from "../store";

const Liked: FC = () => {
  // Liked products state from Redux
  const likedProducts = useSelector((state: RootState) => state.liked.items);

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
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Liked;
