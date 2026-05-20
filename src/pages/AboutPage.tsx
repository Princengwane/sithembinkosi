import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Heart, Sparkles, ShieldCheck, Lightbulb } from "lucide-react";
import aboutImg from "@/assets/about-side.png";

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with dignity, kindness, and warmth." },
  { icon: Sparkles, title: "Excellence", desc: "We hold ourselves to the highest medical and service standards." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent, confidential care — every visit." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern tools and methods for better outcomes." },
];

export function AboutPage() {
  return (
    <>
      <section className="border-b py-16 sm:py-20" style={{ borderColor: "var(--border)", backgroundColor: "rgba(243,237,229,0.3)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
          >
            About us
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Care rooted in our community</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg" style={{ color: "var(--muted-foreground)" }}>
            Sithembinkosi Medical Centre is a modern clinic focused on high-quality, patient-centered
            healthcare in a professional and welcoming environment.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={aboutImg}
            alt="Healthcare"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-3xl object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
                To deliver accessible, compassionate, and personalized healthcare to every patient
                who walks through our doors.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3" style={{ color: "var(--muted-foreground)" }}>
                To be a trusted medical centre recognized for excellence and community wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "rgba(243,237,229,0.4)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our values" title="What guides our care" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border p-7"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
                >
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
