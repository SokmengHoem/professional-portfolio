import { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects", badge: "6+" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/alexrivera",
    icon: "Github",
    handle: "@alexrivera",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexrivera-dev",
    icon: "Linkedin",
    handle: "Alex Rivera",
  },
  {
    name: "X / Twitter",
    url: "https://twitter.com/alexrivera_dev",
    icon: "Twitter",
    handle: "@alexrivera_dev",
  },
  {
    name: "Email",
    url: "mailto:alex@alexrivera.dev",
    icon: "Mail",
    handle: "alex@alexrivera.dev",
  },
];

export const statsData = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 45, suffix: "+", label: "Projects Shipped" },
  { value: 12, suffix: "M+", label: "Users Reached" },
  { value: 99.9, suffix: "%", label: "Client Satisfaction" },
];
