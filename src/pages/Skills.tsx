import { Code2, Database, Brain, Wrench, Star } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 'Advanced', percentage: 90 },
      { name: 'JavaScript', level: 'Intermediate', percentage: 80 },
      { name: 'TypeScript', level: 'Basic', percentage: 60 },
      { name: 'Java', level: 'Intermediate', percentage: 75 },
      { name: 'HTML/CSS', level: 'Advanced', percentage: 95 }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    icon: Star,
    skills: [
      { name: 'React.js', level: 'Advanced', percentage: 85 },
      { name: 'Node.js', level: 'Intermediate', percentage: 80 },
      { name: 'Express.js', level: 'Intermediate', percentage: 80 },
      { name: 'TailwindCSS', level: 'Advanced', percentage: 90 },
      { name: 'Common JS', level: 'Intermediate', percentage: 70 }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 'Intermediate', percentage: 80 },
      { name: 'SQL', level: 'Intermediate', percentage: 75 }
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'OpenAI APIs', level: 'Intermediate', percentage: 80 },
      { name: 'Prompt Engineering', level: 'Advanced', percentage: 85 },
      { name: 'N8N Automation', level: 'Intermediate', percentage: 70 },
      { name: 'Gemini AI', level: 'Intermediate', percentage: 75 }
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 'Advanced', percentage: 90 },
      { name: 'VS Code', level: 'Advanced', percentage: 95 },
      { name: 'Figma', level: 'Intermediate', percentage: 75 },
      { name: 'Postman', level: 'Intermediate', percentage: 80 },
      { name: 'Thunder Client', level: 'Intermediate', percentage: 70 },
      { name: 'Bruno', level: 'Basic', percentage: 60 },
      { name: 'MS Excel', level: 'Intermediate', percentage: 70 }
    ]
  }
];

const Skills = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-600 bg-green-100';
      case 'Intermediate':
        return 'text-blue-600 bg-blue-100';
      case 'Basic':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="section-padding pt-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            Technical Skills
          </span>
          <h1 className="headline-2 mb-6">My Technology Stack</h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools I use to build 
            modern web applications and AI-powered solutions.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card-elevated">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="headline-3">{category.category}</h2>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-right">
                          <span className="caption">{skill.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card-surface max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
              attending workshops, and staying updated with the latest industry trends to deliver 
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;