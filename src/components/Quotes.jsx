export const Quotes = () => {
  return (
    <section className="bg-gradient-to-r from-orange-200 to-secondary container md:h-[781px] mx-auto md:flex items-center relative justify-center mt-12">
      <img
        src="Quotes.png"
        alt="Quote Image"
        className="absolute top-0 mt-[-10px] w-[570px] z-10 hidden md:block"
      />

      <img 
        src="Rectangle1.png" 
        alt="Container Image" 
        className="absolute left-0 top-0 opacity-30 z-0 hidden md:block"
      />
      <img 
        src="Rectangle2.png" 
        alt="Container Image" 
        className="absolute left-0 top-0 opacity-30 z-0 hidden md:block"
      />

      <div className="bg-white md:w-[600px]  lg:w-[1200px] 2xl:w-[1400px] md:h-[600px] lg:h-[585px] mx-auto rounded-lg shadow-lg z-10 md:flex items-center justify-center">
        <div className="lg:grid grid-rows-4 grid-flow-col gap-24 place-items-center">

        <h3 className="text-3xl font-bold text-primary text-center mb-8 md:hidden">Some Reviews About Us...</h3>

          {/* First quote */}
          <div className="row-span-2 md:w-[505px] md:h-[188px] flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
              <div>
                <img src="/Ellipse1.png" alt="Person Review Selfie" />
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-center md:text-left text-2xl font-bold">Ivan Mathews</h3>
                <p className="w-[285px] h-[105px]">
                  "I indulged in the most scrumptious chocolate cupcake
                  from Crust & Crumbs , and it was love at first bite!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="md:flex justify-center items-center hidden">
                <div className="w-[2px] h-[100px] bg-secondary"></div>
              </div>
            </div>
          </div>

          {/* Second Quote */}
          <div className="row-span-2 md:w-[505px] md:h-[188px] flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
              <div>
                <img src="/Ellipse3.png" alt="Person Review Selfie" />
              </div>

              <div  className="flex flex-col items-center space-y-1">
                <h3 className="text-center md:text-left text-2xl font-bold">Ishmael Dunlop</h3>
                <p className="w-[285px] h-[105px]">
                  "The croissant I bought from Crust & Crumbs was flaky,
                  buttery, and utterly divine - a perfect breakfast treat!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[2px] h-[100px] bg-secondary hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* Third Quote */}
          <div className="row-span-4 md:w-[505px] md:h-[188px] flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
              <div>
                <img src="/Ellipse2.png" alt="Person Review Selfie" />
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-center md:text-left text-2xl font-bold">Rosemary Hernandez</h3>
                <p className="w-[309px] h-[114px] text-lg">
                  "The custom birthday cake you made for my daughter's party was
                  a huge hit - moist, flavorful, and visually stunning!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[2px] h-[100px] bg-secondary hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
