import { Button, SliderCard } from "../components";

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center relative">
      <div className="w-2/5 space-y-8 mb-[-100px]">
        <h1 className="font-bold text-primary text-5xl">
          Bring you Happiness through a piece of cake
        </h1>
        <p className="text-2xl">
          Reach out to us to place an order or ask about our many menu options.
          We'd love to help you create a memorable dessert experience.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button>{"Order Now"}</Button>
          <button className="bg-white_secondary text-primary px-6 py-3 rounded-lg hover:bg-primary_light duration-300 hover:text-white_secondary border border-primary">
            See all menus
          </button>
        </div>
      </div>

    {/* Image Positioned Relatively */}
      <div className="w-3/5 relative">
        <img
          className="w-[865px] h-[591px] object-cover"
          src="cake.png"
          alt="Chocolate Cake"
        />

        {/* SliderCard Positioned Absolutely */}
        <div className="absolute bottom-0 right-0 mr-8">
          <SliderCard />
        </div>
      </div>
    </header>
  );
};
