import { MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="section-padding pt-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            About Me
          </span>
          <h1 className="headline-2 mb-6">Getting to Know Me</h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            A passionate developer on a mission to build meaningful technology that makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Story */}
            <div className="card-elevated bg-white/60 dark:bg-dark/60 backdrop-blur">
              <h2 className="headline-3 mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Full-Stack Developer who enjoys turning ideas into working products. My journey 
                  in technology started with curiosity and has evolved into a passion for building 
                  scalable, user-centered applications.
                </p>
                <p>
                  With 2+ years of academic and project experience in the MERN stack, I've developed 
                  platforms like FinTracker and PHYTECH, embedding AI features to make them smarter 
                  and more useful. I thrive in fast-moving environments — from hackathons to academic 
                  projects — where solving problems under pressure is the norm.
                </p>
                <p>
                  I'm currently pursuing my Bachelor's in Computer Applications (Hons) in Software 
                  Product Engineering at RV University, Bengaluru, through the Kalvium Integrated Program. 
                  This unique program combines theoretical knowledge with hands-on industry experience.
                </p>
                <p>
                  I'm looking for opportunities in Full-Stack or Backend Development where I can design 
                  scalable systems, build reliable APIs, and keep learning by tackling real-world challenges.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="card-elevated bg-white/60 dark:bg-dark/60 backdrop-blur">
              <h2 className="headline-3 mb-6">What Drives Me</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Innovation</h3>
                  </div>
                  <p className="caption">
                    Constantly exploring new technologies and approaches to solve complex problems.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Quality</h3>
                  </div>
                  <p className="caption">
                    Writing clean, maintainable code that scales and performs reliably.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Impact</h3>
                  </div>
                  <p className="caption">
                    Building solutions that make a real difference in people's lives and businesses.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Growth</h3>
                  </div>
                  <p className="caption">
                    Embracing challenges and continuous learning in the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="card-surface">
              <h3 className="font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="caption">Bengaluru, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="caption">Available for work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <span className="caption">BCA (Hons), 2024-2028</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card-surface">
              <h3 className="font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Bachelor of Computer Applications (Hons)</h4>
                  <p className="caption">Software Product Engineering</p>
                  <p className="caption text-accent">RV University, Bengaluru</p>
                  <p className="caption">Kalvium Integrated Program</p>
                  <p className="caption">2024 - 2028</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card-surface">
              <h3 className="font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Web Development', 'Hackathons', 'Open Source', 'Automation', 'Startups'].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;