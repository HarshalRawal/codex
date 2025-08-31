"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Code2,
  Compass,
  FolderPlus,
  History,
  Home,
  LayoutDashboard,
  Lightbulb,
  type LucideIcon,
  Plus,
  Settings,
  Star,
  Terminal,
  Zap,
  Database,
  FlameIcon,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Define the interface for a single playground item, icon is now a string
interface PlaygroundData {
  id: string
  name: string
  icon: string // Changed to string
  starred: boolean
}

// Map icon names (strings) to their corresponding LucideIcon components
const lucideIconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Lightbulb: Lightbulb,
  Database: Database,
  Compass: Compass,
  FlameIcon: FlameIcon,
  Terminal: Terminal,
  Code2: Code2, // Include the default icon
  // Add any other icons you might use dynamically
}

export function DashboardSidebar({ initialPlaygroundData }: { initialPlaygroundData: PlaygroundData[] }) {
  const pathname = usePathname()
  const [starredPlaygrounds, setStarredPlaygrounds] = useState(initialPlaygroundData.filter((p) => p.starred))
  const [recentPlaygrounds, setRecentPlaygrounds] = useState(initialPlaygroundData)

  return (
    <Sidebar
      variant="inset"
      collapsible="icon"
      className="border-r bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700"
    >
      <SidebarHeader>
        <div className="flex items-center gap-3 px-4 py-4 justify-center bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-cyan-500/20 rounded-lg mx-2 mb-2">
          <div className="relative">
            <Image src={"/logo.png"} alt="Codex Logo" height={40} width={40} className="drop-shadow-sm object-cover" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Codex
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Online IDE</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
                className="hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20 transition-all duration-200"
              >
                <Link href="/">
                  <Home className="h-4 w-4 text-blue-500" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
                className="hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 dark:hover:from-green-500/20 dark:hover:to-emerald-500/20 transition-all duration-200"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4 text-green-500" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-md px-2 py-1 mb-2">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent font-medium">
              Starred
            </span>
          </SidebarGroupLabel>
          <SidebarGroupAction
            title="Add starred playground"
            className="hover:bg-yellow-500/10 dark:hover:bg-yellow-500/20 transition-colors"
          >
            <Plus className="h-4 w-4 text-yellow-500" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 && recentPlaygrounds.length === 0 ? (
                <div className="text-center text-slate-500 dark:text-slate-400 py-4 w-full bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg mx-2">
                  <Code2 className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm">Create your first playground</p>
                </div>
              ) : (
                starredPlaygrounds.map((playground) => {
                  const IconComponent = lucideIconMap[playground.icon] || Code2
                  return (
                    <SidebarMenuItem key={playground.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/playground/${playground.id}`}
                        tooltip={playground.name}
                        className="hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 dark:hover:from-purple-500/20 dark:hover:to-pink-500/20 transition-all duration-200"
                      >
                        <Link href={`/playground/${playground.id}`}>
                          {IconComponent && <IconComponent className="h-4 w-4 text-purple-500" />}
                          <span>{playground.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-md px-2 py-1 mb-2">
            <History className="h-4 w-4 mr-2 text-cyan-500" />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-medium">
              Recent
            </span>
          </SidebarGroupLabel>
          <SidebarGroupAction
            title="Create new playground"
            className="hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-colors"
          >
            <FolderPlus className="h-4 w-4 text-cyan-500" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 && recentPlaygrounds.length === 0
                ? null
                : recentPlaygrounds.map((playground) => {
                    const IconComponent = lucideIconMap[playground.icon] || Code2
                    return (
                      <SidebarMenuItem key={playground.id}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === `playground/${playground.id}`}
                          tooltip={playground.name}
                          className="hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 dark:hover:from-indigo-500/20 dark:hover:to-purple-500/20 transition-all duration-200"
                        >
                          <Link href={`/playground/${playground.id}`}>
                            {IconComponent && <IconComponent className="h-4 w-4 text-indigo-500" />}
                            <span>{playground.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="View all"
                  className="hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <Link href="/playgrounds">
                    <span className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                      View all playgrounds
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              className="hover:bg-gradient-to-r hover:from-slate-500/10 hover:to-gray-500/10 dark:hover:from-slate-500/20 dark:hover:to-gray-500/20 transition-all duration-200"
            >
              <Link href="/settings">
                <Settings className="h-4 w-4 text-slate-500" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
