
import { useEffect, useRef } from "react";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5 & CSS3", proficiency: 90 },
      { name: "JavaScript (ES6+)", proficiency: 80 },
      { name: "TypeScript", proficiency: 70 },
      { name: "React", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 80 },
    ]
  },
  {
    category: "Tools & Other",
    skills: [
      { name: "Git & GitHub", proficiency: 85 },
      { name: "Responsive Design", proficiency: 90 },
      { name: "Webpack/Vite", proficiency: 75 },
      { name: "Problem Solving ", proficiency: 80 },
      { name: "Teamwork", proficiency: 85 },
      { name: "Performance Optimization", proficiency: 90 },
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If this is a skill bar, animate it
            const progressBars = entry.target.querySelectorAll('.skill-progress-inner');
            progressBars.forEach((bar: Element) => {
              const htmlBar = bar as HTMLElement;
              const width = htmlBar.dataset.proficiency;
              setTimeout(() => {
                htmlBar.style.width = `${width}%`;
              }, 100);
            });
            
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
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {skillsData.map((category, idx) => (
              <div key={idx} className="reveal">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="skill-progress-inner h-full bg-secondary rounded-full transition-all duration-1000 ease-out" 
                          data-proficiency={skill.proficiency} 
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
