import { Download, Mail, Phone, AlertCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { images, siteConfig } from '@/data/siteData';

export function PressMediaPage() {
  return (
    <>
      <SEO
        title="Press & Media — Ayo Entity"
        description="Media resources for journalists, publishers, interviewers, and event organisers. Contact Ayo Entity for interviews, features, and speaking opportunities."
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
                A resource for media professionals seeking interviews, commentary, or collaboration with Ayo Entity.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Approved bio */}
      <section className="py-24 lg:py-32 bg-ivory-200">
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
                eyebrow="Approved Biography"
                title="For media use."
                description="The following short biography is provided for editorial reference. Please confirm with Ayo's team before publication to ensure the most current version."
              />
              <Reveal delay={200}>
                <div className="mt-8 p-6 lg:p-8 bg-ivory-100 border-l-2 border-gold-400">
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">
                    Ayobami Magbagbeola, known professionally as Ayo Entity, is a healthcare IT consultant and entrepreneur based in Lagos, Nigeria. He is the founder of Entity Management Group, through which he oversees ventures in photography (Entity Images), luxury transport (LiveryLane), events (The Diaspora Ball), real estate (Entity Properties), and agriculture (Feed-NG). His work is defined by a commitment to connecting Nigeria and its global diaspora through enterprise.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-6 flex items-start gap-3 p-4 bg-gold-400/10 border border-gold-400/20">
                  <AlertCircle size={18} className="text-gold-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    This biography is a draft awaiting client approval. Please do not publish without confirmation. A formal, approved version will replace this placeholder.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Media appearances — placeholder */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Coverage & Appearances"
            title="Interviews and features."
            description="Verified media appearances, interviews, and features will be listed here as they become available."
            className="mb-14"
          />

          <Reveal>
            <div className="p-12 lg:p-16 text-center border border-dashed border-charcoal-700/20 bg-ivory-200">
              <p className="text-base text-charcoal-400 leading-relaxed max-w-md mx-auto">
                No press coverage has been supplied yet. This section will feature real interviews, publications, and appearances once verified.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="outline" size="md">
                  <Mail size={16} />
                  Request an Interview
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Press photos — placeholder */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Press Photographs"
            title="Downloadable images."
            description="High-resolution press photographs will be available for download here once supplied."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[images.heroPortrait, images.aboutSecondary, images.aboutContemplative].map((img, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden">
                  <img
                    src={img}
                    alt="Press photo placeholder"
                    className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-elegant"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-700/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-center">
                      <Download size={24} className="text-gold-400 mx-auto mb-2" />
                      <p className="text-xs uppercase tracking-[0.14em] text-ivory-200">Awaiting file</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-forest-700/60 to-transparent">
                    <p className="text-xs text-ivory-200/80">Press photo — pending approval</p>
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
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-ivory-200/70 hover:text-gold-400 transition-colors duration-300">
                    <Phone size={18} className="text-gold-400" />
                    <span className="text-sm">{siteConfig.phone}</span>
                  </a>
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
