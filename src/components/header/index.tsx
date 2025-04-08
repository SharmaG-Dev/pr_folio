"use client";
import Link from "next/link";
import Logo from "../logo";
import ThemeToggler from "./themeToggler";
import { MenuList } from "./menu";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/navigation";
import { Button, Container } from "../global";
export default function Header() {
  const navigate = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Container>
      <div className=" relative flex justify-between py-5 flex-wrap">
        <Logo />
        <div className="hidden md:flex items-center gap-5">
          {MenuList.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={clsx("dark:text-white text-dark text-sm font-medium")}
            >
              {item.name}
            </Link>
          ))}
          <Button
            varients="Outline"
            onClick={ () => navigate.push("/contact")}
            className="py-1.5  px-1.5 "
          >
            Contact Me
          </Button>
          <ThemeToggler />
        </div>
        <Button
          onClick={toggleDrawer}
          className="p-2 md:hidden text-light-dark"
        >
          <Menu />
        </Button>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="!w-full dark:!bg-dark"
      >
        <div className="p-2 px-4 flex justify-between">
          <ThemeToggler />
          <X onClick={toggleDrawer} />
        </div>
        <div className="flex flex-col gap-3 p-6 items-center">
          {MenuList.map((item, index) => (
            <Link
              href={item.path}
              onClick={toggleDrawer}
              key={index}
              className={clsx("dark:text-white text-dark text-lg font-medium")}
            >
              {item?.name}
            </Link>
          ))}
          <Link
            href={"/contact"}
            onClick={toggleDrawer}
            className="py-1.5 text-lg font-medium dark:text-white px-1.5"
          >
            Contact Me
          </Link>
        </div>
      </Drawer>
    </Container>
  );
}
