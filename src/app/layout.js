import "./globals.css";

// ---- SEO: this is what Google and social previews show ----
export const metadata = {
  title: "Ahmed Mwafy | Robotics & Mechatronics Engineer",
  description:
    "Mechatronics engineering student focused on robotics, autonomous systems, AI, embedded systems, and intelligent machines.",
  openGraph: {
    title: "Ahmed Mwafy | Robotics & Mechatronics Engineer",
    description:
      "Mechatronics engineering student focused on robotics, autonomous systems, AI, embedded systems, and intelligent machines.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts: Barlow (text) and Barlow Condensed (headings) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap"
        />
        {/* If JavaScript is off, show everything instead of hiding it */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
