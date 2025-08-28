import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import UserButton from "../components/user-botton"

export function Header() {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md w-full border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center w-full flex-col">
            <div className="flex items-center justify-between bg-white/90 dark:bg-slate-900/90 backdrop-blur-md w-full sm:min-w-[800px] sm:max-w-[1200px] rounded-b-[28px] px-4 py-2.5 relative transition-all duration-300 ease-in-out shadow-sm">
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                <div className="flex items-center gap-6 justify-center">
                  <Link href="/" className="flex items-center gap-2 justify-center group">
                    <div className="relative">
                      {/* <Image
                        src={"/public/logo.svg"}
                        alt="CodeX Logo"
                        height={40}
                        width={40}
                        className="transition-transform group-hover:scale-110"
                      /> */}
                    </div>
                    <span className="hidden sm:block font-bold text-xl bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                      CodeX
                    </span>
                  </Link>
                  <span className="text-slate-300 dark:text-slate-600">|</span>

                  <div className="hidden sm:flex items-center gap-6">
                    <Link
                      href="/docs"
                      className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors relative group"
                    >
                      Docs
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all group-hover:w-full" />
                    </Link>
                    <Link
                      href="/api"
                      className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors flex items-center gap-2 relative group"
                    >
                      API
                      <span className="text-emerald-600 dark:text-emerald-400 border border-emerald-500 dark:border-emerald-400 rounded-full px-2 py-0.5 text-xs font-semibold">
                        New
                      </span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-slate-100 transition-all group-hover:w-full" />
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-4">
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  <ThemeToggle />
                  <UserButton />
                </div>

                <div className="flex sm:hidden items-center gap-3">
                  <Link
                    href="/docs"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/api"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  >
                    API
                  </Link>
                  <ThemeToggle />
                  <UserButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
