import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
              Full-Stack Developer
            </span>
            
            <h1 className="headline-1 mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Veeresh S K</span>
            </h1>
            
            <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-8">
              I transform ideas into working products. With 2+ years of experience in the MERN stack, 
              I build scalable web applications with AI integration that make a real impact.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Link 
              to="/contact" 
              className="btn-primary group"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="/resume.pdf" 
              download 
              className="btn-secondary group"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">2+</div>
              <div className="caption mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="caption mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="caption mt-1">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">Top 5</div>
              <div className="caption mt-1">National Winner</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;