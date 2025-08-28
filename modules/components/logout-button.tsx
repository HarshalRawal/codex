"use client"
import type { LogoutButtonProps } from "./types"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter()
  const onLogout = async () => {
    await signOut()
    router.refresh()
  }
  return (
    <span className="cursor-pointer transition-all duration-200 hover:opacity-80 active:scale-95" onClick={onLogout}>
      {children}
    </span>
  )
}

export default LogoutButton
