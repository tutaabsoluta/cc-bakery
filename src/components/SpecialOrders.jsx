export const SpecialOrders = () => {
  return (
    <section className="container mx-auto relative">
      <div className="flex items-center justify-center gap-12 mt-24">
        <div className="bg-secondary w-[124px] h-[2px]"></div>
        <h3 className="font-extrabold text-primary text-5xl text-center">
          For Special Orders Contact Us
        </h3>
        <div className="bg-secondary w-[124px] h-[2px]"></div>
        <img
          src="Orders.png"
          alt="Order Cake"
          className="absolute left-0 bottom-11 w-[384px] h-[660px] z-0"
        />
      </div>

      <div className="flex items-center justify-center gap-24">
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

      <p className="text-primary text-xl text-center">
        Special orders must be ordered 3 days before delivery date
      </p>

      <h3 className="text-primary font-bold text-5xl text-center border-t-4 mt-16 pt-8">
        Our Latest Collection!
      </h3>
      <div className="flex justify-center mt-8 relative">
        {" "}
        {/* Añadir relative aquí */}
        <div className="-rotate-90 mr-[-200px]">
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
