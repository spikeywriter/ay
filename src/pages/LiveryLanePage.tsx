import { Car, ArrowUpRight, Shield, Clock, MapPin, Quote, Check, Users, Briefcase } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { images, siteConfig, liveryServices, liveryFleet } from '@/data/siteData';

export function LiveryLanePage() {
  return (
    <>
      <SEO
        title="LiveryLane — Luxury Black Car Service in Lagos, Nigeria"
        description="LiveryLane is an exclusive luxury black car and chauffeured vehicle service in Lagos, Nigeria. The preferred ground transportation partner for EbonyLife Place and the Nigerian diaspora."
        image={images.liveryHero}
        path="/liverylane"
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-forest-700">
        <div className="absolute inset-0">
          <img
            src={images.liveryHero}
            alt="Luxury chauffeur service in Lagos"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-800 via-forest-700/40 to-forest-700/30" />
        </div>
        <div className="relative w-full pb-16 lg:pb-24 pt-36">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <div className="max-w-2xl">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <Car size={24} className="text-gold-400" />
                  <p className="eyebrow-light">LiveryLane · Lagos, Nigeria</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                  Luxury Black Car<br /><span className="text-gold-400 italic">Service.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-lead text-ivory-200/70 max-w-lg text-pretty">
                  An exclusive luxury black car and chauffeured vehicle service in Lagos, delivering elegance, comfort, and professionalism at the highest standard.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10">
                  <Button href={siteConfig.ventureLinks.liverylane} variant="secondary" size="lg">
                    Visit LiveryLane.com
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
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
              "Elegance must be the right combination of distinction, naturalness, care and simplicity."
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-sm text-gold-400 uppercase tracking-[0.14em]">— Christian Dior</p>
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
                  src={images.liveryCar1}
                  alt="Professional chauffeur with luxury car"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="About LiveryLane"
                title="Luxury is not a symbol — it's an experience."
                description="LiveryLane is an exclusive Luxury Black Car and Chauffeured vehicle service based in Lagos, Nigeria, delivering elegance, comfort, and professionalism at the highest standard. As the preferred ground transportation partner for high-profile establishments including EbonyLife Place Resort, LiveryLane has become the number one choice for ground transportation among Nigerians in the diaspora."
              />
              <Reveal delay={200}>
                <p className="mt-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  At LiveryLane, luxury is not merely a symbol of status, it is an immersive experience. Every vehicle in the immaculately maintained fleet is paired with a professionally trained chauffeur, combining exceptional driving skill with discretion, etiquette, and an unwavering commitment to punctuality.
                </p>
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
            title="Every journey, elevated."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {liveryServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 100}>
                <div className="border-t border-charcoal-700/15 pt-6">
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-3">{service.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Chauffeurs */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="right">
              <img
                src={images.liveryService}
                alt="Professional chauffeur assisting client"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The Chauffeurs"
                title="Trained. Courteous. Discreet."
                dark
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-6">
                  {[
                    { title: 'Trained', text: 'Licensed, prompt, and seamless behind the wheel.' },
                    { title: 'Courteous', text: 'Impeccable presentation and service that exceeds expectations.' },
                    { title: 'Discreet', text: 'Privacy is paramount — as subtle as each client prefers.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 border-t border-ivory-200/10 pt-5">
                      <Check size={18} className="text-gold-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-ivory-200">{item.title}</p>
                        <p className="text-sm text-ivory-200/60 mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Fleet */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Fleet"
            title="Immaculately maintained. Exceptionally appointed."
            description="Every vehicle in the LiveryLane fleet is selected for comfort, presence, and reliability."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {liveryFleet.map((vehicle, i) => (
              <Reveal key={vehicle.name} delay={i * 100}>
                <div className="bg-ivory-100 p-6 lg:p-8 border border-charcoal-700/10 hover:border-gold-400/30 transition-colors duration-500">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-heading-3 font-serif font-bold text-forest-700">{vehicle.name}</h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-gold-600 font-semibold mt-1">{vehicle.type}</p>
                    </div>
                    <Car size={22} className="text-gold-400 shrink-0" />
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-charcoal-700/10">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-charcoal-400" />
                      <span className="text-xs text-charcoal-500">{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-charcoal-400" />
                      <span className="text-xs text-charcoal-500">{vehicle.bags}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service features */}
      <section className="py-20 lg:py-24 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Shield, title: 'Discretion', text: 'Professional, courteous chauffeurs who respect your privacy and time.' },
              { icon: Clock, title: 'Reliability', text: 'Dependable service planned around your schedule, not ours.' },
              { icon: MapPin, title: 'Lagos-wide', text: 'Coverage across Lagos for business, events, and personal travel.' },
            ].map((feature, i) => (
              <Reveal key={feature.title} delay={i * 100}>
                <div className="border-t border-charcoal-700/15 pt-6">
                  <feature.icon size={24} className="text-gold-500 mb-4" />
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-2">{feature.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interior */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src={images.liveryInterior}
                alt="Luxury car interior"
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="The Experience"
                title="Comfort meets composure."
                description="Every journey is approached with the same standard — a well-presented vehicle, a professional chauffeur, and the quiet confidence that comes from knowing the details are handled."
                dark
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-display-3 font-serif font-bold text-forest-700 text-balance">
              Arrive in style.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lead text-charcoal-500 text-pretty">
              Book your ride or explore the fleet at LiveryLane.com — the preferred ground transportation partner for discerning travelers in Lagos.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={siteConfig.ventureLinks.liverylane} variant="primary" size="lg">
                Visit LiveryLane.com
                <ArrowUpRight size={16} />
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Make an Enquiry
              </Button>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 text-sm text-charcoal-400">
              Instagram: <a href="https://www.instagram.com/theliverylane" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-500 transition-colors">@theliverylane</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
