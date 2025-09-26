import { ArrowRight, Download, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import Scene3D from '@/components/3d/Scene3D';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-background via-background to-card" />}>
          <Scene3D preset="hero" />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-5xl mx-auto">
          {/* Floating Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-accent-secondary/20 group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-accent-secondary/30 transition-all duration-300"></div>
              <div className="absolute inset-0 border border-primary/30 rounded-full"></div>
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="relative text-foreground">Full-Stack Developer</span>
              <Star className="w-4 h-4 text-accent-secondary animate-pulse" />
            </span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6 mb-8 animate-slide-up">
            <h1 className="headline-1">
              Hi, I'm{' '}
              <span className="text-gradient animate-glow">Veeresh S K</span>
            </h1>
            
            <p className="body-large max-w-3xl mx-auto leading-relaxed">
              I transform <span className="text-primary font-semibold">ideas</span> into 
              <span className="text-accent font-semibold"> working products</span>. 
              With 2+ years of experience in the <span className="text-accent-secondary font-semibold">MERN stack</span>, 
              I build scalable web applications with AI integration that make a real impact.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-scale-in">
            <Link to="/contact" className="btn-primary group">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a href="/resume.pdf" download className="btn-secondary group">
              <Download className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {[
              { number: '2+', label: 'Years Experience', color: 'primary' },
              { number: '10+', label: 'Projects Completed', color: 'accent' },
              { number: '5+', label: 'Technologies', color: 'accent-secondary' },
              { number: 'Top 5', label: 'National Winner', color: 'primary' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer relative p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-card/10 rounded-2xl border border-border/30 group-hover:border-primary/40 transition-all duration-300"></div>
                <div className="relative">
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                    stat.color === 'primary' ? 'text-primary' :
                    stat.color === 'accent' ? 'text-accent' :
                    'text-accent-secondary'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="caption opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-float">
          <div className="w-6 h-12 border-2 border-primary/60 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="caption text-muted-foreground">Scroll to explore</span>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-accent-secondary/20 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;