"use client";

import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Lokesh-81", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/poosala-lokesh/", external: true },
  { label: "Instagram", href: "https://www.instagram.com/_lokesh81/", external: true },
];

const contactInfo = [
  { label: "Email", value: "poosala15@gmail.com", href: "mailto:poosala15@gmail.com" },
  { label: "Phone", value: "+91 8885674162", href: "tel:+918885674162" },
  { label: "Location", value: "Hyderabad, Telangana, India" },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Brand & Bio */}
          <div>
            <Link href="#hero" className="text-lg font-medium text-foreground">
              P.LOKESH
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Full Stack Developer focused on building modern, scalable web applications with React, Next.js, and cloud technologies.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold text-muted-foreground mb-3">FOLLOW</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  <p className="text-xs font-medium text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{info.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row max-w-7xl mx-auto">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Poosala Lokesh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Built with React, Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
