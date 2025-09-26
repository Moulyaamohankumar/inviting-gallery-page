import { Code, Database, Palette, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS'],
    description: 'Creating responsive, interactive user interfaces'
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
    description: 'Building scalable server-side applications'
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    skills: ['OpenAI APIs', 'Prompt Engineering', 'N8N', 'Gemini AI'],
    description: 'Integrating AI to enhance user experiences'
  },
  {
    icon: Palette,
    title: 'Tools & Design',
    skills: ['Git', 'Figma', 'Postman', 'VS Code'],
    description: 'Efficient workflow and design collaboration'
  }
];

const SkillsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            Technical Expertise
          </span>
          <h2 className="headline-2 mb-6">Skills & Technologies</h2>
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
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <p className="caption mb-4">{category.description}</p>

                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full inline-block m-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Explore All Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;