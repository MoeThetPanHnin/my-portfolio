
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add('active');
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div ref={containerRef} className="reveal max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 animate-fade-in">
            Frontend Developer
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Creating <span className="gradient-text">beautiful</span> & <span className="gradient-text">responsive</span> web experiences
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
<<<<<<< HEAD
            I build engaging user interfaces and interactive web pages with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#projects">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 transition-colors">
              View My Projects
            </Button>
            </a>
            <a href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
            </a>
=======
            I build engaging user interfaces and interactive web applications with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 transition-colors">
              View My Projects
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
>>>>>>> cc220a2 (Refactor: Frontend portfolio)
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
