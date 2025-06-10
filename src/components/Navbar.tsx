import React from 'react';

const Navbar: React.FC = ({ navbarObject }: { navbarObject: any }) => {
  console.log("navbarObject",navbarObject);
  const navbarItems = navbarObject?.sort((a: {orderNumber: number}, b: {orderNumber: number}) => a.orderNumber - b.orderNumber)?.map((item: any) => ({
    label: item.label,
    href: item.path,
    name: item.name
  })) 
  // || [
  //   {
  //     label: "Home",
  //     href: "#home"
  //   },
  //   {
  //     label: "About",
  //     href: "#about"
  //   },
  //   {
  //     label: "What we do",
  //     href: "#what-we-do"
  //   },
  //   {
  //     label: "Contact Us",
  //     href: "#contact-us"
  //   },
  //   {
  //     label: "Portfolio",
  //     href: "#portfolio"
  //   },
    
  // ]

  console.log("sortednavbarItems",navbarItems);
  return (
    <nav className="p-4">
      <ul className="flex justify-around list-none gap-4 m-0 p-0">
        {navbarItems?.map((item, index) => (
          <li key={index} className="m-0">
            <a href={item.href} className=" no-underline text-lg hover:underline">{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
