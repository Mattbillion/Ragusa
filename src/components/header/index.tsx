import Image from "next/image";
import Logo from "@/assets/ragusaLogo.svg";
import Globe from "@/assets/globe.svg";

const Header = () => {
  const navitems = headerData.navItems;
  return (
    <div className="shadow-md">
      <div className="flex items-center justify-between w-full py-4  container">
        <Image src={headerData.logo} alt="ragusa_logo" width={78} height={48} />
        <div className="flex">
          {headerData.navItems.map((item) => (
            <h6 className="px-3 py-2" key={item.id}>
              {item.name}
            </h6>
          ))}
        </div>
        <div className="flex gap-1 px-3 py-2">
          <Image src={Globe} alt="change language" width={16} height={16} />
          <h6>Монгол хэл</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;

const headerData = {
  logo: Logo,
  navItems: [
    {
      id: 0,
      name: "Нүүр хуудас",
      slug: "/",
    },
    {
      id: 1,
      name: "Аяллууд",
      children: [],
      slug: "/",
    },
    {
      id: 2,
      name: "Үзвэрүүд",
      slug: "/",
    },
    {
      id: 3,
      name: "Танин мэдэхүй",
      slug: "/",
    },
    {
      id: 4,
      name: "Бидний тухай",
      slug: "/",
    },
    {
      id: 5,
      name: "Холбоо барих",
      slug: "/",
    },
  ],
};
