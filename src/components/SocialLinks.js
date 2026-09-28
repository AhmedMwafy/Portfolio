import { socials } from "@/data/portfolio";
import { socialIcons } from "./Icons";
import { isPlaceholder, socialHref } from "@/lib/helpers";

// variant "icons"   -> small round icons (hero)
// variant "buttons" -> icon + text buttons (contact)
export default function SocialLinks({ variant = "icons" }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socials.map((s) => {
        const Icon = socialIcons[s.type];
        const external = s.type !== "email" && !isPlaceholder(s.url);
        const props = {
          href: socialHref(s.type, s.url),
          ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        };
        return (
          <li key={s.label}>
            {variant === "icons" ? (
              <a
                {...props}
                aria-label={s.label}
                title={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            ) : (
              <a {...props} className="btn btn-secondary">
                <Icon />
                {s.label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
