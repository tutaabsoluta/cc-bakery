import React from "react";

export const AboutPage = () => {
  return (
    <div className="text-center space-y-4 md:px-36 px-8">
      <h1 className="text-6xl text-primary font-bold tracking-wide mt-32">
        About Us
      </h1>
      <p className="uppercase text-primary text-2xl">
        A simple, tasty, and healthy bakery experience.
      </p>

      <div className="lg:flex justify-between items-center gap-8 2xl:justify-center">
        <div className="lg:w-2/5 2xl:w-2/5">
          <p>
            Welcome to Crust & Crumbs, where passion for baking meets the art of
            deliciousness! Founded in 2024, our bakery was born from a love for
            creating mouthwatering treats that bring joy to every occasion. We
            believe that baking is not just a craft but a way to express love
            and creativity. Our team of skilled bakers is dedicated to using
            only the finest, freshest ingredients, ensuring that every item we
            produce is a delightful experience for our customers. Community is
            at the heart of what we do.
          </p>

          <br />

          <p>
            We are committed to supporting local farmers and suppliers, sourcing
            our ingredients responsibly, and giving back to our neighborhood. We
            strive to create a warm and inviting atmosphere where friends and
            families can gather to enjoy our treats and share their stories. At
            Crust & Crumbs, we’re not just baking; we’re building connections
            one delicious bite at a time. Come and experience the love and
            dedication that goes into every creation!
          </p>
        </div>
        <div>
          <img src="bakery.jpg" alt="Bakery Shop" className="mt-12 lg:mt-0 rounded-2xl shadow-xl" />
        </div>
      </div>
    </div>
  );
};
