"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { LogOut, User, Mail } from "lucide-react"
import LogoutButton from "./logout-button"
import { useCurrentUser } from "@/hooks/use-current-user"

const UserButton = () => {
  const user = useCurrentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "relative rounded-full transition-all duration-200",
            "hover:ring-2 hover:ring-slate-400/50 hover:shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-slate-400/50",
            "active:scale-95",
          )}
        >
          <Avatar className="h-10 w-10 border-2 border-slate-200/20">
            <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
            <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-700 text-white font-medium">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 mr-4 bg-white/95 backdrop-blur-sm border border-slate-200/50 shadow-xl rounded-xl p-2"
        sideOffset={8}
      >
        <div className="px-3 py-2 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
              <AvatarFallback className="bg-gradient-to-br from-slate-600 to-slate-700 text-white text-xs">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">{user?.name || "User"}</p>
              <p className="text-xs text-slate-500 truncate flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="my-2" />

        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer hover:bg-red-50 focus:bg-red-50 text-red-600 rounded-lg transition-colors duration-200">
            <LogOut className="h-4 w-4 mr-3" />
            <span className="font-medium">Sign Out</span>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
