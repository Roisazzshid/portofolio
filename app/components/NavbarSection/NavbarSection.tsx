import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";

export default function NavbarSection() {
    const navItems = [
        {
          name: "About",
          link: "#about",
        },
        {
          name: "Showcase",
          link: "#showcase",
        },
        {
          name: "Contact",
          link: "#contact",
        },
      ];
     
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <section className="fixed top-5 left-0 right-0 z-50">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo  />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary">Contact Me</NavbarButton>
            </div>
          </NavBody>
  
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
  
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-white"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Contact Me
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
  
        {/* Navbar */}
      </section>
    );
}

