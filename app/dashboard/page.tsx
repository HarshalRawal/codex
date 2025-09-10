import AddNewButton from "@/modules/dashboard/components/add-new";
import AddRepo from "@/modules/dashboard/components/add-repo";
import EmptyState from "@/modules/dashboard/components/empty-state";
import UserButton from "@/modules/auth/components/user-botton";
import { Code2, Star } from "lucide-react";
import {
  deleteProjectById,
  editProjectById,
  getAllPlaygroundForCurrentUser,
  duplicateProjectById,
} from "@/modules/dashboard/actions";
import ProjectTable from "@/modules/dashboard/components/project-table";
import { on } from "events";
import { de, id } from "date-fns/locale";
export default async function Dashboard() {
  const playgrounds = await getAllPlaygroundForCurrentUser();
  
  const formattedPlaygrounds = playgrounds!.map((playground) => ({
    id: playground.id,
    title: playground.title,
    description: playground.description ?? null, // nullable
    template: playground.template,
    createdAt: playground.createdAt,
    updatedAt: playground.updatedAt,
    userId: playground.userId,
    user: {
      id: playground.user.id,
      name: playground.user.name, // may be null
      email: playground.user.email,
      image: playground.user.image, // may be null
      role: playground.user.role,
      createdAt: playground.user.createdAt,
      updatedAt: playground.user.updatedAt,
    },
    Starmark: playground.Starmark,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gradient-to-r from-blue-200/50 to-purple-200/50 dark:from-blue-800/50 dark:to-purple-800/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage your playgrounds
                </p>
              </div>
            </div>
            <UserButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick actions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <AddNewButton />
            </div>
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <AddRepo />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm">
          <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Your Projects
            </h3>
          </div>

          <div className="p-6">
            {!playgrounds || playgrounds.length === 0 ? (
              <EmptyState />
            ) : (
                <ProjectTable
                  projects={formattedPlaygrounds || []}
                  onDeleteProject={deleteProjectById}
                  onUpdateProject={editProjectById}
                  onDuplicateProject={duplicateProjectById}
                />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
