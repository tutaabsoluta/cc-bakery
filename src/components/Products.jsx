import { ProductsCard } from "./ProductsCard";

export const Products = () => {
  return (
    <main className="mb-12 text-center md:text-left px16">
      <div className="md:flex items-center justify-center container mx-auto gap-16 mt-48 px-8 space-y-4 md:space-y-0">
        <h2 className="text-primary text-5xl font-bold">Our Best Sellers...</h2>

        <div className="h-[137px] w-[3px] bg-primary hidden md:block" />

        <p className="text-2xl break-normal md:w-[622px]">
          We proudly present our most beloved creations, universally adored by
          all. The delectable lightness and sweetness of our cakes will leave
          you craving for more. Explore our diverse range of cakes, breads, and
          other delectable offerings.
        </p>
      </div>

      <div>
        <ProductsCard />
      </div>
    </main>
  );
};
