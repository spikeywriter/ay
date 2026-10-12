import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Check, AlertCircle, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { SectionHeading } from '@/components/SectionHeading';
import { Field } from '@/components/Field';
import { siteConfig, enquiryCategories, formDisclaimer } from '@/data/siteData';

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', category: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.category) e.category = 'Please select an enquiry category.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', category: '', message: '' });
    }, 1500);
  };

  const categoryOptions = enquiryCategories.map((cat) => ({ value: cat, label: cat }));

  return (
    <>
      <SEO
        title="Contact Ayo Entity — Business Enquiries & Partnerships"
        description="Get in touch with Ayo Entity for business partnerships, media enquiries, photography bookings, LiveryLane chauffeur services, or The Diaspora Ball."
        image={siteConfig.domain + '/favicon.svg'}
        path="/contact"
      />

      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-16 lg:pb-20 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-6">Let's Connect</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-display-2 font-serif font-bold text-forest-700 text-balance leading-[1.08]">
                Let's start a<br /><span className="text-gold-500 italic">conversation.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lead text-charcoal-500 max-w-xl text-pretty">
                Whether it's a wedding on another continent, a ride across Lagos & Nigeria, a ticket to The Diaspora Ball, a press inquiry, or a business idea worth exploring — the door is open.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="pb-24 lg:pb-36 bg-ivory-200">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact details */}
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="text-heading-3 font-serif font-bold text-forest-700 mb-6">Direct Contact</h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="space-y-5">
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-forest-700/5 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors duration-300">
                      <Mail size={18} className="text-forest-700 group-hover:text-gold-600 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-charcoal-600 group-hover:text-forest-700 transition-colors">{siteConfig.email}</span>
                  </a>
                  <a href={`mailto:${siteConfig.emailAlt}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-forest-700/5 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors duration-300">
                      <Mail size={18} className="text-forest-700 group-hover:text-gold-600 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-charcoal-600 group-hover:text-forest-700 transition-colors">{siteConfig.emailAlt}</span>
                  </a>
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-forest-700/5 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors duration-300">
                      <Phone size={18} className="text-forest-700 group-hover:text-gold-600 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-charcoal-600 group-hover:text-forest-700 transition-colors">{siteConfig.phone}</span>
                  </a>
                  {siteConfig.locations.map((loc) => (
                    <div key={loc} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-forest-700/5 flex items-center justify-center">
                        <MapPin size={18} className="text-forest-700" />
                      </div>
                      <span className="text-sm text-charcoal-600">{loc}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-10">
                  <h3 className="text-xs uppercase tracking-[0.18em] text-gold-600 font-semibold mb-4">Follow</h3>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                      { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                      { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full border border-charcoal-700/15 flex items-center justify-center text-forest-700 hover:bg-forest-700 hover:text-ivory-200 hover:border-forest-700 transition-all duration-300"
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 p-5 bg-gold-400/10 border border-gold-400/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-gold-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-charcoal-500 leading-relaxed">
                        For photography bookings, visit <a href={siteConfig.ventureLinks.entityImages} target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-500">EntityImages.com</a>
                      </p>
                      <p className="text-xs text-charcoal-500 leading-relaxed mt-1">
                        For chauffeur bookings in Lagos, visit <a href={siteConfig.ventureLinks.liverylane} target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-500">LiveryLane.com</a>
                      </p>
                      <p className="text-xs text-charcoal-500 leading-relaxed mt-1">
                        For Diaspora Ball tickets and announcements, visit <a href={siteConfig.ventureLinks.diasporaBall} target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-500">DiasporaBall.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-6 p-5 bg-forest-700/5 border border-forest-700/10">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-forest-700 mt-0.5 shrink-0" />
                    <p className="text-xs text-charcoal-500 leading-relaxed">
                      {formDisclaimer}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {status === 'success' ? (
                <Reveal>
                  <div className="flex flex-col items-center justify-center min-h-[400px] p-12 text-center bg-forest-700 bg-grain">
                    <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center mb-6">
                      <Check size={32} className="text-gold-400" />
                    </div>
                    <h3 className="text-heading-1 font-serif font-bold text-ivory-200 mb-4">Thank you</h3>
                    <p className="text-base text-ivory-200/60 max-w-md text-pretty">
                      Your message has been prepared. We'll be in touch soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <form onSubmit={handleSubmit} className="bg-ivory-100 p-8 lg:p-12" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                      <Field label="Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errors.name} required placeholder="Your full name" />
                      <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errors.email} required placeholder="you@email.com" />
                      <Field label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 or +234 ..." />
                      <Field label="Subject" name="category" type="select" value={form.category} onChange={(v) => setForm({ ...form, category: v })} error={errors.category} required options={categoryOptions} />
                      <div className="sm:col-span-2">
                        <Field label="Message" name="message" type="textarea" value={form.message} onChange={(v) => setForm({ ...form, message: v })} error={errors.message} required placeholder="Tell us about your enquiry..." rows={6} />
                      </div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                      <div className="flex items-center gap-2 mb-4 text-sm text-red-500">
                        <AlertCircle size={16} />
                        <span>Please correct the highlighted fields above.</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="md" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : 'Submit'}
                      {status !== 'loading' && <Send size={16} />}
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
