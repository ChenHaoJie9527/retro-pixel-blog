import Link from "next/link";
import { Monitor, Palette, DollarSign } from "lucide-react";

const NavMenu = () => {
  const categories = [
    {
      name: "Tech",
      icon: Monitor,
    },
    {
      name: "Art",
      icon: Palette,
    },
    {
      name: "Finance",
      icon: DollarSign,
    },
  ];
  return (
    <nav className="flex justify-center space-x-4 my-4 gap-1">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/categories/${category.name.toLowerCase()}`}
          className="flex flex-col items-center p-2 bg-gray-800 rounded  hover:bg-gray-700 transition-colors dark:[box-shadow:0_0_0_2px_#4ade80,0_0_0_4px_#fff,0_0_0_6px_#4ade80] [box-shadow:0_0_0_2px_#6366f1,0_0_0_4px_#fff,0_0_0_6px_#6366f1]"
        >
          <category.icon className="w-6 h-6 mb-1" />
          <span className="font-pixel text-xs">{category.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
