import { Camera, ArrowUpRight, Calendar, Heart, Sparkles, Quote, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import {
  images,
  siteConfig,
  entityImagesServices,
  entityImagesClients,
  entityImagesTestimonial,
  featuredIn,
} from '@/data/siteData';

const galleryImages = [
  { src: images.entityImages1, alt: 'Bride and groom sharing an intimate moment by the window', tall: true },
  { src: images.entityImages2, alt: 'Nighttime wedding portrait of a couple', tall: false },
  { src: images.entityImages8, alt: 'Bride and groom in a beautifully lit historic venue', tall: false },
  { src: images.entityImages4, alt: 'Groom embracing smiling bride near flower decoration', tall: true },
  { src: images.entityImages5, alt: 'Wedding portrait of a couple sitting together', tall: false },
  { src: images.entityImages3, alt: 'Bride and groom sharing a kiss surrounded by sparklers', tall: false },
  { src: images.entityImages7, alt: 'Bride and groom in a classic venue', tall: true },
  { src: images.entityImages6, alt: 'Couple sharing a moment by a large window', tall: false },
];

export function EntityImagesPage() {
  return (
    <>
      <SEO
        title="Entity Images — Award-Winning Wedding & Event Photography by Ayo Entity"
        description="Entity Images — international wedding and event photojournalism. Based in Boston, shooting worldwide since 2009. Trusted by Harvard Business School, Mo Abudu, and more."
        image={images.entityImagesHero}
        path="/entity-images"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.entityImagesHero}
            alt="Wedding photography by Entity Images"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-forest-700/20 to-forest-700/40" />
        </div>
        <div className="relative w-full pb-16 lg:pb-24 pt-36">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <div className="max-w-2xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <Camera size={24} className="text-gold-400" />
                  <p className="eyebrow-light">Entity Images · Est. 2009 · Boston</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                  International wedding &<br />event <span className="text-gold-400 italic">photojournalism.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-lead text-ivory-200/70 max-w-lg text-pretty">
                  Based in Boston, shooting the world — capturing weddings and events across the U.S., Europe, Africa, and the Caribbean since 2009.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 lg:py-20 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Reveal>
            <Quote size={28} className="text-gold-400 mx-auto mb-6" />
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="text-heading-2 font-serif italic text-ivory-200 text-balance leading-snug">
              "There is one thing the photograph must contain, the humanity of the moment."
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-sm text-gold-400 uppercase tracking-[0.14em]">— Robert Frank</p>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <Reveal direction="right">
                <img
                  src={images.entityImages1}
                  alt="Bride and groom intimate moment"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="About Entity Images"
                title="The art of observation."
                description="Founded in 2009 by Ayobami Magbagbeola, Entity Images is an award-winning photography and event production company based in Boston, Massachusetts. Though rooted in Boston, the team travels worldwide — shooting weddings and events across the continental United States, Europe, Africa, and the Caribbean."
              />
              <Reveal delay={200}>
                <p className="mt-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  Photojournalism is at the heart of the Entity Images approach: capturing every facet of a special day as it unfolds, bringing documentary authenticity to images that remain meaningful for decades to come. To Entity Images, photography is the art of observation, finding something extraordinary in an ordinary place. It has little to do with the things you see, and everything to do with the way you see them.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: Calendar, label: 'Weddings', sub: 'Full-day coverage' },
                    { icon: Sparkles, label: 'Events', sub: 'Galas & celebrations' },
                    { icon: Heart, label: 'Portraits', sub: 'Milestone sessions' },
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

      {/* Services */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Services"
            title="What we cover."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entityImagesServices.map((service, i) => (
              <Reveal key={service} delay={i * 80}>
                <div className="flex items-start gap-3 border-t border-charcoal-700/15 pt-5">
                  <Check size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-forest-700 leading-snug">{service}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work."
            description="A gallery showcasing the range and quality of Entity Images photography."
            align="center"
            className="mb-14"
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 [&>*]:mb-4 lg:[&>*]:mb-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <div className="group relative overflow-hidden break-inside-avoid">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105 ${img.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-700/0 group-hover:bg-forest-700/20 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Selected Clients & Notable Figures"
            title="Trusted by institutions and individuals."
            dark
            align="center"
            className="mb-12"
          />
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-4 max-w-4xl mx-auto">
              {entityImagesClients.map((client) => (
                <span
                  key={client}
                  className="text-lg lg:text-xl font-serif text-ivory-200/50 hover:text-gold-400 transition-colors duration-300 cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 pt-8 border-t border-ivory-200/10 max-w-4xl mx-auto">
              <p className="eyebrow-light text-center mb-6">As Featured In</p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-4">
                {featuredIn.map((outlet) => (
                  <span
                    key={outlet}
                    className="text-base lg:text-lg font-serif text-ivory-200/40 hover:text-gold-400 transition-colors duration-300 cursor-default"
                  >
                    {outlet}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Quote size={32} className="text-gold-400 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="text-heading-2 font-serif italic text-forest-700 text-balance leading-snug text-center">
              {entityImagesTestimonial.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-center text-sm text-charcoal-500">
              — {entityImagesTestimonial.name}
            </p>
            <p className="text-center text-xs text-charcoal-400 mt-1">{entityImagesTestimonial.role}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-display-3 font-serif font-bold text-ivory-200 text-balance">
              Planning a wedding or event?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lead text-ivory-200/60 text-pretty">
              Entity Images is booking worldwide. Visit EntityImages.com to explore the portfolio and enquire about availability.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteConfig.ventureLinks.entityImages} variant="secondary" size="lg">
                Visit EntityImages.com
                <ArrowUpRight size={16} />
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="!text-ivory-200 !border-ivory-200/30 hover:!bg-ivory-200 hover:!text-forest-700 hover:!border-ivory-200">
                Make an Enquiry
              </Button>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 text-sm text-ivory-200/40">
              Instagram: <a href="https://www.instagram.com/entityimages" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors">@entityimages</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
