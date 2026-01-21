import { Card } from "@/components/ui/card";
import { Code2, Rocket, Layers } from "lucide-react";
import profileImg from "../img/profile2.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Layers,
      title: "Full-Stack Expertise",
      description:
        "Building production-ready applications using React, Laravel, Tailwind, and MySQL.",
    },
    {
      icon: Code2,
      title: "Clean & Maintainable Code",
      description:
        "Writing reliable and scalable code that follows best practices.",
    },
    {
      icon: Rocket,
      title: "Reliable & Efficient",
      description:
        "Delivering high-quality features on time with strong problem-solving skills.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I’m a dedicated full-stack developer specializing in React, Vite,
            Laravel, Tailwind CSS, and MySQL. I focus on creating efficient,
            scalable, and user-friendly applications that solve real business
            problems.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div
              className={`flex justify-center md:justify-start transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-glow-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-lg leading-relaxed">
                I have experience building systems including POS, Inventory
                Management and admin dashboards. I work well independently and
                in teams, always focusing on clear communication and
                high-quality results.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal is to contribute to a professional team where I can
                create reliable solutions, continue improving my skills, and
                deliver value through modern web development.
              </p>
            </div>

            <div
              className={`grid gap-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
