import { Download, Mail, Phone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import {
  images,
  siteConfig,
  pressHighlights,
  mediaBioShort,
  mediaBioLong,
} from '@/data/siteData';

export function PressMediaPage() {
  return (
    <>
      <SEO
        title="Press & Media — Ayo Entity"
        description="Ayobami Magbagbeola has been featured in outlets spanning business, culture, weddings, and the arts. Media bios, coverage highlights, and press contact information."
        image={images.pressHero}
        path="/press-media"
      />

      {/* Hero */}
      <section className="relative pt-36 lg:pt-44 pb-24 lg:pb-32 bg-forest-700 bg-grain overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={images.pressHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-forest-700/50" />
        </div>
        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow-light mb-6">Press & Media</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                For journalists,<br />publishers, and<br /><span className="text-gold-400 italic">event organisers.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                Ayobami Magbagbeola has been featured in outlets spanning business, culture, weddings, and the arts — from Vanguard and BellaNaija to Boston Voyager, WeddingWire, Zola, Punch, The Guardian and Yelp. His work sits at the crossroads of entrepreneurship, culture, and community, and he is available for interviews, features, podcasts, and speaking engagements.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coverage Highlights */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Coverage Highlights"
            title="Featured and reviewed."
            description="Selected media coverage, features, and verified professional profiles."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pressHighlights.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-ivory-100 p-6 lg:p-8 border border-charcoal-700/10 hover:border-gold-400/30 transition-colors duration-500 h-full flex flex-col">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold-600 font-semibold mb-3">{item.outlet}</p>
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty flex-1">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Bios */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <img
                  src={images.pressInterview}
                  alt="Press interview setting"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Media Bios"
                title="For editorial use."
                description="The following biographies are provided for editorial reference."
              />

              <Reveal delay={200}>
                <div className="mt-8 p-6 lg:p-8 bg-ivory-200 border-l-2 border-gold-400">
                  <p className="text-xs uppercase tracking-[0.14em] text-gold-600 font-semibold mb-3">Short Bio (~50 words)</p>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">
                    {mediaBioShort}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-6 p-6 lg:p-8 bg-ivory-200 border-l-2 border-gold-400">
                  <p className="text-xs uppercase tracking-[0.14em] text-gold-600 font-semibold mb-3">Long Bio (~150 words)</p>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">
                    {mediaBioLong}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Press photos */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Press Photographs"
            title="Downloadable images."
            description="High-resolution press photographs for editorial use."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[images.heroPortrait, images.aboutSecondary, images.aboutContemplative].map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden">
                  <img
                    src={img}
                    alt="Press photo"
                    className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-elegant"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-700/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center">
                      <Download size={24} className="text-gold-400 mx-auto mb-2" />
                      <p className="text-xs uppercase tracking-[0.14em] text-ivory-200">Download</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Media Contact"
                title="Reach out."
                description="For interview requests, commentary, speaking invitations, or media partnerships."
                dark
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-4">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-ivory-200/70 hover:text-gold-400 transition-colors duration-300 group">
                    <Mail size={18} className="text-gold-400" />
                    <span className="text-sm">{siteConfig.email}</span>
                  </a>
                  <a href={`mailto:${siteConfig.emailAlt}`} className="flex items-center gap-3 text-ivory-200/70 hover:text-gold-400 transition-colors duration-300 group">
                    <Mail size={18} className="text-gold-400" />
                    <span className="text-sm">{siteConfig.emailAlt}</span>
                  </a>
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">
                    <Phone size={18} className="text-gold-400" />
                    <span className="text-sm">{siteConfig.phone}</span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-8">
                  <Button to="/contact" variant="secondary" size="md">
                    <Mail size={16} />
                    Request an Interview
                  </Button>
                </div>
              </Reveal>
            </div>
            <Reveal direction="left" delay={120}>
              <img
                src={images.pressMicrophone}
                alt="Press and media microphones"
                className="w-full aspect-[5/4] object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
