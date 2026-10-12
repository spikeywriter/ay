import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteData';

export function Footer() {
  return (
    <footer className="bg-forest-700 bg-grain text-ivory-200">
      <div className="mx-auto max-w-content px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold text-ivory-200">
              Ayo<span className="text-gold-400"> Entity</span>
            </Link>
            <p className="mt-5 text-sm text-ivory-200/60 leading-relaxed max-w-xs">
              Healthcare IT consultant, entrepreneur, and founder building connections between Nigeria and the diaspora.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-ivory-200/50 hover:text-gold-400 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-ivory-200/50 hover:text-gold-400 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-ivory-200/50 hover:text-gold-400 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-ivory-200/50 hover:text-gold-400 transition-colors duration-300" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold mb-5">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold mb-5">Ventures</h3>
            <ul className="space-y-3">
              <li><a href={siteConfig.ventureLinks.entityImages} target="_blank" rel="noopener noreferrer" className="text-sm text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">Entity Images</a></li>
              <li><a href={siteConfig.ventureLinks.liverylane} target="_blank" rel="noopener noreferrer" className="text-sm text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">LiveryLane</a></li>
              <li><a href={siteConfig.ventureLinks.diasporaBall} target="_blank" rel="noopener noreferrer" className="text-sm text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">The Diaspora Ball</a></li>
              <li><span className="text-sm text-ivory-200/40">Entity Properties</span></li>
              <li><span className="text-sm text-ivory-200/40">Feed-NG</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold mb-5">Get in Touch</h3>
            <p className="text-sm text-ivory-200/70 mb-2">{siteConfig.email}</p>
            <p className="text-sm text-ivory-200/70 mb-4">{siteConfig.phone}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-300 group"
            >
              Start a conversation
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory-200/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-200/40">
            &copy; {new Date().getFullYear()} Ayo Entity. All rights reserved.
          </p>
          <p className="text-xs text-ivory-200/40">
            Entity Management Group
          </p>
        </div>
      </div>
    </footer>
  );
}
