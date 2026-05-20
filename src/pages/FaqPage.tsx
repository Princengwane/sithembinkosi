import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are your appointment times?",
    a: "Our clinic is open Monday to Sunday. You can request an appointment at any time using our online form, and our team will confirm a slot that works for you.",
  },
  {
    q: "What services do you offer?",
    a: "General medical care, men's and women's health, family planning, IV therapy, acute and chronic illness management, and a range of medical tests.",
  },
  {
    q: "Do you accept medical aid?",
    a: "We work with most major medical aid schemes. Please bring your medical aid card on your visit. Cash and card payments are also welcome.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, walk-in patients are welcome. To minimise your wait time, we recommend booking an appointment in advance.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. All consultations and patient records are strictly confidential and handled in line with healthcare regulations.",
  },
  {
    q: "How should I prepare for my first visit?",
    a: "Please bring your ID, medical aid card (if applicable), a list of current medications, and any previous test results or referral letters.",
  },
  {
    q: "What should I do in a medical emergency?",
    a: "If you are experiencing a life-threatening emergency, please call your nearest emergency service immediately. For urgent but non-life-threatening concerns, contact us directly.",
  },
];

export function FaqPage() {
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
            Help centre
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Frequently asked questions</h1>
          <p
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            Can't find what you're looking for? Reach out, we would be happy to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border px-5"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Still have questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
