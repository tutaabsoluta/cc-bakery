export const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white px-6 py-3 rounded-lg  hover:bg-primary_light duration-300 w-full md:w-auto" type="submit">
      {children}
    </button>
  );
};
