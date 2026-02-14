"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  PlusSquare,
  Tags,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/dashboard/projects",
    icon: FolderKanban,
  },
  {
    label: "Add Project",
    href: "/admin/dashboard/projects/new",
    icon: PlusSquare,
  },
  {
    label: "Categories",
    href: "/admin/dashboard/categories",
    icon: Tags,
  },
  {
    label: "Settings",
    href: "/admin/dashboard/settings",
    icon: Settings,
  },
];

const AdminSideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 border-r bg-white flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 font-bold text-lg border-b">
        Admin Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menu.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
                ${
                  active
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 text-sm text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSideBar;
