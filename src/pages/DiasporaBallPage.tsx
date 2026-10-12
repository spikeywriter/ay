import { useState, type FormEvent } from 'react';
import { Calendar, MapPin, Clock, Sparkles, Check, ArrowUpRight, Quote, Globe, Heart, Users, Music } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { Field } from '@/components/Field';
import {
  images,
  diasporaBallInfo,
  diasporaTestimonials,
  siteConfig,
  formDisclaimer,
} from '@/data/siteData';

export function DiasporaBallPage() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '' });
    }, 1500);
  };

  const eventDetails = [
    { icon: Calendar, label: 'Date', value: diasporaBallInfo.date },
    { icon: MapPin, label: 'Venue', value: diasporaBallInfo.venue },
    { icon: Clock, label: 'Time', value: diasporaBallInfo.time },
    { icon: Sparkles, label: 'Dress Code', value: diasporaBallInfo.dressCode },
  ];

  const whyAttend = [
    {
      icon: Globe,
      title: 'Global Connections',
      text: 'Meet Nigerians from Lagos and around the world: founders, professionals, creatives, executives, and changemakers, in a room designed for genuine connection.',
    },
    {
      icon: Sparkles,
      title: 'Culture, Reimagined',
      text: 'Experience contemporary Nigerian culture through fashion, food, music, and entertainment — celebrating home with a global perspective.',
    },
    {
      icon: Heart,
      title: 'Celebrate Home',
      text: 'Come home to the music, the people, the energy, and the culture.',
    },
    {
      icon: Users,
      title: 'The People in the Room',
      text: 'An accomplished global Nigerian community across industries, cities, and generations. Come with your circle. Leave with a bigger one.',
    },
    {
      icon: Music,
      title: 'A Night Worth Dressing For',
      text: 'An elevated evening of exceptional food, entertainment, style, and celebration — one of the standout experiences of December in Lagos.',
    },
    {
      icon: Globe,
      title: 'Connections That Travel',
      text: 'From friendships to collaborations and business opportunities, some of the best connections happen when Nigerians from different worlds find themselves in the same room.',
    },
  ];

  return (
    <>
      <SEO
        title="The Diaspora Ball 2026 — Where Ambition Meets Elegance · Lagos"
        description="The Diaspora Ball is a Nigerian diaspora event in Lagos every December. One night. Nigerians from around the world. Culture, connection, celebration. December 28, 2026 at the Oriental Hotel, Lagos."
        image={images.diasporaHero}
        path="/diaspora-ball"
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.diasporaHero}
            alt="The Diaspora Ball — elegant gala event"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-800 via-forest-700/50 to-forest-700/30" />
        </div>
        <div className="relative w-full pb-16 lg:pb-24 pt-36">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow-light mb-6">The Diaspora Ball · {diasporaBallInfo.tagline}</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-1 font-serif font-bold text-ivory-200 text-balance leading-[1.05]">
                  Where ambition meets<br /><span className="text-gold-400 italic">elegance.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                  One night. Nigerians from around the world. Culture. Connection. Celebration — in one room, in Lagos.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button href={siteConfig.ventureLinks.diasporaBall} variant="secondary" size="lg">
                    Visit DiasporaBall.com
                    <ArrowUpRight size={16} />
                  </Button>
                  <Button to="/#mailing" variant="outline" size="lg" className="!text-ivory-200 !border-ivory-200/30 hover:!bg-ivory-200 hover:!text-forest-700 hover:!border-ivory-200" onClick={() => {
                    document.getElementById('mailing')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Get on the List
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About the Ball */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="About the Ball"
                title="Where the global Nigerian community comes together."
                description="The Diaspora Ball is a Nigerian diaspora event bringing together Nigerians at home and around the world for an unforgettable night of culture, conversation, food, fashion, music, and celebration. Held in Lagos every December, it is where the global Nigerian community comes together, where old connections are renewed, new ones are made, and different stories, experiences, and perspectives meet in one room."
              />
            </div>
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <img
                  src={images.diasporaEvent1}
                  alt="Elegant evening event reception"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Event details */}
      <section id="details" className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="text-center mb-14">
            <Reveal>
              <p className="eyebrow-light mb-4">The Next Edition — Diaspora Ball 2026</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-heading-1 font-serif font-bold text-ivory-200 text-balance">
                {diasporaBallInfo.tagline}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {eventDetails.map((detail, i) => (
              <Reveal key={detail.label} delay={i * 80}>
                <div className="text-center p-8 border border-ivory-200/10 hover:border-gold-400/30 transition-colors duration-500">
                  <detail.icon size={28} className="text-gold-400 mx-auto mb-4" />
                  <p className="text-xs uppercase tracking-[0.18em] text-ivory-200/40 font-semibold mb-2">{detail.label}</p>
                  <p className="text-base font-serif text-ivory-200">{detail.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Why Attend"
            title="Six reasons to be in the room."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {whyAttend.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t border-charcoal-700/15 pt-6">
                  <item.icon size={24} className="text-gold-500 mb-4" />
                  <h3 className="text-heading-3 font-serif font-bold text-forest-700 mb-3">{item.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The First Edition */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <Reveal direction="right">
                <img
                  src={images.diasporaEvent2}
                  alt="The first Diaspora Ball — December 2025"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="The First Edition — December 2025"
                title="Only the beginning."
                description="The inaugural Diaspora Ball brought Nigerians at home and across the diaspora together in Lagos for an unforgettable night of culture, connection, and celebration. From fashion and food to music, entertainment, and conversations that became new connections, the first edition brought the spirit of Nigeria and its global community into one room."
              />
              <Reveal delay={200}>
                <p className="mt-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  It was the first Ball, and only the beginning.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Atmosphere"
            title="A glimpse of the evening."
            dark
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: images.diasporaEvent3, alt: 'Group in elegant evening wear posing together' },
              { src: images.diasporaEvent4, alt: 'Couple in formal attire against an illuminated wall' },
              { src: images.diasporaEvent5, alt: 'Lively dinner event with live music' },
              { src: images.diasporaEvent1, alt: 'Elegant evening event reception' },
            ].map((img, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="group relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-1000 ease-elegant group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-700/0 group-hover:bg-forest-700/20 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Voices from the first Ball."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {diasporaTestimonials.map((testimonial, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-ivory-100 p-8 lg:p-10 flex flex-col h-full">
                  <Quote size={28} className="text-gold-400 mb-6" />
                  <p className="text-base text-charcoal-500 leading-relaxed italic text-pretty flex-1">
                    {testimonial.quote}
                  </p>
                  <div className="mt-8 pt-6 border-t border-charcoal-700/10">
                    <p className="text-sm font-semibold text-forest-700">{testimonial.name}</p>
                    <p className="text-xs text-charcoal-400 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mailing List CTA */}
      <section id="mailing" className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Mailing List"
                title="Coming home? Get on the list."
                description="Your inside track to The Diaspora Ball and December in Lagos — first access to tickets, event announcements, exclusive experiences, and curated recommendations for making the most of the season."
                dark
              />
            </div>

            <div className="lg:col-span-7">
              {status === 'success' ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-ivory-200">
                    <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center mb-6">
                      <Check size={28} className="text-gold-600" />
                    </div>
                    <h3 className="text-heading-2 font-serif font-bold text-forest-700 mb-3">You're on the list</h3>
                    <p className="text-sm text-charcoal-500 max-w-sm">
                      Thank you for joining the mailing list. We'll be in touch with updates as The Diaspora Ball 2026 approaches.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-gold-600 hover:text-gold-500 transition-colors"
                    >
                      Submit another email
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} className="bg-ivory-200 p-8 lg:p-10" noValidate>
                    <Field label="Full Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} required placeholder="Your full name" />
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} required placeholder="you@email.com" />

                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-red-500">
                        <span>Please correct the highlighted fields above.</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="md" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Joining...' : 'Join the List'}
                      {status !== 'loading' && <ArrowUpRight size={16} />}
                    </Button>
                    <p className="mt-6 text-xs text-charcoal-400 leading-relaxed">
                      {formDisclaimer}
                    </p>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
