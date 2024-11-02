import { useForm } from "react-hook-form";
import { Button, Error } from "../components";

export const ContactUsPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-6xl text-primary font-bold tracking-wide mt-32 text-center mb-4">
        Contact Us!
      </h1>

      <p className="text-xl text-primary text-center mb-4 px-8">
        Want to know more about us? Send us a message!
      </p>

      <form
        className="md:w-[600px] mx-auto bg-orange-200 rounded-lg shadow-lg p-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name and Surname */}
        <div className="md:flex items-start justify-center gap-8">
          <div className="flex flex-col justify-center mb-4">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-amber-950 rounded-md p-2 focus:outline-none focus:border-amber-700"
              {...register("name", {
                required: "Please enter your first name",
                maxLength: {
                  value: 20,
                  message: "First name cannot exceed 20 characters",
                },
              })}
            />
            <Error>{errors.name?.message}</Error>
          </div>

          <div className="flex flex-col md:items-start justify-center mb-4">
            <label htmlFor="surname">Last Name</label>
            <input
              type="text"
              name="surname"
              id="surname"
              className="border border-amber-950 rounded-md p-2 focus:outline-none focus:border-amber-700"
              {...register("surname", {
                required: "Please enter your last name",
                maxLength: {
                  value: 20,
                  message: "Last name cannot exceed 20 characters",
                },
              })}
            />
            <Error>{errors.surname?.message}</Error>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col justify-start w-full mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-amber-950 rounded-md p-2 focus:outline-none focus:border-amber-700"
            {...register("email", {
              required: "We need your email to reach you",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          <Error>{errors.email?.message}</Error>
        </div>

        {/* Message */}
        <div className="flex flex-col w-full mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            rows={5}
            className="border border-amber-950 rounded-md p-2 focus:outline-none focus:border-amber-700"
            {...register("message", {
              required: "Don't forget to write us a message",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
          />
          <Error>{errors.message?.message}</Error>
        </div>

        <Button>Send</Button>
      </form>
    </div>
  );
};
