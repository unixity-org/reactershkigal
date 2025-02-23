import Image from "next/image";
import newLogo from "@/assets/img/logo/logo.png";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const LogoHeader = () => {
  const { style, bodyBg } = useHeaderContex();
  return (
    <div className="headerarea__component">
      <div className="headerarea__logo">
        <Link href="/">
          <Image
            placeholder="blur"
            className={style === 4 ? "logo-image2" : ""}
            src={style === 4 && bodyBg !== "black" ? newLogo : newLogo}
            alt="Bastun Logo"
          />
          {style === 4 ? (
            <Image
              placeholder="blur"
              className={"logo-image1"}
              src={style === 4 && bodyBg === "black" ? newLogo : newLogo}
              alt="Bastun Logo"
            />
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
