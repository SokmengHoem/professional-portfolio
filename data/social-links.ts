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
    url: "https://github.com/sokmenghoem",
    icon: "Github",
    handle: "@sokmenghoem",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sokmenghoem",
    icon: "Linkedin",
    handle: "Sokmeng Hoem",
  },
  {
    name: "X / Twitter",
    url: "https://twitter.com/sokmenghoem",
    icon: "Twitter",
    handle: "@sokmenghoem",
  },
  {
    name: "Email",
    url: "mailto:sokmeng@sokmenghoem.dev",
    icon: "Mail",
    handle: "sokmeng@sokmenghoem.dev",
  },
];

export const statsData = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 45, suffix: "+", label: "Projects Shipped" },
  { value: 12, suffix: "M+", label: "Users Reached" },
  { value: 99.9, suffix: "%", label: "Client Satisfaction" },
];
