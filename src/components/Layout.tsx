import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-dark-surface/20 backdrop-blur-2xl border-b border-electric-cyan/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 py-2">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-lg font-heading font-bold bg-gradient-to-r from-electric-cyan via-neon-pink to-electric-cyan bg-clip-text text-transparent hover:scale-105 transition-all duration-300 hover:drop-shadow-glow flex-shrink-0"
          >
            Veeresh S K
          </Link>

          {/* Navigation Links - Sleek Center Design */}
          <div className="flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1 bg-dark-surface/30 backdrop-blur-xl rounded-full border border-electric-cyan/20 px-2 py-1.5 shadow-lg">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-medium transition-all duration-300 relative group px-3 py-1.5 rounded-full ${
                    location.pathname === item.path
                      ? 'text-dark-surface bg-gradient-to-r from-electric-cyan to-neon-pink shadow-glow' 
                      : 'text-foreground/70 hover:text-electric-cyan hover:bg-electric-cyan/10'
                  }`}
                >
                  {item.label}
                  {location.pathname !== item.path && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-cyan/0 via-electric-cyan/5 to-electric-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links - Minimalist Design */}
          <div className="flex items-center space-x-1 bg-dark-surface/30 backdrop-blur-xl rounded-full border border-electric-cyan/20 px-2 py-1.5 shadow-lg flex-shrink-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-electric-cyan transition-all duration-300 rounded-full hover:bg-electric-cyan/10 hover:drop-shadow-glow group"
                  aria-label={social.label}
                >
                  <Icon size={14} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>
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
          <h3 className="text-xl font-heading font-bold mb-4 text-electric-cyan drop-shadow-glow">Veeresh S K</h3>
          <p className="text-foreground/70 mb-6 max-w-md mx-auto">
            Full-Stack Developer passionate about building innovative solutions with modern technologies.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/veereshsk1249"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground/60 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/veeresh-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-foreground/60 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:veereshsk1249@gmail.com"
              className="p-3 text-foreground/60 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="pt-8 border-t border-electric-cyan/20">
            <p className="caption text-foreground/50">
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
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;