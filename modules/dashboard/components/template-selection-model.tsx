"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { ChevronRight, Search, Star, Code, Server, Globe, Zap, Clock, Check, Plus, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// TemplateSelectionModal.tsx
type TemplateSelectionModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: {
    title: string
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR"
    description?: string
  }) => void
}

interface TemplateOption {
  id: string
  name: string
  description: string
  icon: string
  color: string
  popularity: number
  tags: string[]
  features: string[]
  category: "frontend" | "backend" | "fullstack"
}

const templates: TemplateOption[] = [
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces with component-based architecture",
    icon: "/react.svg",
    color: "#61DAFB",
    popularity: 5,
    tags: ["UI", "Frontend", "JavaScript"],
    features: ["Component-Based", "Virtual DOM", "JSX Support"],
    category: "frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React framework for production with server-side rendering and static site generation",
    icon: "/nextjs-icon.svg",
    color: "#000000",
    popularity: 4,
    tags: ["React", "SSR", "Fullstack"],
    features: ["Server Components", "API Routes", "File-based Routing"],
    category: "fullstack",
  },
  {
    id: "express",
    name: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js to build APIs and web applications",
    icon: "/expressjs-icon.svg",
    color: "#000000",
    popularity: 4,
    tags: ["Node.js", "API", "Backend"],
    features: ["Middleware", "Routing", "HTTP Utilities"],
    category: "backend",
  },
  {
    id: "vue",
    name: "Vue.js",
    description: "Progressive JavaScript framework for building user interfaces with an approachable learning curve",
    icon: "/vuejs-icon.svg",
    color: "#4FC08D",
    popularity: 4,
    tags: ["UI", "Frontend", "JavaScript"],
    features: ["Reactive Data Binding", "Component System", "Virtual DOM"],
    category: "frontend",
  },
  {
    id: "hono",
    name: "Hono",
    description: "Fast, lightweight, built on Web Standards. Support for any JavaScript runtime.",
    icon: "/hono.svg",
    color: "#e36002",
    popularity: 3,
    tags: ["Node.js", "TypeScript", "Backend"],
    features: ["Dependency Injection", "TypeScript Support", "Modular Architecture"],
    category: "backend",
  },
  {
    id: "angular",
    name: "Angular",
    description: "Angular is a web framework that empowers developers to build fast, reliable applications.",
    icon: "/angular-2.svg",
    color: "#DD0031",
    popularity: 3,
    tags: ["React", "Fullstack", "JavaScript"],
    features: [
      "Reactive Data Binding",
      "Component System",
      "Virtual DOM",
      "Dependency Injection",
      "TypeScript Support",
    ],
    category: "fullstack",
  },
]

