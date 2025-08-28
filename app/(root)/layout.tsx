import type React from "react"
import { cn } from "@/lib/utils"
import { Header } from "@/modules/Home/header"
import { Footer } from "@/modules/Home/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | CodeX",
    default: "CodeX - Modern Development Tools",
  },
  description: "Build faster with modern tools, components, and APIs designed for contemporary web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <div
        className={cn(
          "fixed inset-0 -z-10",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgb(226_232_240/0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(226_232_240/0.3)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgb(51_65_85/0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51_65_85/0.3)_1px,transparent_1px)]",
        )}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-slate-950" />

      <main className="relative z-10 min-h-screen">{children}</main>

      <Footer />
    </>
  )
}
