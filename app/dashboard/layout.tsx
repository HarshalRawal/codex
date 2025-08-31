import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/modules/dashboard/components/dashboard-sidebar"

export default async function DashBoardLayout({ children }: { children: React.ReactNode }) {
  const mockPlaygroundData = [
    { id: "1", name: "React Todo App", icon: "Zap", starred: true },
    { id: "2", name: "Next.js Blog", icon: "Lightbulb", starred: false },
    { id: "3", name: "Express API", icon: "Database", starred: true },
    { id: "4", name: "Vue Dashboard", icon: "Compass", starred: false },
  ]

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
        <DashboardSidebar initialPlaygroundData={mockPlaygroundData} />
        <main className="flex-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">{children}</main>
      </div>
    </SidebarProvider>
  )
}
