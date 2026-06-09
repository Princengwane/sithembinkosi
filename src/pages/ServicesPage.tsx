import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  HeartPulse,
  Users,
  Droplets,
  Activity,
  FlaskConical,
  Check,
  Scale,
  Scissors,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medical Care",
    desc: "Routine consultations, preventive care and ongoing primary care for the whole family.",
    points: ["Check-ups & screenings", "Prescriptions & referrals", "Sick notes", "PDP / PrDP Medical Assessments"],
  },
  {
    icon: HeartPulse,
    title: "Family Planning",
    desc: "Private, judgement-free counselling on the contraceptive option that fits your lifestyle.",
    points: ["Pills, implants & injections", "Pre-conception advice", "Infertility assessment and counselling", "Confidential consultations"],
  },
  {
    icon: Users,
    title: "Women's Health",
    desc: "Specialised health services tailored to the unique needs of women.",
    points: ["Pap smears", "Hormonal health advice", "STI testing & treatment", "Routine women's health screenings","Pregnancy care and counselling", "Termination of Pregnancy Services"],
  },
  {
    icon: Users,
    title: "Men's Health",
    desc: "Specialised health services tailored to the unique needs of men.",
    points: ["PSA screening", "Prostate health assessments", "Sexual and reproductive health consultations", "Erectile dysfunction evaluation and treatment", "Circumcision services", "STI testing and treatment", "Routine men’s health screenings"],
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    desc: "Hydration, vitamin and recovery drips administered by trained professionals.",
    points: ["Skin glow drips","Hydration drips", "Vitamin boosters", "Post-illness recovery", "Detoxification drips", "Vitamin B complex (Bco) injections"],
  },
  {
    icon: Activity,
    title: "Acute & Chronic Illness",
    desc: "Fast diagnosis and long-term management of common and chronic conditions.",
    points: ["Hypertension & diabetes", "Asthma & arthritis", "Wound care"],
  },
  {
    icon: FlaskConical,
    title: "Medical Tests",
    desc: "On-site screening for the tests that matter most for early intervention.",
    points: ["Blood pressure & blood sugar testing", "HIV & pregnancy testing", "Cholesterol screening", "Blood tests", "Urine testing", "DNA testing", "X-ray referrals and imaging services"],
  },
  {
    icon: Scale,
    title: "Weight Management",
    desc: "Personalised weight management plans to help you achieve your health goals.",
    points: ["Nutritional counselling", "Exercise planning", "Progress monitoring", "Lifestyle advice", "Relislim support programs", "Duromine (phentermine) management", "Mounjaro / Ozempic (GLP-1 weight management support)", "Ongoing monitoring and follow-up"],
  },
  {
    icon: Scissors,
    title: "Surgical Services",
    desc: "Comprehensive surgical care for a wide range of conditions.",
    points: ["Lipoma removal (small fatty lump excision)", "Abscess drainage", "Ear wax removal (syringing)", "Contraceptive implant removal/insertion", "Wound care and dressing changes", "Suturing (stitches) for cuts and lacerations", "Nebulizer treatments for respiratory conditions", "Point-of-care ultrasound (POCUS)"],
  },
];
  
export function ServicesPage() {
  return (
    <>
      <section
        className="border-b py-16 sm:py-20"
        style={{ borderColor: "var(--border)", backgroundColor: "rgba(243,237,229,0.3)" }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
          >
            Our services
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Everything you need under one roof
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            Quality, professional medical services delivered with care and confidentiality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border p-8 transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
                >
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-xl font-semibold">{s.title}</h2>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: "var(--primary)" }}
                      />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
