import { quotes } from "../data/data";

export const Quotes = () => {
  return (
    <section className="bg-terciary container h-[781px] mx-auto flex items-center relative justify-center">
      <img
        src="Quotes.png"
        alt="Quote Image"
        className="absolute top-0 mt-[-10px] w-[570px]"
      />

      <div className="bg-white w-[1400px] h-[585px] mx-auto rounded-lg shadow-lg z-10 flex items-center justify-center">
        <div className="grid grid-cols-2">
          {quotes.map((quote) => (
            <div key={quote.id} className="flex justify-center items-center gap-8">
              <div>
                <img src={quote.profilePic} alt="" />
              </div>

              <div>
                <h3 className="text-2xl">{quote.name}</h3>
                <p className="w-[285px] h-[105px] text-lg">{quote.review}</p>
                <img src={quote.socials} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
