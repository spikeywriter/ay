import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Sprout,
  Camera,
  Car,
  Calendar,
  Mail,
  Sparkles,
  Briefcase,
  Globe,
  Quote,
  Check,
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import {
  siteConfig,
  images,
  ventureFeature,
  additionalVentures,
  timeline,
  homeHighlights,
  featuredIn,
} from '@/data/siteData';

export function HomePage() {
  return (
    <>
      <SEO
        title="Ayo Entity — Entrepreneur, Consultant & Founder"
        description="Ayobami Magbagbeola, 'Ayo Entity' is a Nigerian-American healthcare IT consultant and serial entrepreneur. Founder of Entity Images, LiveryLane, and The Diaspora Ball."
        image={images.heroPortrait}
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-forest-700 bg-grain">
        <div className="absolute inset-0">
          <img
            src={images.heroPortrait}
            alt="Portrait of Ayo Entity"
            className="h-full w-full object-cover object-center opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-800 via-forest-700/60 to-forest-700/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-700/80 via-transparent to-transparent" />
        </div>

        <div className="relative w-full pb-20 lg:pb-32 pt-32">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow-light mb-6 animate-fade-in">
                  {siteConfig.fullName} — "{siteConfig.name}"
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-1 font-serif font-bold text-ivory-200 text-balance leading-[1.05]">
                  Entrepreneur. Consultant.<br />
                  Creator. Connector.
                </h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                  {siteConfig.heroSub}
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button to="/#ventures" variant="secondary" size="lg">
                    Explore My Ventures
                  </Button>
                  <Button to="/about" variant="outline" size="lg" className="!text-ivory-200 !border-ivory-200/30 hover:!bg-ivory-200 hover:!text-forest-700 hover:!border-ivory-200">
                    Discover My Story
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-ivory-200/40 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <div className="relative">
                  <img
                    src={images.lagosSkyline}
                    alt="Lagos city skyline"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-forest-700 p-6 lg:p-8 max-w-[200px]">
                    <p className="text-4xl font-serif font-bold text-gold-400">Nigeria</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-ivory-200/60 mt-1">& the Diaspora</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who I Am"
                title={<>A bridge between<br />two worlds.</>}
                description="Born in Ogun State, Nigeria, and raised in Boston from age eleven, Ayobami lives at the intersection of two worlds — and has built his career connecting them. By day, he improves how healthcare institutions work as a certified Epic Instructional Designer and HIT Implementation Project Manager. By passion, he builds businesses that celebrate culture, capture life's most meaningful moments, and move people — literally and figuratively — between home and the world."
              />
              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: Briefcase, label: 'Healthcare IT', sub: 'Epic-certified consultant' },
                    { icon: Globe, label: 'Nigeria ↔ Diaspora', sub: 'Cross-cultural enterprise' },
                    { icon: Sparkles, label: 'Five Ventures', sub: 'Across industries' },
                  ].map((item) => (
                    <div key={item.label} className="border-t border-charcoal-700/15 pt-4">
                      <item.icon size={20} className="text-gold-500 mb-3" />
                      <p className="text-sm font-semibold text-forest-700">{item.label}</p>
                      <p className="text-xs text-charcoal-400 mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ventures */}
      <section id="ventures" className="py-24 lg:py-36 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="My Ventures"
            title={<>Three businesses, one vision.</>}
            description="Each venture serves a distinct audience while sharing a commitment to excellence, professionalism, and the Nigeria–diaspora connection."
            dark
            align="center"
            className="mb-16 lg:mb-20"
          />

          <div className="space-y-8 lg:space-y-12">
            <Reveal>
              <Link
                to={ventureFeature.entityImages.link}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ventureFeature.entityImages.image}
                    alt={ventureFeature.entityImages.title}
                    className="w-full aspect-[16/11] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Camera size={22} className="text-gold-400" />
                    <p className="eyebrow-light">{ventureFeature.entityImages.tagline}</p>
                  </div>
                  <h3 className="text-display-3 font-serif font-bold text-ivory-200 mb-4">
                    {ventureFeature.entityImages.title}
                  </h3>
                  <p className="text-lead text-ivory-200/60 text-pretty">
                    {ventureFeature.entityImages.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 group-hover:gap-3 transition-all duration-300">
                    Explore Entity Images
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                to={ventureFeature.liverylane.link}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Car size={22} className="text-gold-400" />
                    <p className="eyebrow-light">{ventureFeature.liverylane.tagline}</p>
                  </div>
                  <h3 className="text-display-3 font-serif font-bold text-ivory-200 mb-4">
                    {ventureFeature.liverylane.title}
                  </h3>
                  <p className="text-lead text-ivory-200/60 text-pretty">
                    {ventureFeature.liverylane.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 group-hover:gap-3 transition-all duration-300">
                    Explore LiveryLane
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="order-1 lg:order-2 relative overflow-hidden">
                  <img
                    src={ventureFeature.liverylane.image}
                    alt={ventureFeature.liverylane.title}
                    className="w-full aspect-[16/11] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                to={ventureFeature.diasporaBall.link}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ventureFeature.diasporaBall.image}
                    alt={ventureFeature.diasporaBall.title}
                    className="w-full aspect-[16/11] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={22} className="text-gold-400" />
                    <p className="eyebrow-light">{ventureFeature.diasporaBall.tagline}</p>
                  </div>
                  <h3 className="text-display-3 font-serif font-bold text-ivory-200 mb-4">
                    {ventureFeature.diasporaBall.title}
                  </h3>
                  <p className="text-lead text-ivory-200/60 text-pretty">
                    {ventureFeature.diasporaBall.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 group-hover:gap-3 transition-all duration-300">
                    Explore The Diaspora Ball
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-20 lg:py-28 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center mb-12">Highlights</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {homeHighlights.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-center">
                  <Check size={18} className="text-gold-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-forest-700 leading-snug">{item.label}</p>
                  <p className="text-xs text-charcoal-400 mt-1 leading-snug">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Business */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Beyond Business"
            title="Additional interests."
            description="Ayo's entrepreneurial reach extends into real estate and agriculture — sectors that reflect a commitment to building and sustaining communities."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {additionalVentures.map((venture, i) => {
              const Icon = venture.icon === 'Building2' ? Building2 : Sprout;
              return (
                <Reveal key={venture.title} delay={i * 120}>
                  <div className="group relative overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={venture.image}
                        alt={venture.title}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-700/70 via-forest-700/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={20} className="text-gold-400" />
                        <h3 className="text-heading-3 font-serif font-bold text-ivory-200">{venture.title}</h3>
                      </div>
                      <p className="text-sm text-ivory-200/70 max-w-md text-pretty">{venture.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 lg:py-20 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow-light text-center mb-10">As Featured In</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-16 gap-y-4">
              {featuredIn.map((outlet) => (
                <span
                  key={outlet}
                  className="text-lg lg:text-xl font-serif text-ivory-200/40 hover:text-gold-400 transition-colors duration-300 cursor-default"
                >
                  {outlet}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <Quote size={32} className="text-gold-400 mx-auto mb-6" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-3 font-serif font-bold text-forest-700 text-balance">
                Have a project, partnership, or story in mind?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lead text-charcoal-500 text-pretty">
                Whether it's a wedding on another continent, a ride across Lagos, an event that brings the diaspora home, or a conversation about what's next — I'd love to hear from you.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary" size="lg">
                  <Mail size={16} />
                  Get in Touch
                </Button>
                <Button to="/about" variant="ghost" size="lg">
                  Learn More About Ayo
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
