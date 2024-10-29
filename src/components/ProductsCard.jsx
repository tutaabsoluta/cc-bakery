import { desserts } from "../data";

export const ProductsCard = () => {
  return (
    <div className="flex mt-36 gap-6 overflow-x-auto mx-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory scroll-px-0 container pb-24">
        {
            desserts.map( dessert => (
                <div key={ dessert.id } className="snap-center shrink-0 w-[246px] h-[355px] space-y-4">
                    <img src={ dessert.imageUrl } alt="Dessert Image" className="w-[200px] h-[250px] rounded-3xl shadow-xl" />
                    <p className="text-2xl">{ dessert.title }</p>
                    <img src={ dessert.rating } alt="Dessert Rating" className="w-[246px] h-[26px]" />
                </div>
            ) )
        }
    </div>
  );
};
