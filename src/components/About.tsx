<<<<<<< HEAD
=======

>>>>>>> cc220a2 (Refactor: Frontend portfolio)
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
<<<<<<< HEAD
            About Me
          </h2>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 reveal flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden bg-secondary/10 border border-border">
                <img
                  src="/images/photo.jpg"
                  alt="Profile"
                  className="block object-contain"
                  style={{ maxWidth: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="md:col-span-3 reveal">
              <p className="text-lg mb-4">
                Hi there! I'm a passionate Frontend Developer who loves bringing ideas to life with code.
              </p>
              <p className="text-lg mb-4">
              I specialize in building clean, responsive, and interactive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.
              </p>
              <p className="text-lg mb-4">
              Coding isn't just my skill — it's what I truly enjoy. I love solving problems, creating beautiful interfaces, and constantly learning new technologies like TypeScript and modern frameworks.
              </p>
              <p className="text-lg">
              I'm highly motivated, always curious, and excited to grow every day as a developer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Javascript</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Tailwind CSS</span>
                
=======
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 reveal">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/10 border border-border relative">
                <div className="absolute inset-0 flex items-center justify-center text-secondary">
                  <span className="text-sm">Your Photo</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 reveal">
              <p className="text-lg mb-4">
                Hi there! I'm a passionate Frontend Developer specializing in creating beautiful, responsive, and user-friendly web applications.
              </p>
              
              <p className="text-lg mb-4">
                With a strong foundation in HTML, CSS, and JavaScript, I bring ideas to life through clean code and intuitive user interfaces. My expertise includes modern frameworks like React, along with tools like Tailwind CSS and TypeScript.
              </p>
              
              <p className="text-lg">
                I'm driven by the challenge of solving complex UI problems and creating seamless experiences that delight users. When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying outdoor activities.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Tailwind CSS</span>
>>>>>>> cc220a2 (Refactor: Frontend portfolio)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> cc220a2 (Refactor: Frontend portfolio)
