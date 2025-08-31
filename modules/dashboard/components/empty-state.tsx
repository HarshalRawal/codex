import { Code2, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Animated icon container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-2xl shadow-lg">
          <Code2 className="w-12 h-12 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg animate-bounce">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Enhanced text content */}
      <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-2">
        No projects yet
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-center max-w-md mb-6">
        Start your coding journey by creating your first playground. Choose from our templates or import from GitHub.
      </p>

      {/* Action button */}
      <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <Plus className="w-4 h-4 mr-2" />
        Create Your First Project
      </Button>
    </div>
  )
}

export default EmptyState
