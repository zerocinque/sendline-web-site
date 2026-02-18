"use client";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 transition-colors hover:border-primary/30">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
