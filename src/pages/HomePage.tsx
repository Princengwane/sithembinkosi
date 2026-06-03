import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  FlaskConical,
  Users,
  Droplets,
  ShieldCheck,
  Award,
  HandHeart,
  ArrowRight,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpeg";
import aboutImg from "@/assets/about-side.png";

const services = [
  { icon: Stethoscope, title: "Medical Care", desc: "Comprehensive consultations and ongoing primary care for the whole family." },
  { icon: Users, title: "Men & Women Health", desc: "Specialised, confidential health services tailored to every patient." },
  { icon: Activity, title: "Acute & Chronic Illness", desc: "Diagnosis and long-term management of common and chronic conditions." },
  { icon: FlaskConical, title: "Medical Tests", desc: "On-site screening, blood pressure, sugar, HIV and pregnancy tests." },
  { icon: HeartPulse, title: "Family Planning", desc: "Private counselling and modern contraceptive options." },
  { icon: Droplets, title: "IV Therapy", desc: "Hydration, vitamin and recovery drips administered by professionals." },
];

const features = [
  { icon: Award, title: "Qualified Doctors", desc: "Experienced, registered medical professionals dedicated to your wellbeing." },
  { icon: ShieldCheck, title: "Trusted Treatment", desc: "Evidence-based care with strict confidentiality at every visit." },
  { icon: HandHeart, title: "Personalized Care", desc: "We take the time to listen and craft a plan that fits your life." },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>{label}</dt>
      <dd className="mt-1 text-sm font-semibold" style={{ color: "var(--foreground)" }}>{value}</dd>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-0 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-2">
          <div>
            
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
              SITHEMBINKOSI <span style={{ color: "var(--primary)" }}>MEDICAL CENTRE</span>
            </h1>
            <p className="mt-4 text-base italic" style={{ color: "var(--muted-foreground)" }}>
              In The Lord We Trust, All Things Are Possible.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--muted-foreground)" }}>
              A modern private clinic delivering compassionate, patient-centered healthcare to the Soweto community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/contact">Book Appointment <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/contact"><Phone className="mr-1.5 h-4 w-4" /> Contact Us</Link>
              </Button>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-4 border-t pt-2" style={{ borderColor: "var(--border)" }}>
              <Stat label="Qualified Care" value="Registered Clinicians" />
              <Stat label="Availability" value="Mon–Sun" />
              <Stat label="Patient Care" value="Confidential & Safe" />
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-0 -z-10 rounded-3xl blur-2xl" style={{ backgroundColor: "var(--gradient-hero)" }} />
            <img src={heroImg} alt="Sithembinkosi Medical Centre interior" width={1066} height={1600}
              className="aspect-[1/1] w-full rounded-2xl object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we offer" title="Comprehensive care, all in one place"
            description="From everyday consultations to chronic illness management, we focus on outcomes and on you." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border p-7 transition-all hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)", boxShadow: "var(--shadow-soft)" }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}>
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full px-7">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "rgba(243,237,229,0.4)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why people choose us" title="Care you can trust" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border p-8 text-center"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--card)", boxShadow: "var(--shadow-soft)" }}>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img src={aboutImg} alt="Stethoscope on a surface with green plants" width={1024} height={1024} loading="lazy"
              className="aspect-[5/4] w-full rounded-3xl object-cover" style={{ boxShadow: "var(--shadow-soft)" }} />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border px-5 py-4 sm:block"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--card)", boxShadow: "var(--shadow-elevated)" }}>
              <div className="text-2xl font-semibold" style={{ color: "var(--primary)" }}>100%</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>Patient focus</div>
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="About us"
              title="Building a healthier community, one patient at a time."
              description="Sithembinkosi Medical Centre is a modern private clinic providing high-quality, patient-centered healthcare in a professional and welcoming environment. We exist to make great care accessible to every family." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full" size="lg">
                <Link to="/about">Learn More <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full" size="lg">
                <Link to="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elevated)" }}>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Take the next step towards better health
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Book a consultation in minutes. Our team will confirm a time that works for you.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8" style={{ color: "var(--primary)" }}>
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
