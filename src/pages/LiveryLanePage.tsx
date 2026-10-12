import { useState, type FormEvent } from 'react';
import { Car, Shield, Clock, MapPin, Check, AlertCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { Field } from '@/components/Field';
import { images, siteConfig, formDisclaimer } from '@/data/siteData';

export function LiveryLanePage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', pickup: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please tell us about your transport needs.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', date: '', pickup: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <SEO
        title="LiveryLane — Luxury Chauffeur Services in Lagos"
        description="LiveryLane offers refined black-car and chauffeur services across Lagos. Discreet, dependable, and designed for a superior standard of ground travel."
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
                  <p className="eyebrow-light">LiveryLane · Lagos</p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display-2 font-serif font-bold text-ivory-200 text-balance leading-[1.08]">
                  Arrive with<br /><span className="text-gold-400 italic">distinction.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-lead text-ivory-200/70 max-w-lg text-pretty">
                  Luxury chauffeur and black-car services designed for those who expect discretion, reliability, and a superior standard of ground travel in Lagos.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10">
                  <Button to="/#enquiry" variant="secondary" size="lg" onClick={() => {
                    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Make an Enquiry
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Service features */}
      <section className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="The Service"
            title="Refined travel, every detail considered."
            description="LiveryLane provides professional chauffeur services with an emphasis on discretion, punctuality, and comfort — whether for business, events, or personal travel across Lagos."
            className="mb-14"
          />

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

      {/* Vehicle imagery */}
      <section className="py-24 lg:py-32 bg-forest-700 bg-grain">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Reveal direction="right">
              <div className="relative overflow-hidden">
                <img
                  src={images.liveryCar1}
                  alt="Professional chauffeur with luxury car"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal direction="left" delay={100}>
              <div className="relative overflow-hidden">
                <img
                  src={images.liveryService}
                  alt="Chauffeur assisting client"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

      {/* Enquiry form */}
      <section id="enquiry" className="py-24 lg:py-32 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Enquire"
                title="Plan your journey."
                description="Share your travel requirements and we'll be in touch to discuss the details. This is an enquiry — not a confirmed booking."
              />
              <Reveal delay={200}>
                <div className="mt-8 space-y-3 text-sm text-charcoal-500">
                  <p><span className="text-charcoal-400">Email:</span> {siteConfig.email}</p>
                  <p><span className="text-charcoal-400">Phone:</span> {siteConfig.phone}</p>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-6 text-xs text-charcoal-400 leading-relaxed max-w-sm">
                  {formDisclaimer}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              {status === 'success' ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-forest-700">
                    <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center mb-6">
                      <Check size={28} className="text-gold-400" />
                    </div>
                    <h3 className="text-heading-2 font-serif font-bold text-ivory-200 mb-3">Enquiry ready</h3>
                    <p className="text-sm text-ivory-200/60 max-w-sm">
                      Thank you for your interest. {formDisclaimer}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} className="bg-ivory-100 p-8 lg:p-10" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                      <Field label="Full Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} required placeholder="Your name" />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} required placeholder="you@email.com" />
                      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+234 ..." />
                      <Field label="Preferred Date" name="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} placeholder="DD / MM / YYYY" />
                      <div className="sm:col-span-2">
                        <Field label="Pickup Location" name="pickup" value={form.pickup} onChange={(v) => setForm({ ...form, pickup: v })} placeholder="Area or address in Lagos" />
                      </div>
                      <div className="sm:col-span-2">
                        <Field label="Your Requirements" name="message" type="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} error={errors.message} required placeholder="Tell us about your journey, duration, and any specific needs..." rows={4} />
                      </div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-red-500">
                        <AlertCircle size={16} />
                        <span>Please correct the highlighted fields above.</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="md" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
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
