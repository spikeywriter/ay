import { ArrowRight, Camera, Car, Calendar, Heart, Target, Globe, Instagram, Linkedin, Facebook, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { images, timeline, ventureFeature, siteConfig } from '@/data/siteData';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Ayo — Ayobami Magbagbeola"
        description="The story of Ayo Entity — entrepreneur, healthcare IT consultant, photographer, and proud son of Ogun State — building businesses that connect Nigeria and the diaspora."
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
                The Story of<br /><span className="text-gold-400 italic">Ayo Entity.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                Entrepreneur, healthcare IT consultant, photographer, and proud son of Ogun State — building businesses that connect Nigeria and the diaspora.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Early Life & Education */}
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
                      <p><span className="text-ivory-200/40">Name:</span> Ayobami J. Magbagbeola</p>
                      <p><span className="text-ivory-200/40">Known as:</span> Ayo Entity</p>
                      <p><span className="text-ivory-200/40">Born:</span> Ilaro, Ogun State, Nigeria</p>
                      <p><span className="text-ivory-200/40">Based:</span> Boston, Massachusetts</p>
                      <p><span className="text-ivory-200/40">Citizenship:</span> U.S. & Nigeria (dual)</p>
                      <p><span className="text-ivory-200/40">Field:</span> Healthcare IT & Entrepreneurship</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-4">Early Life</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 mb-6 text-balance">
                  From Ogun State to Boston.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami J. Magbagbeola was born in Ogun State, Nigeria, and raised between Abeokuta and Ibadan. At age eleven, he emigrated to Boston, Massachusetts, a move that would shape his worldview and ignite the cross-cultural entrepreneurial spirit that defines him today. He graduated from Tech Boston Academy in 2006.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <p className="eyebrow mt-10 mb-4">Education</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami pursued his education with the same determination he brings to business. After exploring several colleges, he enrolled at Bentley University in Waltham, Massachusetts, known for its prestigious business and analytics programs. He later transferred to the University of Massachusetts Boston, where he earned a degree in Criminal Justice, graduating magna cum laude in 2014.
                  </p>
                  <p>
                    During his time at UMass Boston, he was active in civic and academic initiatives, interned at the Massachusetts Commission Against Discrimination (MCAD), and went on to work with the United States Department of Homeland Security.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <p className="eyebrow mt-10 mb-4">Career in Healthcare IT</p>
              </Reveal>
              <Reveal delay={280}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami began his professional career as a Healthcare Information Technology (HIT) Consultant and went on to become a certified Epic Instructional Designer, Analyst and HIT Implementation Project Manager. His work in electronic health records (EHR) and healthcare IT consulting has helped improve the operational efficiency of healthcare institutions, carrying the same discipline and precision into every venture he builds.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Entrepreneurial Journey */}
      <section className="py-24 lg:py-36 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-4">The Entrepreneurial Journey</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 mb-6 text-balance">
                  From a missing photographer to a business empire.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami's entrepreneurial story began in Boston's nightlife scene, where he promoted events through Entity Entertainment & AfriQue Events, bringing some of Africa's biggest acts — P-Square, Davido, Wizkid, Basketmouth, and Mr. Ibu — to Boston stages. When a hired photographer failed to show up to one of his events in 2009, Ayobami bought the cheapest DSLR at Best Buy the following Monday and vowed never to rely on another photographer again. That vow became Entity Images, today an award-winning photography and event production company trusted by institutions like Harvard Business School, Tufts Medical Center, and UMass, and by notable figures including Mo Abudu and Cuba Gooding Jr.
                  </p>
                  <p>
                    From Boston, his vision expanded back home to Nigeria: LiveryLane, a luxury black car and chauffeur service in Lagos and the preferred ground transportation choice of EbonyLife Place; and The Diaspora Ball, an annual celebration in Lagos bringing Nigerians at home and around the world together for one unforgettable night. His ventures operate under his parent company, Entity Management Group, which also includes Entity Properties.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal direction="left">
                <img
                  src={images.businessMeeting}
                  alt="Business and entrepreneurship"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Business */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal direction="right">
                <img
                  src={images.realEstate}
                  alt="Real estate investments"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-4">Beyond Business</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 mb-6 text-balance">
                  Real estate and agriculture.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    Ayobami is an active real estate investor with rental properties across Detroit, Boston, and Atlanta, focused on providing quality housing while building long-term wealth. In Ogun State, Nigeria, he owns and operates Feed-NG, a 5-hectare poultry farm dedicated to providing affordable protein and strengthening local food security through sustainable agricultural practices.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <blockquote className="mt-10 border-l-2 border-gold-400 pl-6">
                  <p className="text-heading-3 font-serif italic text-forest-700 leading-snug">
                    "Punctuality, creativity, and humility — the three qualities I credit for my success."
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life & Philosophy */}
      <section className="py-24 lg:py-36 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-4">Personal Life & Philosophy</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-heading-1 font-serif font-bold text-forest-700 mb-6 text-balance">
                  The best businesses don't just serve people — they connect them.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="space-y-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  <p>
                    A dual citizen of the United States and Nigeria, Ayobami's multicultural background shapes everything he builds. His philosophy is simple: punctuality, creativity, and humility, the three qualities he credits for his success. Whether documenting a once-in-a-lifetime celebration, chauffeuring an executive or families through Lagos, or bringing the global Nigerian family into one room each December, his work is anchored in one belief — that the best businesses don't just serve people; they connect them.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-12">
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-6">What drives the work</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { icon: Clock, title: 'Punctuality', text: 'Time is the one resource you can\'t recover.' },
                      { icon: Heart, title: 'Creativity', text: 'Finding something extraordinary in the ordinary.' },
                      { icon: Globe, title: 'Humility', text: 'Staying grounded while building across two worlds.' },
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

            <div className="lg:col-span-5">
              <Reveal direction="left">
                <img
                  src={images.feedNg}
                  alt="Feed-NG poultry farm"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Career Timeline"
            title="The path so far."
            description="Key milestones in Ayo's professional and entrepreneurial journey — from Ogun State to Boston to Lagos and beyond."
            className="mb-14"
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400/30 to-transparent lg:-translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row lg:justify-end' : 'lg:flex-row-reverse lg:justify-end'}`}>
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-ivory-200 z-10" />
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
      <section className="py-24 lg:py-36 bg-ivory-100">
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

      {/* Social Media */}
      <section className="py-16 lg:py-20 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10 text-center">
          <Reveal>
            <p className="eyebrow mb-6">Connect on Social</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center justify-center gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-charcoal-700/15 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-ivory-200 hover:border-forest-700 transition-all duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-charcoal-700/15 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-ivory-200 hover:border-forest-700 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-charcoal-700/15 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-ivory-200 hover:border-forest-700 transition-all duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </Reveal>
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
