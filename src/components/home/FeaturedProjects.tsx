import { ExternalLink, Github, Sparkles, Rocket, Brain, ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import Scene3D from '@/components/3d/Scene3D';

const projects = [
  {
    title: 'PHYTECH - AI-Driven Marketplace',
    description: 'MERN stack marketplace for second-hand tech with AI-powered recommendations, improving user engagement and supporting 10+ transactions.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'Express.js'],
    year: '2025',
    status: 'Live',
    category: 'Full-Stack',
    icon: Rocket,
    gradient: 'from-primary to-accent'
  },
  {
    title: 'FinTrackr - AI Finance App',
    description: 'Production-grade financial assistant with portfolio tracking, PDF export, stock alerts, and AI-powered insights using OpenAI and Gemini APIs.',
    tech: ['MERN Stack', 'OpenAI API', 'Gemini AI', 'JWT', 'Chart.js'],
    year: 'Ongoing',
    status: 'Development',
    category: 'AI/Finance',
    icon: Brain,
    gradient: 'from-accent to-accent-secondary'
  },
  {
    title: 'Lexolution - Legal Workflow Tool',
    description: 'Legal workflow automation platform with role-based dashboards, achieving 95% UI fidelity and optimized data retrieval.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Figma', 'TailwindCSS'],
    year: '2024',
    status: 'Completed',
    category: 'Enterprise',
    icon: Sparkles,
    gradient: 'from-accent-secondary to-primary'
  }
];

const FeaturedProjects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96">
        <Suspense fallback={null}>
          <Scene3D preset="projects" className="opacity-30" />
        </Suspense>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent-secondary/20 group-hover:from-accent/30 group-hover:via-primary/30 group-hover:to-accent-secondary/30 transition-all duration-300"></div>
            <div className="absolute inset-0 border border-accent/30 rounded-full"></div>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="relative">Featured Work</span>
          </span>
          <h2 className="headline-2 mb-6">Projects That <span className="text-gradient">Matter</span></h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered marketplaces to 
            enterprise workflow tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="card-elevated group relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="caption text-accent font-medium">{project.category}</span>
                      <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 group-hover:scale-110">
                      <Github size={18} />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-accent transition-all duration-300 rounded-lg hover:bg-accent/10 group-hover:scale-110">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="body-base text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50 relative">
                  <span className="caption font-medium">{project.year}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <button className="btn-accent group relative overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;