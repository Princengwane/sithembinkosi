import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { z } from "zod";

const SERVICES = [
  "General Medical Care",
  "Men & Women Health",
  "Acute & Chronic Illness",
  "Medical Tests",
  "Family Planning",
  "IV Therapy",
  "Weight Management",
  "Surgical Services",
] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please pick a date"),
  time: z.string().min(1, "Please pick a time"),
  notes: z.string().max(1000).optional(),
});

const PHONE = "27674049079";

const todaySA = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "Africa/Johannesburg",
  })
)
  .toISOString()
  .split("T")[0];

function isValidTime(date: string, time: string) {
  const day = new Date(date).getDay();

  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  const start = 9 * 60; // 09:00

  let end;

  if (day >= 1 && day <= 5) {
    // Monday-Friday
    end = 18 * 60;
  } else {
    // Saturday & Sunday
    end = 14 * 60;
  }

  return totalMinutes >= start && totalMinutes <= end;
}

export function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<string>("");
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  async function submitToGoogleForm() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdtHbZbswLiqKm4E2_e6uokiWPXISaQJDwofQ5bbq6bxSxnmg/formResponse";

  const formData = new FormData();

  formData.append("entry.359226469", values.fullName);
  formData.append("entry.983328730", values.phone);
  formData.append("entry.1412980951", values.email);
  formData.append("entry.60390784", service);
  formData.append("entry.1066673042", values.date);
  formData.append("entry.1527783811", values.time);
  formData.append("entry.1138896586", values.notes || "");

  await fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}

  function update<K extends keyof typeof values>(k: K, v: string) {
    setValues((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
  e.preventDefault();

  //  VALIDATE FIRST (NO LOADING YET)
  const result = schema.safeParse({
    ...values,
    service,
  });

  if (!result.success) {
    const errs: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      errs[String(issue.path[0])] = issue.message;
    });

    setErrors(errs);
    return;
  }

  if (!isValidTime(values.date, values.time)) {
    setErrors({
      time: "Selected time falls outside operating hours.",
    });
    return;
  }

  // prevent double submit AFTER validation
  if (loading) return;

  setLoading(true);

  try {
    await submitToGoogleForm();

    setErrors({});
    setSubmitted(true);
  } catch (error) {
    console.error(error);
    alert("Failed to submit appointment.");
  } finally {
    setLoading(false);
  }
}

  if (submitted) {
    const wa = `https://wa.me/${PHONE}?text=${encodeURIComponent(
      `Hello, I just submitted a booking request.\nName: ${values.fullName}\nService: ${service}\nDate: ${values.date} ${values.time}`
    )}`;
    return (
      <div
        className="rounded-2xl border p-8 text-center"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--card)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--primary-soft)", color: "var(--primary)" }}
        >
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Request received</h3>
        <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
          Thank you, {values.fullName.split(" ")[0]}. Our team will confirm your appointment
          shortly via phone or email.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
          <Button asChild className="rounded-full">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Continue on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const showSymptoms = ["Acute & Chronic Illness", "General Medical Care"].includes(service);
  const showTests = service === "Medical Tests";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border p-6 sm:p-8"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName}>
          <Input
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <Input
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+27 000 000 0000"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email}>
        <Input
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Service" error={errors.service}>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred date" error={errors.date}>
          <Input
          type="date"
          min={todaySA}
          value={values.date}
          onChange={(e) => update("date", e.target.value)}
          />
        </Field>
        <Field label="Preferred time" error={errors.time}>
          <Input
            type="time"
            value={values.time}
            onChange={(e) => update("time", e.target.value)}
          />
        </Field>
      </div>

      {showSymptoms && (
        <Field label="Symptoms / notes">
          <Textarea
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Briefly describe how you're feeling…"
            rows={4}
          />
        </Field>
      )}
      {showTests && (
        <Field label="Which tests are you interested in?">
          <Textarea
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="e.g. blood pressure, sugar, HIV, pregnancy…"
            rows={3}
          />
        </Field>
      )}
      {!showSymptoms && !showTests && (
        <Field label="Notes (optional)">
          <Textarea
            value={values.notes}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything we should know in advance…"
            rows={3}
          />
        </Field>
      )}

      <Button
      type="submit"
      size="lg"
      className="w-full rounded-full"
      disabled={loading}
      >
        {loading ? "Submitting..." : "Request Appointment"}
      </Button>
      <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
        Your information is kept confidential and used only to schedule your visit.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && (
        <p className="text-xs" style={{ color: "var(--destructive)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
