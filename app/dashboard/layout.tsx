import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar"
import { getAllPlaygroundForCurrentUser } from "@/modules/dashboard/actions"
export default async function DashBoardLayout({ children }: { children: React.ReactNode }) {
  const playgrounds = await getAllPlaygroundForCurrentUser();
  interface PlaygroundData {
    id: string;
    name: string;
    icon: string;   // assuming template/icon is string
    starred: boolean;
  }
  
  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  }
  const formattedPlaygroundData = playgrounds?.map((item)=>({
    id:item.id,
    name:item.title,
    starred:item.Starmark?.[0]?.isMarked || false,
    icon:technologyIconMap[item.template] || "Code2"
  }))

  

  // Uncomment when you have the actual function available
  // const playgroundData = await getAllPlaygroundForCurrentUser();
  // const technologyIconMap: Record<string, string> = {
  //   REACT: "Zap",
  //   NEXTJS: "Lightbulb",
  //   EXPRESS: "Database",
  //   VUE: "Compass",
  //   HONO: "FlameIcon",
  //   ANGULAR: "Terminal",
  // }
  // const formattedPlaygroundData = playgroundData?.map((item)=>({
  //   id:item.id,
  //   name:item.title,
  //   starred:item.Starmark[0].isMarked,
  //   icon: technologyIconMap[item.template.toUpperCase()]
  // }))

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData||[]} />
        <main className="flex-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">{children}</main>
      </div>
    </SidebarProvider>
  )
}
