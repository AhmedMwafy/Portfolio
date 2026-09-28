import { site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <p className="mx-auto max-w-6xl px-5 text-base text-muted sm:px-8">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
