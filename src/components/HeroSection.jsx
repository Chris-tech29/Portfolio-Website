import { ArrowDown } from "lucide-react";
import profile from "../assets/profile.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex  flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <img
              src={profile}
              alt="Christopher Dimas"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Christopher{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dimas{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Hello, I’m Christopher Dimas I’m a full stack web developer
            currently studying at{" "}
            <a href="https://www.google.com/aclk?sa=L&ai=DChsSEwjXitvbu4GWAxUxdX8AHWtzNnMYACICCAEQARoCb2E&co=1&gclid=CjwKCAjw1bvTBhBbEiwAzbP8Lx_3AY3peDGydxXmZisS6LtimhpS73MIpxIJOOl4-hjh105exV8VYhoCJBMQAvD_BwE&cid=CAAS0gHkaNhOXWitU7NK_7pjqxOMwX4d6v-_uDqfGfKTkY2tZ0WVcoTq5zqTBxZtxyf-y7M4BQtCpr-Ch1POBx6Eye1nzZDoWy8MQRUUPIs2UQqz06GFqNtmphC8uVzIMqwq6XUwJJzFuDKiGeobnQvEwZrqcuo9KCNuD5frvasNkwC2TVqg_6O_u7nISn5OWYQUjfYUqu8_ZEJxbMFfyW_5A-fEbvFHGZtM3efRmwjGp7uZSDvItqtHAfNdoNNAp1LSxjmYipmf0RzPmdDIGEE3LEMjz9Q&cce=1&sig=AOD64_20PVShmAS_Ow2ISj8-CcKQxT62Kg&q&adurl&ved=2ahUKEwjzv9Pbu4GWAxUxmSYFHZPhMeEQ0Qx6BAgrEAE">
              Atlas Technology School
            </a>
            . I enjoy building responsive, user-friendly web applications with
            modern technologies like React, TypeScript, Node.js, and PostgreSQL
            while continuously expanding my backend development skills.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-small text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
