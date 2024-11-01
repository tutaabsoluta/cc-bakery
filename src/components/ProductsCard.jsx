import { desserts } from "../data";

export const ProductsCard = () => {
  return (
    <div className="px-8 md:px-8 lg:px-0 flex mt-12 md:mt-24 gap-8 md:gap-6 overflow-x-auto md:mx-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory scroll-px-0 container pb-24">
        {
            desserts.map( dessert => (
                <div key={ dessert.id } className="snap-center shrink-0 md:w-[246px] h-[355px] space-y-4">
                    <img src={ dessert.imageUrl } alt="Dessert Image" className="w-[200px] h-[250px] rounded-3xl shadow-xl" />
                    <p className="text-2xl w-[100px] md:w-auto">{ dessert.title }</p>
                    <img src={ dessert.rating } alt="Dessert Rating" className="w-48 md:w-[246px] md:h-[26px]" />
                </div>
            ) )
        }
    </div>
  );
};
