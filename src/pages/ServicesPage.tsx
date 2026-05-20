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
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medical Care",
    desc: "Routine consultations, preventive care and ongoing primary care for the whole family.",
    points: ["Check-ups & screenings", "Prescriptions & referrals", "Sick notes"],
  },
  {
    icon: HeartPulse,
    title: "Family Planning",
    desc: "Private, judgement-free counselling on the contraceptive option that fits your lifestyle.",
    points: ["Pills, implants & injections", "Pre-conception advice", "Confidential consultations"],
  },
  {
    icon: Users,
    title: "Men's & Women's Health",
    desc: "Specialised health services tailored to the unique needs of men and women.",
    points: ["Pap smears & PSA screening", "Hormonal advice", "STI testing & treatment"],
  },
  {
    icon: Droplets,
    title: "IV Therapy",
    desc: "Hydration, vitamin and recovery drips administered by trained professionals.",
    points: ["Hydration drips", "Vitamin boosters", "Post-illness recovery"],
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
    points: ["Blood pressure & sugar", "HIV & pregnancy tests", "Cholesterol screening"],
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
