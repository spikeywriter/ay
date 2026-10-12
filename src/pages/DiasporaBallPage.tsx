import { useState, type FormEvent } from 'react';
import { Calendar, MapPin, Clock, Sparkles, Check, AlertCircle, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { Field } from '@/components/Field';
import { images, diasporaBallInfo, formDisclaimer, enquiryCategories } from '@/data/siteData';

export function DiasporaBallPage() {
  const [form, setForm] = useState({ name: '', email: '', category: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.category) e.category = 'Please select how you would like to participate.';
    if (!form.message.trim()) e.message = 'Please tell us a bit more.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', category: '', message: '' });
    }, 1500);
  };

  const eventDetails = [
    { icon: Calendar, label: 'Date', value: diasporaBallInfo.date },
    { icon: MapPin, label: 'Venue', value: diasporaBallInfo.venue },
    { icon: Clock, label: 'Time', value: diasporaBallInfo.time },
    { icon: Sparkles, label: 'Dress Code', value: diasporaBallInfo.dressCode },
  ];

  const categoryOptions = [
    { value: 'guest', label: 'Interested in attending' },
    { value: 'sponsor', label: 'Sponsorship enquiry' },
    { value: 'partner', label: 'Partnership opportunity' },
    { value: 'media', label: 'Media / press' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      <SEO
        title="The Diaspora Ball 2026 — A Gala Connecting Nigeria & the Diaspora"
        description="The Diaspora Ball is an annual gala bringing together the Nigerian diaspora and the Lagos social scene. December 28, 2026 at the Oriental Hotel, Lagos. Black tie."
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
                <p className="eyebrow-light mb-6">The Diaspora Ball · 2026</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-1 font-serif font-bold text-ivory-200 text-balance leading-[1.05]">
                  An evening of<br /><span className="text-gold-400 italic">culture & connection.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 text-lead text-ivory-200/70 max-w-xl text-pretty">
                  A formal gala bringing the Nigerian diaspora and the Lagos social scene together for a night of celebration, ambition, and shared identity.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button to="/#enquire" variant="secondary" size="lg" onClick={() => {
                    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Express Interest
                  </Button>
                  <Button to="/#details" variant="outline" size="lg" className="!text-ivory-200 !border-ivory-200/30 hover:!bg-ivory-200 hover:!text-forest-700 hover:!border-ivory-200" onClick={() => {
                    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Event Details
                  </Button>
                </div>
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
              <p className="eyebrow-light mb-4">Event Information</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-heading-1 font-serif font-bold text-ivory-200 text-balance">The details.</h2>
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

          <Reveal delay={300}>
            <p className="mt-10 text-center text-xs text-ivory-200/40 max-w-lg mx-auto">
              Please verify all event details with the organisers before making arrangements. Ticketing information will be published once confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="The Purpose"
                title="More than a gala."
                description="The Diaspora Ball exists to celebrate and strengthen the bond between Nigerians at home and abroad — a space where culture, ambition, and community converge in a single, memorable evening."
              />
              <Reveal delay={200}>
                <p className="mt-6 text-base text-charcoal-500 leading-relaxed text-pretty">
                  Each year, the event brings together professionals, creatives, entrepreneurs, and community leaders for a night of formal celebration and meaningful connection. It is a testament to the enduring ties between Lagos and the global diaspora.
                </p>
              </Reveal>
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

      {/* Gallery */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Atmosphere"
            title="A glimpse of the evening."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { src: images.diasporaEvent2, alt: 'Stylish couple in formal attire at a glamorous event' },
              { src: images.diasporaEvent3, alt: 'Group in elegant evening wear posing together' },
              { src: images.diasporaEvent4, alt: 'Couple in formal attire against an illuminated wall' },
              { src: images.diasporaEvent5, alt: 'Lively dinner event with live music' },
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
          <Reveal delay={200}>
            <p className="mt-10 text-center text-xs text-charcoal-400 max-w-lg mx-auto">
              Images are illustrative and represent the atmosphere of the event. Official photography from previous editions will be added as it becomes available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Express Interest"
                title="Join the guest list."
                description="Whether you're interested in attending, sponsoring, partnering, or covering the event — we'd love to hear from you."
                dark
              />
              <Reveal delay={200}>
                <p className="mt-6 text-xs text-ivory-200/40 leading-relaxed max-w-sm">
                  {formDisclaimer}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              {status === 'success' ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-ivory-200">
                    <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center mb-6">
                      <Check size={28} className="text-gold-600" />
                    </div>
                    <h3 className="text-heading-2 font-serif font-bold text-forest-700 mb-3">Thank you</h3>
                    <p className="text-sm text-charcoal-500 max-w-sm">
                      Your interest has been noted. {formDisclaimer}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-gold-600 hover:text-gold-500 transition-colors"
                    >
                      Submit another response
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} className="bg-ivory-200 p-8 lg:p-10" noValidate>
                    <Field label="Full Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} required placeholder="Your name" />
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} required placeholder="you@email.com" />
                    <Field label="I am interested as..." name="category" type="select" value={form.category} onChange={(v) => setForm({ ...form, category: v })} error={errors.category} required options={categoryOptions} />
                    <Field label="Message" name="message" type="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} error={errors.message} required placeholder="Tell us about yourself and your interest in The Diaspora Ball..." rows={4} />

                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-red-500">
                        <AlertCircle size={16} />
                        <span>Please correct the highlighted fields above.</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="md" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Submitting...' : 'Submit'}
                      {status !== 'loading' && <ArrowRight size={16} />}
                    </Button>
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
