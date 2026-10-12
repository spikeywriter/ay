import { Camera, ArrowRight, Calendar, Heart, Sparkles } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { images, siteConfig } from '@/data/siteData';

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
        title="Entity Images — Wedding & Event Photography by Ayo Entity"
        description="Entity Images specialises in weddings, events, and milestone celebrations. Editorial photography with genuine emotion, established in 2009."
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
                  <p className="eyebrow-light">Entity Images · Est. 2009</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                  Stories told through<br /><span className="text-gold-400 italic">light and moment.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-lead text-ivory-200/70 max-w-lg text-pretty">
                  A photography business dedicated to weddings, events, and the milestones that deserve to be remembered with beauty and feeling.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About the service */}
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
                eyebrow="The Service"
                title="Photography with an editorial eye."
                description="Entity Images approaches every wedding and event as a story — capturing the grand moments and the quiet ones, the planned and the spontaneous, with a style that blends editorial composition with genuine emotion."
              />
              <Reveal delay={200}>
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

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work."
            description="A gallery showcasing the range and quality of Entity Images photography. These are illustrative images representing the style and standard of the work."
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

          <Reveal delay={200}>
            <p className="mt-12 text-center text-xs text-charcoal-400 max-w-lg mx-auto">
              Note: The images above are licensed photographs used to represent the style and quality of Entity Images work. They will be replaced with the studio's actual portfolio prior to launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-display-3 font-serif font-bold text-ivory-200 text-balance">
              Have an event to capture?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lead text-ivory-200/60 text-pretty">
              Enquire about availability, packages, and booking for weddings and events.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg">
                Make an Enquiry
              </Button>
              <Button href={siteConfig.social.instagram} variant="outline" size="lg" className="!text-ivory-200 !border-ivory-200/30 hover:!bg-ivory-200 hover:!text-forest-700 hover:!border-ivory-200">
                <ArrowRight size={16} />
                View on Instagram
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
