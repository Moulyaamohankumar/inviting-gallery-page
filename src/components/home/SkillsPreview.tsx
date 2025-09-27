import { Code, Database, Palette, Zap, ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import Scene3D from '@/components/3d/Scene3D';
import { useNavigate } from 'react-router-dom';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS'],
    description: 'Creating responsive, interactive user interfaces',
    gradient: 'from-primary to-accent',
    delay: '0s'
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    description: 'Building scalable server-side applications',
    gradient: 'from-accent to-accent-secondary',
    delay: '0.2s'
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    skills: ['OpenAI APIs', 'Prompt Engineering', 'N8N', 'Gemini AI'],
    description: 'Integrating AI to enhance user experiences',
    gradient: 'from-accent-secondary to-primary',
    delay: '0.4s'
  },
  {
    icon: Palette,
    title: 'Tools & Design',
    skills: ['Git', 'Figma', 'Postman', 'VS Code'],
    description: 'Efficient workflow and design collaboration',
    gradient: 'from-primary via-accent to-accent-secondary',
    delay: '0.6s'
  }
];

const SkillsPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute top-0 left-0 w-full h-96 opacity-20">
        <Suspense fallback={null}>
          <Scene3D preset="skills" />
        </Suspense>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse opacity-50"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-accent-secondary/20 group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-accent-secondary/30 transition-all duration-300"></div>
            <div className="absolute inset-0 border border-primary/30 rounded-full"></div>
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            <span className="relative">Technical Expertise</span>
          </span>
          <h2 className="headline-2 mb-6">Skills & <span className="text-gradient">Technologies</span></h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications, 
            from frontend interfaces to AI-powered backends.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="text-center group relative"
                style={{ animationDelay: category.delay }}
              >
                {/* Floating Card */}
                <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-border/30 transition-all duration-500 hover:border-primary/40 group-hover:-translate-y-2 animate-fade-in">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/60 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="caption mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="px-3 py-1.5 bg-muted/30 text-muted-foreground text-sm rounded-full inline-block m-1 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:text-primary transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            className="btn-secondary group relative overflow-hidden"
            onClick={() => navigate('/skills')}
          >
            <span className="relative z-10">Explore All Skills</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default SkillsPreview;