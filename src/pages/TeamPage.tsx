import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import drImg from "@/assets/team-doctor.jpeg";
import footImg from "@/assets/team-foot.png";
import recImg from "@/assets/team-reception.png";

const team = [
  {
    name: "Dr. NK Hlatshwayo",
    role: "Doctor",
    img: drImg,
    bio: "Leading the clinical team with years of primary care experience.",
  },
  {
    name: "Kelebogile Teledimo",
    role: "Foot Care",
    img: footImg,
    bio: "Dedicated to keeping your feet healthy and pain-free.",
  },
  {
    name: "Xolani Hlatshwayo",
    role: "Receptionist",
    img: recImg,
    bio: "The first warm welcome you'll receive at our clinic.",
  },
];

export function TeamPage() {
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
            Our team
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Meet the people behind your care
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-3xl border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <div
                  className="aspect-[4/5] overflow-hidden"
                  style={{ backgroundColor: "var(--muted)" }}
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={768}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-lg font-semibold">{m.name}</h2>
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--primary)" }}>
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Book with our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
