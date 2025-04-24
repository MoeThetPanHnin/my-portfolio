
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#" className="text-xl font-bold">
<<<<<<< HEAD
              <span>MOETHETPANHNIN</span>
=======
              <span className="gradient-text">Dev</span>Portfolio
>>>>>>> cc220a2 (Refactor: Frontend portfolio)
            </a>
            <p className="text-muted-foreground mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 text-secondary" />
            </button>
          </div>
        </div>
        
<<<<<<< HEAD
       
=======
        <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground text-sm">
          Designed and built with ❤️ using React, TypeScript, and Tailwind CSS
        </div>
>>>>>>> cc220a2 (Refactor: Frontend portfolio)
      </div>
    </footer>
  );
};

export default Footer;
