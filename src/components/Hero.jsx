export const Hero = () => {
  return (
    <section className="mt-16">
      <div className="container mx-auto md:flex flex-col items-center">
        {/* Hero 1 */}
        <div className="lg:flex lg:relative">
          <img
            src="ChiefImage.png"
            className="lg:w-[640px] lg:h-[436px] lg:mr-24 z-10"
            alt="Chief Hero"
          />

          <div className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-center mt-12 md:mt-0 md:text-left mb-4 md:mb-0 text-2xl md:text-4xl font-bold text-primary md:w-[518px] md:h-[112px]">
              Oven-fresh baked goods, baked just for you
            </h3>
            <p className="px-8 md:px-0 text-2xl md:w-[493px] md:h-[165px]">
              We bake delicious treats with the finest ingredients. From warm
              chocolate chip cookies to flaky croissants, every bite is filled
              with warmth and flavor. Come experience the magic of our bakery.
            </p>

            <button className="mx-auto md:mx-0 mt-12 text-[14.65px] text-primary flex justify-center items-center gap-3 md:mt-8">
              Read More
              <img src="Arrow.png" alt="" />
            </button>
          </div>
          <div className="absolute right-0 top-0 mr-[-20px] mt-[-180px] hidden lg:block">
            <img src="ChiefHero.png" alt="ChiefHero Image" />
          </div>
        </div>

        <div className="container bg-gray-300 w-[576px] h-[3px] mx-auto mb-24 mt-12 hidden md:block"></div>

        {/* Hero 2 */}
        <div className="lg:flex relative">
          <div className="z-10 flex flex-col items-center lg:items-start">
            <h3 className="mt-12 md:mt-0 mb-8 md:mb-0 text-center md:text-left text-2xl md:text-4xl font-bold text-primary md:w-[518px] md:h-[112px]">
              Freshly Baked Delights, Delivered with Care
            </h3>
            <p className="text-2xl md:w-[493px] md:h-[165px] text-center md:text-left px-4 md:px-0 mb-8">
              We deliver freshly baked goods to your doorstep, ensuring they
              arrive hot and delicious. Our skilled bakers use high-quality
              ingredients to craft each item with care. Enjoy the convenience of
              our fast and reliable delivery service.
            </p>

            <button className="mb-12 lg:mb-0 mx-auto md:mx-0 text-[14.65px] text-primary flex justify-center items-center gap-3 mt-8">
              Read More
              <img src="Arrow.png" alt="" />
            </button>
          </div>
          <img
            src="DeliveryImage.png"
            className="lg:w-[640px] lg:h-[436px] z-10"
            alt="Chief Hero"
          />

          <div>
            <img
              src="DeliveryHero.png"
              alt=""
              className="absolute left-0 top-0 mr-[-20px] mt-[-140px] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
