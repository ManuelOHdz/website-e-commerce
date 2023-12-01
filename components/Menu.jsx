import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Inicio", url: "/" },
  { id: 2, name: "Categorias", subMenu: true },
  { id: 3, name: "Nosotros", url: "/about" },
  { id: 4, name: "Contacto", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Caricaturas", doc_count: 11, href: "Caricaturas" },
  { id: 2, name: "Abstractas", doc_count: 8, href: "Abstractas" },
  { id: 3, name: "Arte", doc_count: 64, href: "Arte" },
  { id: 4, name: "Otros", doc_count: 107, href: "Otros" },
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex items-center  gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className="cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={()=> setShowCatMenu(true)}
              onMouseLeave={()=> setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link key={submenu.idS} href='/category/Caricaturas' onClick={()=> setShowCatMenu(false)}>
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
