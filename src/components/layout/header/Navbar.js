import homeImage1 from "@/assets/img/mega/home-1.png";
import homeImage2 from "@/assets/img/mega/home-2.png";
import homeImage3 from "@/assets/img/mega/home-3.png";
import homeImage4 from "@/assets/img/mega/home-4.png";
import homeImage5 from "@/assets/img/mega/home-5.png";
import homeImage6 from "@/assets/img/mega/home-6.png";
import homeImage7 from "@/assets/img/mega/home-7.png";
import homeImage8 from "@/assets/img/mega/home-8.png";
import homeImage9 from "@/assets/img/mega/home-9.png";
import homeImage10 from "@/assets/img/mega/home-10.png";
import homeImage11 from "@/assets/img/mega/home-11.png";
import homeImage12 from "@/assets/img/mega/home-12.png";
import homeImage13 from "@/assets/img/mega/home-13.png";
import homeImage14 from "@/assets/img/mega/home-14.png";
import homeImage15 from "@/assets/img/mega/home-15.png";
import homeImage16 from "@/assets/img/mega/home-16.png";
import homeImage17 from "@/assets/img/mega/home-17.png";
import homeImage18 from "@/assets/img/mega/home-18.png";
import homeImage19 from "@/assets/img/mega/home-19.png";
import homeImage20 from "@/assets/img/mega/home-20.png";
import comingImage1 from "@/assets/img/mega/coming_1.png";
import comingImage2 from "@/assets/img/mega/coming_2.png";
import comingImage3 from "@/assets/img/mega/coming_3.png";
import comingImage4 from "@/assets/img/mega/coming_4.png";
import comingImage5 from "@/assets/img/mega/coming_5.png";
import megaMenuImage1 from "@/assets/img/mega/mega_menu_1.png";
import DropdownHome from "./DropdownHome";
import DropdownPages from "./DropdownPages";
import DropdownEcommerce from "./DropdownEcommerce";
import NavItem from "./NavItem";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { isOnepage, style, headerType, footerStyle, isCollection, home } =
    useHeaderContex();
  const navItemsRaw = [
    {
      name: "HOME",
      // icon: isOnepage ? false : true,
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
    },
    {
      name: "Blog",
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
    },
    {
      name: "About",
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
    },
    {
      name: "Product",
      path: isOnepage ? "#" : "/",
      dropdown: null,
      position: "static",
    },
    {
      name:
        isOnepage && (home === 12 || home === 19)
          ? "CONTACT"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "BLOGS"
          : isOnepage && style === 3
          ? "CONTACT"
          : "BLOG ",
      icon: false,
      path:
        isOnepage && (home === 12 || home === 19)
          ? "#tb__contact"
          : isOnepage &&
            (!style ||
              style === 2 ||
              home == 13 ||
              (style === 3 && headerType === 2))
          ? "#blog__area"
          : isOnepage && style === 3
          ? "#tb__contact"
          : "/blogs",
      dropdown: null,
    },

    {
      name:
        isOnepage && home === 13
          ? "CONTACT"
          : isOnepage && (home === 12 || home === 19)
          ? "BLOGS"
          : isOnepage && style === 3 && (!headerType || headerType === 3)
          ? "BLOGS"
          : "CONTACT",
      icon: false,
      path:
        isOnepage && home === 13
          ? "#tb__contact"
          : isOnepage && (home === 12 || home === 19)
          ? "#blog__area"
          : isOnepage &&
            (!style || style === 2 || (style === 3 && headerType === 2))
          ? "#tb__contact"
          : isOnepage && style === 3
          ? "#blog__area"
          : "/contact",
      dropdown: null,
    },
  ];

  const navItems = navItemsRaw?.map((navItem, idx) =>
    idx === 0
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownHome dropdownItems={navItem.dropdownItems} />
          ),
        }
      : idx === 1
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownPages
              dropdownContents={navItem.dropdownContens}
              // dropdownThumbs={navItem.dropdownThumbs}
            />
          ),
        }
      : idx === 3
      ? {
          ...navItem,
          dropdown: isOnepage ? null : (
            <DropdownEcommerce dropdownItems={navItem.dropdownItems} />
          ),
        }
      : navItem
  );
  return (
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul>
            {navItems?.map((navItem, idx) => (
              <NavItem key={idx} item={navItem} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
