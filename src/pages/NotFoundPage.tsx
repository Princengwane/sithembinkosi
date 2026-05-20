import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold" style={{ color: "var(--primary)" }}>
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
