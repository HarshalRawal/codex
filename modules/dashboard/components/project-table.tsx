"use client"

import Image from "next/image"
import { format } from "date-fns"
import type { Project } from "../types"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"
import { MoreHorizontal, Edit3, Trash2, ExternalLink, Copy, Download, Eye, Calendar, User, Code2 } from "lucide-react"
import { toast } from "sonner"
import { MarkedToggleButton } from "./mark-toggle"

interface ProjectTableProps {
  projects: Project[]
  onUpdateProject?: (id: string, data: { title: string; description: string }) => Promise<void>
  onDeleteProject?: (id: string) => Promise<void>
  onDuplicateProject?: (id: string) => Promise<void>
}

interface EditProjectData {
  title: string
  description: string
}

export default function ProjectTable({
  projects,
  onUpdateProject,
  onDeleteProject,
  onDuplicateProject,
}: ProjectTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [editData, setEditData] = useState<EditProjectData>({
    title: "",
    description: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleEditClick = (project: Project) => {
    setSelectedProject(project)
    setEditData({
      title: project.title,
      description: project.description || "",
    })
    setEditDialogOpen(true)
  }

  const handleDeleteClick = async (project: Project) => {
    setSelectedProject(project)
    setDeleteDialogOpen(true)
  }

  const handleUpdateProject = async () => {
    if (!selectedProject || !onUpdateProject) return

    setIsLoading(true)

    try {
      await onUpdateProject(selectedProject.id, editData)
      setEditDialogOpen(false)
      toast.success("Project updated successfully")
    } catch (error) {
      toast.error("Failed to update project")
      console.error("Error updating project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkasFavorite = async (project: Project) => {
    //    Write your logic here
  }

  const handleDeleteProject = async () => {
    if (!selectedProject || !onDeleteProject) return

    setIsLoading(true)
    try {
      await onDeleteProject(selectedProject.id)
      setDeleteDialogOpen(false)
      setSelectedProject(null)
      toast.success("Project deleted successfully")
    } catch (error) {
      toast.error("Failed to delete project")
      console.error("Error deleting project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDuplicateProject = async (project: Project) => {
    if (!onDuplicateProject) return

    setIsLoading(true)
    try {
      await onDuplicateProject(project.id)
      toast.success("Project duplicated successfully")
    } catch (error) {
      toast.error("Failed to duplicate project")
      console.error("Error duplicating project:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const copyProjectUrl = (projectId: string) => {
    const url = `${window.location.origin}/playground/${projectId}`
    navigator.clipboard.writeText(url)
    toast.success("Project url copied to clipboard")
  }

  const getTemplateBadgeColor = (template: string) => {
    const colors = {
      React: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
      "Next.js": "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800",
      Vue: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
      Angular: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
      Express:
        "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
      "Node.js":
        "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
    }
    return (
      colors[template as keyof typeof colors] ||
      "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800"
    )
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />

        <div className="relative">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-500" />
                    Project
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100">Template</TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    Created
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-purple-500" />
                    User
                  </div>
                </TableHead>
                <TableHead className="w-[50px] font-semibold text-gray-900 dark:text-gray-100">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow
                  key={project.id}
                  className="border-gray-200 dark:border-gray-800 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-200"
                >
                  <TableCell className="font-medium py-4">
                    <div className="flex flex-col gap-1">
                      <Link
                        href={`/playground/${project.id}`}
                        className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:underline">
                          {project.title}
                        </span>
                      </Link>
                      {project.description && (
                        <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1 ml-4">
                          {project.description}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${getTemplateBadgeColor(project.template)} font-medium`}>
                      {project.template}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {format(new Date(project.createdAt), "MMM dd, yyyy")}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                          <Image
                            src={project.user.image || "/placeholder.svg"}
                            alt={project.user.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{project.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-48 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg"
                      >
                        <DropdownMenuItem asChild>
                          <MarkedToggleButton markedForRevision={project.Starmark[0]?.isMarked} id={project.id} />
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/playground/${project.id}`} className="flex items-center">
                            <Eye className="h-4 w-4 mr-2" />
                            Open Project
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/playground/${project.id}`} target="_blank" className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Open in New Tab
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleEditClick(project)}>
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit Project
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicateProject(project)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => copyProjectUrl(project.id)}>
                          <Download className="h-4 w-4 mr-2" />
                          Copy URL
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(project)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10 rounded-lg" />
          <div className="relative">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-blue-500" />
                Edit Project
              </DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Make changes to your project details here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-gray-900 dark:text-gray-100 font-medium">
                  Project Title
                </Label>
                <Input
                  id="title"
                  value={editData.title}
                  onChange={(e) => setEditData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter project title"
                  className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="text-gray-900 dark:text-gray-100 font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={editData.description}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter project description"
                  rows={3}
                  className="border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditDialogOpen(false)}
                disabled={isLoading}
                className="border-gray-200 dark:border-gray-700"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleUpdateProject}
                disabled={isLoading || !editData.title.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/30 dark:from-red-950/10 dark:via-transparent dark:to-orange-950/10 rounded-lg" />
          <div className="relative">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-red-500" />
                Delete Project
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-600 dark:text-gray-400">
                Are you sure you want to delete "{selectedProject?.title}"? This action cannot be undone. All files and
                data associated with this project will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isLoading} className="border-gray-200 dark:border-gray-700">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteProject}
                disabled={isLoading}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
              >
                {isLoading ? "Deleting..." : "Delete Project"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
