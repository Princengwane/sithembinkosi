export function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
        >
          Legal
        </span>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Terms of Use</h1>
        <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>Last updated: June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
          <Section title="1. Acceptance of Terms">
            By accessing or using the Sithembinkosi Medical Centre website ("the Website"), you agree to be bound by
            these Terms of Use. If you do not agree, please discontinue use of the Website immediately.
          </Section>
          <Section title="2. Nature of Information">
            The content on this Website is provided for general informational purposes only. It does not constitute
            medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare professional
            regarding any medical condition or concern.
          </Section>
          <Section title="3. Appointment Bookings">
            Submitting a booking request through this Website does not constitute a confirmed appointment. All
            bookings are subject to confirmation by our staff via phone or email. We reserve the right to decline or
            reschedule any booking request.
          </Section>
          <Section title="4. Accuracy of Information">
            While we strive to keep information current and accurate, Sithembinkosi Medical Centre makes no
            warranties regarding the completeness, accuracy, or reliability of any content on this Website.
            Information is subject to change without notice.
          </Section>
          <Section title="5. Intellectual Property">
            All content on this Website - including text, images, logos, and design - is the property of
            Sithembinkosi Medical Centre and may not be reproduced, distributed, or used without prior written
            permission.
          </Section>
          <Section title="6. Third-Party Links">
            This Website may contain links to third-party websites. We are not responsible for the content,
            privacy practices, or accuracy of any third-party site.
          </Section>
          <Section title="7. Limitation of Liability">
            To the fullest extent permitted by South African law, Sithembinkosi Medical Centre shall not be liable
            for any direct, indirect, incidental, or consequential damages arising from your use of this Website.
          </Section>
          <Section title="8. Governing Law">
            These Terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to
            the jurisdiction of the South African courts.
          </Section>
          <Section title="9. Changes to These Terms">
            We reserve the right to update these Terms at any time. Continued use of the Website after changes
            constitutes acceptance of the revised Terms.
          </Section>
          <Section title="10. Contact">
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:sithembinkosimedical@hotmail.com" style={{ color: "var(--primary)" }}>
              sithembinkosimedical@hotmail.com
            </a>{" "}
            or call +27 67 404 9079.
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
      <p className="mt-2" style={{ color: "var(--muted-foreground)" }}>{children}</p>
    </div>
  );
}