import { useState } from "react";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" aria-label="Homepage">
          N<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`navbar__toggle-bar ${open ? "is-open" : ""}`} />
          <span className={`navbar__toggle-bar ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__links navbar__links--mobile ${open ? "is-open" : ""}`}
        aria-label="Primary mobile"
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
