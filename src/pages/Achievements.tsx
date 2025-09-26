import { Trophy, Users, Code, Award, Target, TrendingUp } from 'lucide-react';

const achievements = [
  {
    type: 'hackathon',
    icon: Trophy,
    title: 'Google Gen AI Hackathon - Team Lead',
    description: 'Successfully led a cross-functional team to achieve a Top National Submission out of 100+ teams. Developed an innovative emotional support web application utilizing the Gemini API.',
    highlights: [
      'Top National Submission',
      'Led cross-functional team',
      'Emotional support web app',
      'Gemini API integration'
    ],
    year: '2024',
    category: 'Leadership & Innovation'
  },
  {
    type: 'competition',
    icon: Award,
    title: 'Prompt Repo Hackathon - National Winner',
    description: 'Recognized as a Top 5 National Winner among 200+ competing teams. Spearheaded the development of Lexolution, a MERN-based legal operations platform.',
    highlights: [
      'Top 5 National Winner',
      '200+ competing teams',
      'MERN-based platform',
      'Legal operations focus'
    ],
    year: '2024',
    category: 'Technical Excellence'
  },
  {
    type: 'project',
    icon: Code,
    title: 'PHYTECH - AI Marketplace Success',
    description: 'Developed a MERN stack marketplace for second-hand tech, integrating AI powered recommendations that improved user engagement by 3%.',
    highlights: [
      '3% engagement improvement',
      'AI-powered recommendations',
      '10+ transactions supported',
      'Modular architecture'
    ],
    year: '2025',
    category: 'Product Development'
  },
  {
    type: 'project',
    icon: TrendingUp,
    title: 'FinTrackr - Production Grade App',
    description: 'Built a production-grade financial assistant with core features including portfolio tracking, PDF export, and stock alerts for users.',
    highlights: [
      'Production-grade application',
      'Portfolio tracking',
      'AI-powered insights',
      '90% security uptime'
    ],
    year: 'Ongoing',
    category: 'Full-Stack Development'
  },
  {
    type: 'technical',
    icon: Target,
    title: 'Full-Stack Multimedia AI Agent',
    description: 'Architected and built a decoupled web application featuring React frontend and Python/FastAPI backend for AI-powered multimedia analysis.',
    highlights: [
      'RAG pipeline implementation',
      'Video analysis with OpenCV',
      'Pinecone vector database',
      'Deployed on Render.com'
    ],
    year: '2024',
    category: 'AI & Backend'
  }
];

const stats = [
  { number: '2+', label: 'Years Experience', icon: TrendingUp },
  { number: '5+', label: 'Major Projects', icon: Code },
  { number: '2', label: 'Hackathon Wins', icon: Trophy },
  { number: '300+', label: 'Competitors Beaten', icon: Users }
];

const Achievements = () => {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'from-yellow-500 to-orange-500';
      case 'competition':
        return 'from-blue-500 to-purple-500';
      case 'project':
        return 'from-green-500 to-teal-500';
      case 'technical':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            Achievements & Recognition
          </span>
          <h1 className="headline-2 mb-6">Milestones & Accomplishments</h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A record of significant achievements, competition wins, and successful project deliveries 
            that showcase my technical skills and leadership capabilities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center card-surface">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                <div className="caption mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="card-elevated">
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* Icon & Year */}
                  <div className="lg:col-span-2">
                    <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${getIconColor(achievement.type)} rounded-2xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="font-semibold text-lg">{achievement.year}</div>
                        <div className="caption">{achievement.category}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <h3 className="headline-3 mb-4">{achievement.title}</h3>
                    <p className="body-base text-muted-foreground mb-6">
                      {achievement.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="caption">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-surface max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6">
              These achievements represent just the beginning. I'm excited to take on new challenges 
              and contribute to meaningful projects that make a real impact.
            </p>
            <button className="btn-primary">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;