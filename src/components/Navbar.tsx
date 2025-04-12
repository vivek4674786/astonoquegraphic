import React from 'react';

const Navbar: React.FC = () => {
  const navbarItems = [
    {
      label: "Home",
      href: "#home"
    },
    {
      label: "About",
      href: "#about"
    },
    {
      label: "What we do",
      href: "#what-we-do"
    },
    {
      label: "Contact Us",
      href: "#contact-us"
    },
    {
      label: "Portfolio",
      href: "#portfolio"
    },
    
  ]
  return (
    <nav className="p-4">
      <ul className="flex justify-around list-none gap-4 m-0 p-0">
        {navbarItems.map((item, index) => (
          <li key={index} className="m-0">
            <a href={item.href} className=" no-underline text-lg hover:underline">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
