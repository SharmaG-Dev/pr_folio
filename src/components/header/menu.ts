import { menuListTypes } from "@/types/menulist";



export const MenuList: menuListTypes[] = [
    {
        name: "Home",
        newTab: false,
        path: "/",
        active: ""
    },
    {
        name: "Services",
        newTab: false,
        path: "/services",
        active: "services"
    },
    {
        name: "Work",
        newTab: false,
        path: "/work",
        active: "work"

    },
    {
        name: "Blog",
        newTab: false,
        path: "/blog",
        active: "blog"
    }
]