import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark-card/80 backdrop-blur-xl border-b border-electric-cyan/20 shadow-glow' 
          : 'bg-transparent'
      }`}
    >
        <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl lg:text-2xl font-heading font-bold text-electric-cyan hover:text-neon-pink transition-all duration-300 hover:drop-shadow-glow"
          >
            Veeresh S K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-300 relative group ${
                  location.pathname === item.path
                    ? 'text-electric-cyan drop-shadow-glow'
                    : 'text-foreground/80 hover:text-electric-cyan hover:drop-shadow-glow'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-electric-cyan to-neon-pink transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/60 hover:text-electric-cyan transition-all duration-300 rounded-lg hover:bg-dark-card/50 hover:drop-shadow-glow border border-transparent hover:border-electric-cyan/30"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-electric-cyan transition-all duration-300 hover:drop-shadow-glow"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-electric-cyan/20 bg-dark-card/90 backdrop-blur-xl">
            <div className="py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-electric-cyan bg-electric-cyan/10 border-l-2 border-electric-cyan drop-shadow-glow'
                      : 'text-foreground/80 hover:text-electric-cyan hover:bg-dark-card/50 hover:border-l-2 hover:border-electric-cyan/50'
                  } rounded-lg border-l-2 border-transparent`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-electric-cyan/20">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-foreground/60 hover:text-electric-cyan transition-all duration-300 hover:drop-shadow-glow"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
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