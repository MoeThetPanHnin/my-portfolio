
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "IoT Home Security Dashboard",
    description: "A React-based dashboard to monitor and visualize data from IoT sensors like temperature, humidity, and vibration, integrated with ThingSpeak and Telegram Bot.",
    technologies: ["React", "JavaScript", "IoT", "ThingSpeak", "Tailwind CSS"],
    github: "https://github.com/MoeThetPanHnin/iot-dashboard",
    liveDemo: "https://iot-home-dashboard.netlify.app/", 
    imageUrl: "/images/iot-dashboard.png"
  },
  {
    title: "Modern ToDo List App",
    description: "A responsive ToDo list web app with local storage, cute animations, and task management features built using plain JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/MoeThetPanHnin/todolist",
    liveDemo: "https://todolist-app-m.netlify.app/",
    imageUrl: "/images/todolist.png"
  },
  {
    title: "Travel to Korea ",
    description: "A travel blog web app about Korea with filterable posts, search functionality, and a responsive design using React and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/MoeThetPanHnin/travel-to-korea",
    liveDemo: "https://korea-travel-site.netlify.app", 
    imageUrl: "/images/travel-to-korea.png"
  },
  {
    title: "E-Commerce Frontend Template",
    description: "A modular e-commerce front-end scaffold using React 18, TypeScript, and shadcn/ui — perfect for expanding into a full-scale production store.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/MoeThetPanHnin/e-commerce",
    liveDemo: "https://shop-in-korea.netlify.app/", 
    imageUrl: "/images/e-commerce.png"
  }
];

const Projects = () => {
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
    <section id="projects" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <Card key={idx} className="overflow-hidden border border-border/40 reveal">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-full" 
               />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Projects;
