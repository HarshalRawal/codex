import { Button } from "@/components/ui/button"
import { Github, ArrowDown, Star } from "lucide-react"

const AddRepo = () => {
  return (
    <div
      className="group relative px-6 py-6 flex flex-row justify-between items-center border-2 border-transparent rounded-2xl bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-800/50 cursor-pointer 
      transition-all duration-500 ease-out
      hover:border-gradient-to-r hover:from-slate-400 hover:to-gray-400
      hover:shadow-[0_20px_40px_rgba(71,85,105,0.15)]
      hover:scale-[1.02] hover:-translate-y-1
      before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-slate-500/10 before:to-gray-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    >
      <div className="relative z-10 flex flex-row justify-center items-start gap-4">
        <div className="relative">
          <Button
            variant={"outline"}
            className="flex justify-center items-center bg-white dark:bg-slate-800 border-2 group-hover:border-slate-400 group-hover:bg-gradient-to-r group-hover:from-slate-50 group-hover:to-gray-50 dark:group-hover:from-slate-700/50 dark:group-hover:to-gray-700/50 transition-all duration-300 shadow-lg group-hover:shadow-xl"
            size={"icon"}
          >
            <ArrowDown
              size={24}
              className="text-slate-600 dark:text-slate-400 transition-all duration-300 group-hover:translate-y-1 group-hover:text-slate-700 dark:group-hover:text-slate-300"
            />
          </Button>
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse">
            <Star className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold bg-gradient-to-r from-slate-700 to-gray-700 dark:from-slate-300 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-slate-600 group-hover:to-gray-600 transition-all duration-300">
            Import from GitHub
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-[220px] group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
            Work with your existing repositories
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="w-32 h-32 bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Github className="w-16 h-16 text-white opacity-90" />
        </div>
      </div>
    </div>
  )
}

export default AddRepo
