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
} from '@/data/siteData';

export function HomePage() {
  return (
    <>
      <SEO
        title="Ayo Entity — Entrepreneur, Consultant & Founder"
        description="Healthcare IT consultant, entrepreneur, and founder building businesses that connect Nigeria and the diaspora. Explore Entity Images, LiveryLane, and The Diaspora Ball."
        image={images.heroPortrait}
        path="/"
      />

      {/* ──────────── Section 1: Hero ──────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-forest-700 bg-grain">
        {/* Background image */}
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

        {/* Content */}
        <div className="relative w-full pb-20 lg:pb-32 pt-32">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow-light mb-6 animate-fade-in">
                  Healthcare IT · Entrepreneur · Founder
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-1 font-serif font-bold text-ivory-200 text-balance leading-[1.05]">
                  Building Businesses.<br />
                  Connecting People.<br />
                  <span className="text-gold-400 italic">Creating Impact.</span>
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-ivory-200/40 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent" />
        </div>
      </section>

      {/* ──────────── Section 2: Credibility & Introduction ──────────── */}
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
                eyebrow="The Introduction"
                title={<>A bridge between ambition<br />and opportunity.</>}
                description="Ayo Entity is the professional identity of Ayobami Magbagbeola — a healthcare IT consultant and serial entrepreneur whose work spans technology, creative services, luxury transport, events, real estate, and agriculture."
              />
              <Reveal delay={200}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: Briefcase, label: 'Healthcare IT', sub: 'Consulting' },
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

      {/* ──────────── Section 3: About Ayo ──────────── */}
      <section className="py-24 lg:py-36 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <p className="eyebrow mb-4">About Ayo</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 text-balance">
                  An entrepreneurial journey rooted in purpose.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  From a foundation in healthcare IT consulting to building a portfolio of businesses that serve and celebrate communities, Ayo's work is defined by a commitment to quality, connection, and lasting value. His ventures share a common thread — bridging Nigeria and the global diaspora through enterprise that matters.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <blockquote className="mt-8 border-l-2 border-gold-400 pl-6">
                  <p className="text-heading-3 font-serif italic text-forest-700 leading-snug">
                    "Business is more than commerce. It's how we build bridges between people, places, and possibilities."
                  </p>
                </blockquote>
              </Reveal>
              <Reveal delay={320}>
                <Link
                  to="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-forest-700 hover:text-gold-600 transition-colors duration-300 group"
                >
                  Read the full story
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal direction="left">
                <div className="relative">
                  <img
                    src={images.aboutPortrait}
                    alt="Ayo Entity portrait"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-charcoal-700/10" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── Section 4: Featured Ventures ──────────── */}
      <section id="ventures" className="py-24 lg:py-36 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Featured Ventures"
            title={<>Three businesses, one vision.</>}
            description="Each venture serves a distinct audience while sharing a commitment to excellence, professionalism, and the Nigeria–diaspora connection."
            dark
            align="center"
            className="mb-16 lg:mb-20"
          />

          <div className="space-y-8 lg:space-y-12">
            {/* Entity Images */}
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

            {/* LiveryLane — reversed */}
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
                    Discover LiveryLane
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

            {/* Diaspora Ball */}
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
                    The Diaspora Ball 2026
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────── Section 5: Beyond Business ──────────── */}
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

      {/* ──────────── Section 6: Journey & Milestones ──────────── */}
      <section className="py-24 lg:py-36 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Journey"
            title="Milestones along the way."
            description="A snapshot of the ventures and professional chapters that have shaped Ayo's path."
            className="mb-14"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400/30 to-transparent lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row lg:justify-end' : 'lg:flex-row-reverse lg:justify-end'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-ivory-100 z-10" />

                    {/* Content */}
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

      {/* ──────────── Section 7: Press & Recognition ──────────── */}
      <section className="py-24 lg:py-36 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Press & Media"
                title="An open invitation to the press."
                description="Journalists, publishers, and event organisers are welcome to reach out for interviews, features, and speaking opportunities."
                dark
              />
              <Reveal delay={200}>
                <Link
                  to="/press-media"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 hover:text-gold-300 transition-colors duration-300 group"
                >
                  Visit the media page
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Reveal>
            </div>

            <Reveal direction="left" delay={120}>
              <div className="relative">
                <img
                  src={images.pressMicrophone}
                  alt="Press and media"
                  className="w-full aspect-[5/4] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-700/80 to-transparent">
                  <p className="text-sm text-ivory-200/70 italic">
                    Media coverage and verified press appearances will be listed here as they become available.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ──────────── Section 8: Final Call to Action ──────────── */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <Quote size={32} className="text-gold-400 mx-auto mb-6" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-3 font-serif font-bold text-forest-700 text-balance">
                Let's build something meaningful together.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lead text-charcoal-500 text-pretty">
                Whether it's a business partnership, a media invitation, a photography enquiry, or an introduction — every meaningful connection starts with a conversation.
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
