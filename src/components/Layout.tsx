import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './3d/Scene3D';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/skills', label: 'Skills' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/veereshsk1249', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/veeresh-sk', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:veereshsk1249@gmail.com', label: 'Email' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'scale-95' 
          : 'scale-100'
      }`}
    >
      {/* Top Navigation: Logo, Social Links, Nav Links */}
      <div className="flex flex-row items-center space-x-6 max-w-l mx-auto px-2 py-1">


        {/* Nav Links Last */}
        <div className="flex flex-row space-x-2 bg-dark-surface/20 backdrop-blur-2xl rounded-2xl border border-electric-cyan/20 px-3 py-3 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-medium transition-all duration-300 relative group px-3 py-2 rounded-xl text-center ${
                location.pathname === item.path
                  ? 'text-dark-surface bg-gradient-to-r from-electric-cyan to-neon-pink shadow-glow' 
                  : 'text-foreground/70 hover:text-electric-cyan hover:bg-electric-cyan/10'
              }`}
            >
              {item.label}
              {location.pathname !== item.path && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-cyan/0 via-electric-cyan/5 to-electric-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-electric-cyan/20">
      <div className="container-custom py-12">
        <div className="text-center">
          <h3 className="text-xl font-heading font-bold mb-4 text-white drop-shadow-glow">Veeresh S K</h3>
          <p className="text-white mb-6 max-w-md mx-auto">
            Full-Stack Developer passionate about building innovative solutions with modern technologies.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/veereshsk1249"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/veeresh-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-white hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:veereshsk1249@gmail.com"
              className="p-3 text-white hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="pt-8 border-t border-electric-cyan/20">
            <p className="caption text-white">
              © {currentYear} Veeresh S K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 3D Background for All Pages */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>
      
      <Navigation />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;