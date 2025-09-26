import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PHYTECH - AI-Driven Marketplace',
    description: 'MERN stack marketplace for second-hand tech with AI-powered recommendations, improving user engagement and supporting 10+ transactions.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'Express.js'],
    year: '2025',
    status: 'Live',
    category: 'Full-Stack'
  },
  {
    title: 'FinTrackr - AI Finance App',
    description: 'Production-grade financial assistant with portfolio tracking, PDF export, stock alerts, and AI-powered insights using OpenAI and Gemini APIs.',
    tech: ['MERN Stack', 'OpenAI API', 'Gemini AI', 'JWT', 'Chart.js'],
    year: 'Ongoing',
    status: 'Development',
    category: 'AI/Finance'
  },
  {
    title: 'Lexolution - Legal Workflow Tool',
    description: 'Legal workflow automation platform with role-based dashboards, achieving 95% UI fidelity and optimized data retrieval.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Figma', 'TailwindCSS'],
    year: '2024',
    status: 'Completed',
    category: 'Enterprise'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="section-padding bg-surface-elevated">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="headline-2 mb-6">Projects That Matter</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered marketplaces to 
            enterprise workflow tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-elevated group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="caption text-accent">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                    <Github size={18} />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="body-base text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="caption">{project.year}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-100 text-green-700' :
                  project.status === 'Development' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;