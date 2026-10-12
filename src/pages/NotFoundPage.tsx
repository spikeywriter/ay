import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/Button';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found — Ayo Entity"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="min-h-screen flex items-center justify-center bg-forest-700 bg-grain px-6">
        <div className="text-center max-w-lg">
          <p className="text-display-1 font-serif font-bold text-gold-400 leading-none">404</p>
          <h1 className="mt-6 text-heading-1 font-serif font-bold text-ivory-200 text-balance">
            This page doesn't exist.
          </h1>
          <p className="mt-4 text-base text-ivory-200/60 text-pretty">
            The page you're looking for may have moved or is no longer available. Let's get you back on track.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="secondary" size="md">
              <Home size={16} />
              Back to Home
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-ivory-200/70 hover:text-gold-400 transition-colors duration-300"
            >
              <ArrowLeft size={16} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
