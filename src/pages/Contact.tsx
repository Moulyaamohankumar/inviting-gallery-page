import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'veereshsk1249@gmail.com',
      href: 'mailto:veereshsk1249@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8296574978',
      href: 'tel:+918296574978'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/veereshsk1249',
      href: 'https://github.com/veereshsk1249'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/veeresh-sk',
      href: 'https://linkedin.com/in/veeresh-sk'
    }
  ];

  const availability = [
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open to opportunities'
    }
  ];

  return (
    <div className="section-padding pt-24 relative z-10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h1 className="headline-2 mb-6">Let's Start a Conversation</h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-elevated">
              <div className="flex items-center space-x-3 mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="headline-3">Send me a message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary group w-full">
                  Send Message
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-surface">
              <h3 className="font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="caption text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors link-animated"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-surface">
              <h3 className="font-semibold mb-6">Find me online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="caption text-muted-foreground">{social.label}</div>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium hover:text-primary transition-colors link-animated"
                        >
                          {social.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="card-surface">
              <h3 className="font-semibold mb-6">Availability</h3>
              <div className="space-y-4">
                {availability.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="caption text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-surface">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="/Veereshk_resume.pdf" 
                  download 
                  className="btn-secondary w-full justify-center"
                >
                  Download Resume
                </a>
                <a 
                  href="https://calendly.com/veereshsk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;