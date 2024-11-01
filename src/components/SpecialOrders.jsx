export const SpecialOrders = () => {
  return (
    <section className="container mx-auto relative">
      <div className="flex items-center justify-center gap-12 mt-24 px-8 lg:px-0">
        <div className="bg-secondary w-[124px] h-[2px]"></div>
        <h3 className="font-extrabold text-primary text-5xl text-center">
          For Special Orders Contact Us
        </h3>
        <div className="bg-secondary w-[124px] h-[2px]"></div>

      </div>

      <div className="md:flex items-center justify-center gap-24">
        <div className="flex items-center justify-center">
          <div>
            <img src="Phone.png" alt="Phone Icon" className="h-[85px]" />
          </div>
          <div>
            <p className="text-xl">+91 0000000000</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div>
            <img src="Mail.png" alt="Mail Icon" className="h-[48px] w-[48px]" />
          </div>
          <div>
            <p className="text-xl">crustncrumbs@bakery.co</p>
          </div>
        </div>
      </div>

      <p className="text-primary text-xl text-center mt-12 md:mt-0 mx-4">
        Special orders must be ordered 3 days before delivery date
      </p>

      <h3 className="text-primary font-bold text-5xl text-center border-t-4 mt-16 pt-8">
        Our Latest Collection!
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center lg:flex justify-center mt-8">
        <div className="-rotate-90 mr-[-200px]  hidden lg:block">
          <p className="uppercase font-bold text-6xl">Breads</p>
        </div>

        {[
          "Collection1.png",
          "Collection2.png",
          "Collection3.png",
          "Collection4.png",
          "Collection5.png",
          "Collection6.png",
        ].map((element, index) => (
          <img
            key={index} 
            src={element}
            alt="Collection Image"
            className="relative z-10" 
          />
        ))}
      </div>
    </section>
  );
};
