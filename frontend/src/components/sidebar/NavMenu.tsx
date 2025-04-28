"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutList, LayoutDashboard, SquareKanban } from "lucide-react";
import Sidebar from "@/components/sidebar/sidebar";
import SidebarItem from "@/components/sidebar/sidebarItem";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <Link href="/dashboard">
        <SidebarItem
          icon={<LayoutDashboard />}
          text={"dashboard"}
          active={pathname === "/dashboard"}
        />
      </Link>
      <Link href="/todo">
        <SidebarItem
          icon={<LayoutList />}
          text={"Todo"}
          active={pathname === "/todo"}
        />
      </Link>
      <Link href="/kanban">
        <SidebarItem
          icon={<SquareKanban />}
          text={"Kanban"}
          active={pathname === "/kanban"}
        />
      </Link>
      {/* <hr className="my-3" />
      <SidebarItem text={"dashboard"} /> */}
    </Sidebar>
  );
}
