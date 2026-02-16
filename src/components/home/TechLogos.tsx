const techs = [
  "Python",
  "TensorFlow",
  "React",
  "Docker",
  "Terraform",
  "AWS",
  "Rust",
  "MQTT",
];

export default function TechLogos() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {techs.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs tracking-wider text-muted/60 transition-colors hover:text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
