export function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
        >
          Legal
        </span>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed">
          <Section title="1. Introduction">
            Sithembinkosi Medical Centre ("we", "us", "our") is committed to protecting your personal information
            in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). This Policy explains
            how we collect, use, store, and protect your information.
          </Section>
          <Section title="2. Information We Collect">
            <span>Through this Website we may collect:</span>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Full name, phone number, and email address (via the booking form)</li>
              <li>Preferred appointment date, time, and service</li>
              <li>Any notes or symptoms you voluntarily provide</li>
            </ul>
            <span className="mt-2 block">We do not collect payment information through this Website.</span>
          </Section>
          <Section title="3. How We Use Your Information">
            <span>We use the information you provide solely to:</span>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Schedule and confirm your appointment</li>
              <li>Contact you regarding your booking</li>
              <li>Improve the quality of our services</li>
            </ul>
            <span className="mt-2 block">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </span>
          </Section>
          <Section title="4. Legal Basis for Processing (POPIA)">
            We process your personal information on the basis of your consent (given when you submit the booking
            form) and to fulfil our contractual obligation to provide you with healthcare services.
          </Section>
          <Section title="5. Data Storage and Security">
            Your information is stored securely and accessible only to authorised staff. We implement reasonable
            technical and organisational measures to protect your data against unauthorised access, loss, or
            disclosure.
          </Section>
          <Section title="6. Retention">
            We retain personal information only for as long as necessary to fulfil the purpose for which it was
            collected, or as required by applicable law.
          </Section>
          <Section title="7. Your Rights Under POPIA">
            <span>You have the right to:</span>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <span className="mt-2 block">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:sithembinkosimedical@hotmail.com" style={{ color: "var(--primary)" }}>
                sithembinkosimedical@hotmail.com
              </a>.
            </span>
          </Section>
          <Section title="8. Cookies">
            This Website does not currently use tracking cookies or analytics tools.
          </Section>
          <Section title="9. Children">
            We do not knowingly collect personal information from children under 18 without parental consent.
          </Section>
          <Section title="10. Changes to This Policy">
            We may update this Policy from time to time. The updated version will be posted on this page with a
            revised date.
          </Section>
          <Section title="11. Contact / Information Officer">
            Sithembinkosi Medical Centre - 24445 Baragwanath Road, Diepkloof, Zone 5, Soweto.{" "}
            <a href="mailto:sithembinkosimedical@hotmail.com" style={{ color: "var(--primary)" }}>
              sithembinkosimedical@hotmail.com
            </a>{" "}
            | +27 67 404 9079
          </Section>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold" style={{ color: "var(--foreground)" }}>{title}</h2>
      <div className="mt-2" style={{ color: "var(--muted-foreground)" }}>{children}</div>
    </div>
  );
}