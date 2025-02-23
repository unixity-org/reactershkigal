import Image from "next/image";
import Link from "next/link";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import logoImage2 from "@/assets/img/logo/Logo_2.png";
import new_logo from "@/assets/img/logo/logo.png";

const LogoMobile = () => {
  return (
    <div className="offcanvas__logo">
      <Link className="offcanvas__logo_link" href="/">
        <Image src={new_logo} alt="Logo-img" className="logo-image1" />
        <Image src={new_logo} alt="Logo-img2" className="logo-image2" />
      </Link>
      <button className="offcanvas__close--btn" data-offcanvas>
        Close
      </button>
    </div>
  );
};

export default LogoMobile;
