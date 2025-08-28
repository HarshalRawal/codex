import type React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">{children}</main>
}

export default AuthLayout
