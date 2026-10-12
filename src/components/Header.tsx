import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteData';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerBg = scrolled || !isHome
    ? 'bg-ivory-200/95 backdrop-blur-md border-b border-charcoal-700/10'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-forest-700' : 'text-ivory-200';
  const wordmarkColor = scrolled || !isHome ? 'text-forest-700' : 'text-ivory-200';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-elegant ${headerBg}`}>
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/" className={`font-serif text-xl lg:text-2xl font-bold tracking-tight ${wordmarkColor} transition-colors duration-500`}>
              Ayo<span className="text-gold-400"> Entity</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${textColor} ${
                      active ? 'text-gold-500' : ''
                    } hover:text-gold-500`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              className={`lg:hidden p-2 -mr-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-elegant ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-forest-700 bg-grain" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-between h-20 px-6">
            <span className="font-serif text-xl font-bold text-ivory-200">
              Ayo<span className="text-gold-400"> Entity</span>
            </span>
            <button
              className="p-2 -mr-2 text-ivory-200"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-6 mt-8 gap-2" aria-label="Mobile">
            {navLinks.map((link, i) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-serif py-3 border-b border-ivory-200/10 transition-all duration-500 ${
                    active ? 'text-gold-400' : 'text-ivory-200'
                  }`}
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: `${i * 60 + 100}ms`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-400 mb-2">Connect</p>
            <p className="text-ivory-200/70 text-sm">{siteConfig.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
