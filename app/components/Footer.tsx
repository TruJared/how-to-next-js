"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Emoji from "./Emoji";

export interface NavigationProps {
  navigation: {
    name: string;
    url: string;
  }[];
}

export default function Navigation({ ...props }: NavigationProps) {
  const { navigation } = props;
  const pathname = usePathname();

  return (
    <div className="mt-auto w-full px-4 py-6 bg-zinc-400">
      <ul className="mx-auto flex flex-row justify-start items-center max-w-7xl">
        {navigation.map((item, index) => {
          const isActive = pathname === item.url;
          const linkColor = isActive ? "text-white" : "b;lack";
          return (
            <li key={index} className={`px-5 hover:text-white ${linkColor}`}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
        <li className="ml-auto"> Made with{' '}
          <Emoji label="love" symbol="❤️" />
          {' '}by{' '}
        <a className="hover:text-white" href="https://jaredMakes.com">Jared Makes</a>
        </li>
      </ul>
    </div>
  );
}
