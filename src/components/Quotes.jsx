export const Quotes = () => {
  return (
    <section className="bg-terciary container h-[781px] mx-auto flex items-center relative justify-center">
      <img
        src="Quotes.png"
        alt="Quote Image"
        className="absolute top-0 mt-[-10px] w-[570px]"
      />

      <div className="bg-white w-[1400px] h-[585px] mx-auto rounded-lg shadow-lg z-10 flex items-center justify-center">
        <div className="grid grid-rows-4 grid-flow-col gap-24 place-items-center">
          {/* First quote */}
          <div className="row-span-2 w-[505px] h-[188px] flex justify-center items-center">
            <div className="flex justify-center gap-8">
              <div>
                <img src="/Ellipse1.png" alt="Person Review Selfie" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Ivan Mathews</h3>
                <p className="w-[285px] h-[105px]">
                  "I indulged in the most scrumptious chocolate cupcake
                  from Crust & Crumbs , and it was love at first bite!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[2px] h-[100px] bg-secondary"></div>
              </div>
            </div>
          </div>

          {/* Second Quote */}
          <div className="row-span-2 w-[505px] h-[188px] flex justify-center items-center">
            <div className="flex justify-center gap-8">
              <div>
                <img src="/Ellipse3.png" alt="Person Review Selfie" />
              </div>

              <div  className="space-y-1">
                <h3 className="text-2xl font-bold">Ishmael Dunlop</h3>
                <p className="w-[285px] h-[105px]">
                  "The croissant I bought from Crust & Crumbs was flaky,
                  buttery, and utterly divine - a perfect breakfast treat!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[2px] h-[100px] bg-secondary"></div>
              </div>
            </div>
          </div>

          <div className="row-span-4 w-[505px] h-[188px] flex justify-center items-center">
            <div className="flex justify-center gap-8">
              <div>
                <img src="/Ellipse2.png" alt="Person Review Selfie" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Rosemary Hernandez</h3>
                <p className="w-[309px] h-[114px] text-lg">
                  "The custom birthday cake you made for my daughter's party was
                  a huge hit - moist, flavorful, and visually stunning!"
                </p>
                <img src="Socials.png" alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[2px] h-[100px] bg-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
