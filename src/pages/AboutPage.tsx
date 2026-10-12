import { ArrowRight, Briefcase, Globe, Camera, Car, Calendar, Heart, Target } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { images, timeline, ventureFeature } from '@/data/siteData';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Ayo — Ayobami Magbagbeola"
        description="Learn about Ayo Entity (Ayobami Magbagbeola) — healthcare IT consultant, entrepreneur, and founder of Entity Management Group connecting Nigeria and the diaspora."
        image={images.aboutPortrait}
        path="/about"
      />

      {/* Hero */}
      <section className="relative pt-36 lg:pt-44 pb-24 lg:pb-32 bg-forest-700 bg-grain overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={images.aboutContemplative} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-forest-700/60" />
        </div>
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow-light mb-6">About Ayo</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                The person behind<br />the <span className="text-gold-400 italic">enterprise.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                A healthcare IT consultant turned serial entrepreneur, Ayo Entity builds businesses that serve communities and strengthen the bond between Nigeria and the diaspora.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bio with portrait */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="sticky top-28">
                  <img
                    src={images.aboutSecondary}
                    alt="Ayo Entity portrait"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <div className="mt-6 p-6 bg-forest-700">
                    <p className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold mb-3">Profile</p>
                    <div className="space-y-2 text-sm text-ivory-200/70">
                      <p><span className="text-ivory-200/40">Name:</span> Ayobami Magbagbeola</p>
                      <p><span className="text-ivory-200/40">Known as:</span> Ayo Entity</p>
                      <p><span className="text-ivory-200/40">Field:</span> Healthcare IT & Entrepreneurship</p>
                      <p><span className="text-ivory-200/40">Base:</span> Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 mb-6 text-balance">
                  A professional biography.
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami Magbagbeola, known professionally as Ayo Entity, is a healthcare IT consultant and entrepreneur whose work bridges technology, creative services, and community-focused enterprise. His professional journey began in healthcare information technology, where he developed expertise in systems, processes, and the critical role of reliable data in patient care.
                  </p>
                  <p>
                    Building on that foundation, Ayo founded Entity Management Group — the parent organisation through which he develops and manages a portfolio of businesses spanning photography, luxury transport, events, real estate, and agriculture. Each venture reflects his belief that enterprise should serve people first.
                  </p>
                  <p>
                    Central to Ayo's vision is the connection between Nigeria and its global diaspora. Whether through The Diaspora Ball — an annual gala celebrating that bond — or through services designed to meet the needs of a discerning, internationally connected clientele, his work consistently reaches across geographies to bring people together.
                  </p>
                </div>
              </Reveal>

              {/* Pull quote */}
              <Reveal delay={160}>
                <blockquote className="mt-10 border-l-2 border-gold-400 pl-6">
                  <p className="text-heading-3 font-serif italic text-forest-700 leading-snug">
                    "I build businesses not just to succeed, but to connect — to bring Nigeria and the diaspora closer through meaningful enterprise."
                  </p>
                </blockquote>
              </Reveal>

              {/* Values */}
              <Reveal delay={200}>
                <div className="mt-12">
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-6">What drives the work</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { icon: Heart, title: 'Authenticity', text: 'Genuine service over flashy promises.' },
                      { icon: Globe, title: 'Connection', text: 'Bridging Nigeria and the diaspora.' },
                      { icon: Target, title: 'Excellence', text: 'A high standard across every venture.' },
                    ].map((item) => (
                      <div key={item.title} className="border-t border-charcoal-700/15 pt-4">
                        <item.icon size={20} className="text-gold-500 mb-3" />
                        <p className="text-sm font-semibold text-forest-700">{item.title}</p>
                        <p className="text-xs text-charcoal-400 mt-1">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-36 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Career Timeline"
            title="The path so far."
            description="Key milestones in Ayo's professional and entrepreneurial journey."
            className="mb-14"
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400/30 to-transparent lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row lg:justify-end' : 'lg:flex-row-reverse lg:justify-end'}`}>
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-ivory-100 z-10" />
                    <div className={`pl-12 lg:pl-0 lg:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                      <p className="text-xs uppercase tracking-[0.18em] text-gold-600 font-semibold mb-2">{item.year}</p>
                      <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-2">{item.title}</h3>
                      <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures links */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Ventures"
            title="Explore the businesses."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { ...ventureFeature.entityImages, icon: Camera },
              { ...ventureFeature.liverylane, icon: Car },
              { ...ventureFeature.diasporaBall, icon: Calendar },
            ].map((venture, i) => (
              <Reveal key={venture.title} delay={i * 100}>
                <Link
                  to={venture.link}
                  className="group block relative overflow-hidden"
                >
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-forest-700/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <venture.icon size={20} className="text-gold-400 mb-3" />
                    <h3 className="text-heading-3 font-serif font-bold text-ivory-200 mb-1">{venture.title}</h3>
                    <p className="text-xs text-ivory-200/60 mb-3">{venture.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-400 group-hover:gap-2.5 transition-all duration-300">
                      Visit page <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-display-3 font-serif font-bold text-ivory-200 text-balance">
              Interested in collaborating?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lead text-ivory-200/60 text-pretty">
              From partnerships to speaking invitations, Ayo is open to conversations that create value.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <Button to="/contact" variant="secondary" size="lg">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
