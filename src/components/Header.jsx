import { Button, SliderCard } from "../components";

export const Header = () => {
  return (
    <header className="container mx-auto md:flex items-center relative mt-40 px-8 2xl:px-0 lg:mt-20">
      <div className="md:w-2/5 space-y-8 md:mb-[-100px]">
        <h1 className="font-bold text-primary text-5xl text-center md:text-left">
          Bring you Happiness through a piece of cake
        </h1>
        <p className="text-2xl text-center md:text-left">
          Reach out to us to place an order or ask about our many menu options.
          We'd love to help you create a memorable dessert experience.
        </p>

        {/* Buttons */}
        <div className="hidd flex justify-center items-center gap-4">
          <Button>{"Order Now"}</Button>
          <button className="bg-white_secondary text-primary px-6 py-3 rounded-lg hover:bg-primary_light duration-300 hover:text-white_secondary border border-primary">
            See all menus
          </button>
        </div>
      </div>

    {/* Image Positioned Relatively */}
      <div className="md:w-3/5 md:relative">
        <img
          className="2xl:md:w-[865px] 2xl:h-[591px] object-cover"
          src="cake.png"
          alt="Chocolate Cake"
        />

        {/* SliderCard Positioned Absolutely */}
        <div className="md:absolute bottom-0 right-0 mr-8">
          <SliderCard />
        </div>
      </div>
    </header>
  );
};
