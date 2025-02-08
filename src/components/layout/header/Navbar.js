import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const navItemsRaw = [
    {
      name: "Home",
      // icon: isOnepage ? false : true,
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
    },
    {
      name: "Blogs",
      // icon: isOnepage ? false : true,
      path: isOnepage ? "#" : "/blogs",
      dropdown: null,
      position: "static",
    },
    {
      name: "About",
      // icon: isOnepage ? false : true,
      path: isOnepage ? "#" : "/about",
      dropdown: null,
      position: "static",
    },
    // {
    //   name: "HOME",
    //   // icon: isOnepage ? false : true,
    //   path: isOnepage ? "#" : "/",
    //   dropdown: null,
    //   position: "static",
    // },
  ];

  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItemsRaw?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
