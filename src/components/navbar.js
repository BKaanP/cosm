import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Frame 3.svg";

const navigationItems = [
  { name: "Startseite", link: "startseite" },
  { name: "Warum uns wählen?", link: "warum-wir" },
  {
    name: "Dienstleistungen",
    link: "dienstleistungen",
  },
  { name: "Über uns", link: "über-uns" },
  // { name: "Gesichtsbehandlungen", link: "gesicht" },
];

function Logo() {
  return (
    <div className="self-stretch my-auto text-3xl font-bold leading-10 text-neutral-800">
      <Link
        to="startseite"
        smooth={true}
        duration={500}
        className="cursor-pointer"
      >
        <img src={logo} alt="Logo" className="h-20" draggable="false" />
      </Link>
    </div>
  );
}

function Dropdown({ items }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
      {items.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          smooth={true}
          duration={500}
          className="block px-4 py-2 text-neutral-600 hover:bg-gray-100 cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex gap-16 justify-between self-stretch my-auto leading-[100%] text-black max-md:flex-wrap max-md:max-w-full font-Inter">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
          onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
        >
          <Link
            to={item.link}
            smooth={true}
            duration={500}
            className="navbar-item hover:text-neutral-800"
          >
            {item.name}
          </Link>
          {item.dropdown && dropdownOpen && <Dropdown items={item.dropdown} />}
        </div>
      ))}
    </nav>
  );
}

function ContactButton() {
  return (
    <button className="justify-center px-10 py-4 font-medium whitespace-nowrap bg-button rounded-xl max-md:px-5 font-Inter transition-colors duration-300 hover:bg-button_hover">
      Buchen
    </button>
  );
}

function Navbar() {
  const [scrollState, setScrollState] = useState({
    isScrolled: false,
    boxShadow: "",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrollState({
        isScrolled: true,
        boxShadow: "shadow-md",
      });
    } else {
      setScrollState({
        isScrolled: false,
        boxShadow: "",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 gap-5 transition-all duration-300 ${
        scrollState.isScrolled ? "bg-white" : "bg-transparent"
      } ${scrollState.boxShadow}`}
    >
      <div className="flex gap-5 justify-between items-center w-full max-w-[1460px] mx-auto pt-6 pb-5 max-md:px-5 max-md:max-w-full">
        <Logo />
        <Navigation />
        <ContactButton />
      </div>
    </header>
  );
}

export default Navbar;
