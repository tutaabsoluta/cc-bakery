import React from 'react';

export const CategoryPage = () => {
  return (
    <div className="container mx-auto p-4 mt-24 flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl md:text-6xl text-primary font-bold tracking-wide text-center mb-8 px-4 lg:px-0">Categories</h1>
      <p className="mb-6 text-xl px-4 lg:px-0 lg:w-[1000px]">
        Explore our diverse selection of baked goods, each crafted with care and the finest ingredients. Whether you're in the mood for a sweet treat or a savory delight, we have something for everyone. Browse through our categories to find your new favorite indulgence!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Bread.webp" alt="Bread" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">1. Breads</h5>
            <p className="mb-3 font-normal text-gray-700">
              Our bread category features a variety of artisanal loaves, including classic sourdough, whole grain, and specialty breads infused with herbs and spices. Each loaf is baked to perfection, offering a crispy crust and a soft, flavorful interior. Perfect for sandwiches, toast, or simply enjoyed with a pat of butter.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Pastrie.webp" alt="Pastries" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">2. Pastries</h5>
            <p className="mb-3 font-normal text-gray-700">
              Delight in our selection of flaky pastries, from buttery croissants to sweet danishes filled with fruit and cream cheese. Our pastries are made using traditional techniques, ensuring a light and airy texture that melts in your mouth. Ideal for breakfast or an afternoon treat with your favorite beverage.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Cake.webp" alt="Cake" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">3. Cakes</h5>
            <p className="mb-3 font-normal text-gray-700">
              Celebrate life’s special moments with our exquisite cakes! Our cake category includes a range of options, from classic vanilla and chocolate to creative flavors like lemon lavender and red velvet. We also offer custom cake designs for weddings, birthdays, and other celebrations, ensuring your cake is as unique as your occasion.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Cookies.webp" alt="Cookies" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">4. Cookies</h5>
            <p className="mb-3 font-normal text-gray-700">
              Indulge your sweet tooth with our assortment of cookies! From chewy chocolate chip to crisp sugar cookies adorned with colorful icing, there’s a cookie for every palate. Perfect for sharing (or not!), our cookies are baked fresh daily and are guaranteed to satisfy your cravings.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Savory.webp" alt="Savory" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">5. Savory Items</h5>
            <p className="mb-3 font-normal text-gray-700">
              For those who prefer something more savory, our selection of quiches, focaccias, and savory pastries will delight your taste buds. Each item is packed with flavorful ingredients, making them ideal for lunch or a light snack any time of the day.
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img className="rounded-t-lg h-48 w-full object-cover" src="Seasonal.webp" alt="Seasonal Items" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">6. Seasonal Items</h5>
            <p className="mb-3 font-normal text-gray-700">
              Don’t miss our seasonal specials that highlight the flavors of the season! From pumpkin spice treats in the fall to refreshing berry pastries in the summer, these limited-time offerings showcase our creativity and commitment to using seasonal ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
