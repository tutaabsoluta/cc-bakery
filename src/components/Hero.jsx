export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center">
        {/* Hero 1 */}
        <div className="flex relative">
          <img
            src="ChiefImage.png"
            className="w-[640px] h-[436px] mr-24 z-10"
            alt="Chief Hero"
          />

          <div className="z-10">
            <h3 className="text-4xl font-bold text-primary w-[518px] h-[112px]">
              Oven-fresh baked goods, baked just for you
            </h3>
            <p className="text-2xl w-[493px] h-[165px]">
              We bake delicious treats with the finest ingredients. From warm
              chocolate chip cookies to flaky croissants, every bite is filled
              with warmth and flavor. Come experience the magic of our bakery.
            </p>

            <button className="text-[14.65px] text-primary flex justify-center items-center gap-3 mt-8">
              Read More
              <img src="Arrow.png" alt="" />
            </button>
          </div>
          <div className="absolute right-0 top-0 mr-[-20px] mt-[-180px]">
            <img src="ChiefHero.png" alt="ChiefHero Image" />
          </div>
        </div>

        <div className="container bg-gray-300 w-[576px] h-[3px] mx-auto mb-24 mt-12"></div>

        {/* Hero 2 */}
        <div className="flex relative">
          <div className="z-10">
            <h3 className="text-4xl font-bold text-primary w-[518px] h-[112px]">
              Freshly Baked Delights, Delivered with Care
            </h3>
            <p className="text-2xl w-[493px] h-[165px]">
              We deliver freshly baked goods to your doorstep, ensuring they
              arrive hot and delicious. Our skilled bakers use high-quality
              ingredients to craft each item with care. Enjoy the convenience of
              our fast and reliable delivery service.
            </p>

            <button className="text-[14.65px] text-primary flex justify-center items-center gap-3 mt-8">
              Read More
              <img src="Arrow.png" alt="" />
            </button>
          </div>
          <img
            src="DeliveryImage.png"
            className="w-[640px] h-[436px] z-10"
            alt="Chief Hero"
          />

          <div>
            <img
              src="DeliveryHero.png"
              alt=""
              className="absolute left-0 top-0 mr-[-20px] mt-[-140px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