const TemplateSelectionModal = ({ isOpen, onClose, onSubmit }: TemplateSelectionModalProps) => {
  const [step, setStep] = useState<"select" | "configure">("select")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState<"all" | "frontend" | "backend" | "fullstack">("all")
  const [projectName, setProjectName] = useState("")

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = category === "all" || template.category === category

    return matchesCategory && matchesSearch
  })

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handleContinue = () => {
    if (selectedTemplate) {
      setStep("configure")
    }
  }

  const handleCreateProject = () => {
    if (selectedTemplate) {
      const templateMap: Record<string, "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR"> = {
        react: "REACT",
        nextjs: "NEXTJS",
        express: "EXPRESS",
        vue: "VUE",
        hono: "HONO",
        angular: "ANGULAR",
      }

      const template = templates.find((t) => t.id === selectedTemplate)
      onSubmit({
        title: projectName || `New ${template?.name} Project`,
        template: templateMap[selectedTemplate] || "REACT",
        description: template?.description,
      })
      onClose()
      // Reset state for next time
      setStep("select")
      setSelectedTemplate(null)
      setProjectName("")
    }
  }

  const handleBack = () => {
    setStep("select")
  }

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={14} className={i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
      ))
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose()
          // Reset state when closing
          setStep("select")
          setSelectedTemplate(null)
          setProjectName("")
        }
      }}
    >
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 border-0 shadow-2xl">
        {step === "select" ? (
          <>
            <DialogHeader className="space-y-4 pb-6">
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                  <Plus size={24} />
                </div>
                Select a Template
              </DialogTitle>
              <DialogDescription className="text-lg text-slate-600 dark:text-slate-300">
                Choose from our curated collection of modern templates to kickstart your project
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-8 py-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"></div>
                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 z-10"
                      size={20}
                    />
                    <Input
                      placeholder="Search templates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-slate-800 shadow-lg"
                    />
                  </div>
                </div>

                <Tabs
                  defaultValue="all"
                  className="w-full sm:w-auto"
                  onValueChange={(value) => setCategory(value as any)}
                >
                  <TabsList className="grid grid-cols-4 w-full sm:w-[450px] h-12 bg-slate-100 dark:bg-slate-800 p-1 shadow-lg">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white font-medium"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="frontend"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-medium"
                    >
                      Frontend
                    </TabsTrigger>
                    <TabsTrigger
                      value="backend"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white font-medium"
                    >
                      Backend
                    </TabsTrigger>
                    <TabsTrigger
                      value="fullstack"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-medium"
                    >
                      Fullstack
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <RadioGroup value={selectedTemplate || ""} onValueChange={handleSelectTemplate}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredTemplates.length > 0 ? (
                    filteredTemplates.map((template) => (
                      <div
                        key={template.id}
                        className={`group relative flex p-6 border-2 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1
                          ${
                            selectedTemplate === template.id
                              ? "border-transparent bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 shadow-[0_0_0_2px_rgb(59,130,246),0_20px_40px_rgba(59,130,246,0.15)] dark:shadow-[0_0_0_2px_rgb(147,197,253),0_20px_40px_rgba(147,197,253,0.15)]"
                              : /* Made template cards background solid */ "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
                          }
                        `}
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        <div className="absolute top-4 right-4 flex gap-1 p-2 rounded-lg bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
                          {renderStars(template.popularity)}
                        </div>

                        {selectedTemplate === template.id && (
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-2 shadow-lg animate-pulse">
                            <Check size={16} />
                          </div>
                        )}

                        <div className="flex gap-6 w-full">
                          <div
                            className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${template.color}20, ${template.color}10)`,
                              boxShadow: selectedTemplate === template.id ? `0 0 30px ${template.color}40` : undefined,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                            <Image
                              src={template.icon || "/placeholder.svg"}
                              alt={`${template.name} icon`}
                              width={48}
                              height={48}
                              className="object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>

                          <div className="flex flex-col flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {template.name}
                              </h3>
                              <div className="flex gap-2">
                                {template.category === "frontend" && (
                                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm">
                                    <Code size={14} />
                                  </div>
                                )}
                                {template.category === "backend" && (
                                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-sm">
                                    <Server size={14} />
                                  </div>
                                )}
                                {template.category === "fullstack" && (
                                  <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm">
                                    <Globe size={14} />
                                  </div>
                                )}
                              </div>
                            </div>

                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                              {template.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                              {template.tags.map((tag, index) => (
                                <span
                                  key={tag}
                                  className={`text-xs px-3 py-1.5 rounded-full font-medium shadow-sm transition-all duration-300 hover:scale-105 ${
                                    index % 3 === 0
                                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300"
                                      : index % 3 === 1
                                        ? "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-300"
                                        : "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <RadioGroupItem value={template.id} id={template.id} className="sr-only" />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600">
                      <div className="p-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 mb-4">
                        <Search size={48} className="text-slate-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        No templates found
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400">
                        Try adjusting your search or filters to find the perfect template
                      </p>
                    </div>
                  )}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between items-center gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 -mx-6 -mb-6 px-6 pb-6 rounded-b-2xl">
              <div className="flex items-center text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Clock size={16} className="mr-2 text-blue-500" />
                <span>Setup time: {selectedTemplate ? "2-5 minutes" : "Select a template"}</span>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="border-2 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!selectedTemplate}
                  onClick={handleContinue}
                >
                  Continue <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="space-y-4 pb-6">
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg">
                  <Sparkles size={24} />
                </div>
                Configure Your Project
              </DialogTitle>
              <DialogDescription className="text-lg text-slate-600 dark:text-slate-300">
                {templates.find((t) => t.id === selectedTemplate)?.name} project configuration
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-8 py-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="project-name" className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  Project Name
                </Label>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"></div>
                  <Input
                    id="project-name"
                    placeholder="my-awesome-project"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="relative h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-slate-800 shadow-lg"
                  />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-500" size={20} />
                  Template Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {templates
                    .find((t) => t.id === selectedTemplate)
                    ?.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            index % 3 === 0
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                              : index % 3 === 1
                                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                                : "bg-gradient-to-r from-green-500 to-emerald-500"
                          } text-white shadow-sm`}
                        >
                          <Zap size={14} />
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-purple-50 dark:from-slate-800 dark:to-purple-900 -mx-6 -mb-6 px-6 pb-6 rounded-b-2xl">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-2 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent"
              >
                Back
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleCreateProject}
              >
                Create Project
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default TemplateSelectionModal
