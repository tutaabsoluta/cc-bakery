export const SliderCard = () => {
    return (
      <div className="w-[551px] h-[172px] overflow-x-auto overflow-y-hidden no-scrollbar flex items-center gap-4 snap-x snap-mandatory scroll-p-4 bg-slate-300 bg-opacity-40 rounded-full px-24 py-24 mb-[-100px]">
        {[
          "arrows.png", 
          "slider-card-images-01.png",
          "slider-card-images-02.png",
          "slider-card-images-03.png",
          "slider-card-images-04.png",
          "slider-card-images-05.png",
          "slider-card-images-06.png",
          "slider-card-images-07.png",
        ].map((src, index) => (
          <div key={index} className="snap-center shrink-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`rounded-lg ${src === "arrows.png" ? "w-24" : "w-64"}`} 
            />
          </div>
        ))}
      </div>
    );
  };
  