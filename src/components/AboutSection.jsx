import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate tech creater and web developer
            </h3>

            <p className="text-muted-foreground">
              I’m a full-stack web developer and technology enthusiast who
              enjoys building applications that solve real problems and create a
              great user experience. My journey into technology has given me
              experience working with both front-end and back-end development,
              allowing me to understand how different parts of an application
              work together. Through my projects and studies at Atlas Technology
              School, I have worked with technologies such as React, TypeScript,
              Node.js, Express, SQL, PostgreSQL, Prisma, Docker, and AWS. I
              enjoy learning how systems work behind the scenes, from designing
              user interfaces to building APIs, databases, authentication
              systems, and deployment pipelines. I believe the best way to
              improve as a developer is by consistently building, experimenting,
              and solving problems. Every project I work on gives me an
              opportunity to learn something new and become a better developer.
            </p>

            <p className="text-muted-foreground">
              Outside of technology, I work as a professional barber, which has
              helped me develop strong communication, customer service, time
              management, and business skills. Working directly with clients has
              taught me how important it is to understand people’s needs, pay
              attention to detail, and consistently deliver quality work. My
              experience as a barber has also influenced the way I approach
              software development. I enjoy creating practical applications that
              improve people’s everyday experiences, and I understand the
              importance of building products that are not only functional but
              also easy and enjoyable to use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Building responsive full-stack applications with modern technologies, APIs, databases, authentication, and deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UIX </h4>
                  <p className="text-muted-foreground">
                  Designing clean, intuitive interfaces focused on usability, accessibility, and a smooth user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Work Expierence</h4>
                  <p className="text-muted-foreground">
                  My experience combines technology, entrepreneurship, and working directly with people. As a professional barber, I have developed strong communication, time management, customer service, and business skills while managing my own clients and responsibilities.

Through my education and personal projects in full-stack development, I have gained hands-on experience designing and building web applications, creating REST APIs, working with databases, implementing authentication, using Docker, and deploying applications to cloud platforms.

I enjoy taking projects from an initial idea and turning them into working applications while continuously improving both the technical implementation and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
