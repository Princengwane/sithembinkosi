import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BookingForm } from "@/components/site/BookingForm";

const PHONE = "+27 67 404 9079";
const EMAIL = "sithembinkosimedical@hotmail.com";
const ADDRESS = "24445 Baragwanath Road, Diepkloof, Zone 5, Soweto";

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <div
      className="flex items-start gap-4 rounded-2xl border p-5 transition-colors"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

export function ContactPage() {
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
            Contact
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Book your appointment</h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            Tell us a little about your visit and we'll confirm a time that works for you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <aside className="space-y-4">
            <InfoCard
              icon={Phone}
              title="Phone"
              lines={[PHONE]}
              href={`tel:${PHONE.replace(/\s/g, "")}`}
            />
            <InfoCard icon={Mail} title="Email" lines={[EMAIL]} href={`mailto:${EMAIL}`} />
            <InfoCard icon={MapPin} title="Address" lines={[ADDRESS]} />
            <InfoCard
              icon={Clock}
              title="Hours"
              lines={[
                "Mon – Fri: 9:00 – 18:00",
                "Sat: 9:00 – 14:00",
                "Sun & Public Holidays: 09:00 – 14:00",
              ]}
            />
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border)", boxShadow: "var(--shadow-soft)" }}
            >
              <iframe
                title="Clinic location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
